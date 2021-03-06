import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from '@ionic/angular';
import { KendraApiService, LoaderService, urlConstants } from 'src/app/core';

import * as _ from 'underscore';


@Component({
  selector: 'page-onboarding-entity-listing-modal',
  templateUrl: 'onboarding-entity-listing-modal.html',
})
export class OnboardingEntityListingModalPage {

  data = {
    highestEntity: null,
    entityType: null
  };
  search: string = '';
  page: number = 1;
  limit: number = 100;
  entityList: Array<any> = [];
  totalCount: number = 0;
  enableLoader: boolean = false;
  selection = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCntrl: ModalController,
    private utils: LoaderService,
    private kendraService: KendraApiService
    ) {

    this.data.highestEntity = this.navParams.get('highestEntity');
    this.data.entityType = this.navParams.get('entityType');
    this.onSearch = _.debounce(this.onSearch, 500)
  }

  ionViewDidEnter() {
    this.getEntityList();
  }

  getEntityList() {
    this.utils.startLoader();
    
    const config = {
      url: urlConstants.API_URLS.GET_ENTITY_LIST + this.data.highestEntity + '?type=' + this.data.entityType + '&search=' + this.search + '&page=' + this.page + '&limit=' + this.limit
    }
    console.log('getEntityList')
    this.kendraService.get(config).subscribe(data => {
      this.utils.stopLoader();
      this.totalCount = data.result.count;
      this.entityList = [...this.entityList, ...data.result.data];
      this.enableLoader = this.totalCount > (this.limit * this.page)
    }, error =>{

    })
  }

  close(data?) {
    this.viewCntrl.dismiss(data);
  }

  loadMore() {
    if (this.page * this.limit < this.totalCount) {
      this.page++;
      this.getEntityList();
    }
  }

  onSelection(value) {
    this.selection = { _id: value._id, name: value.name };
  }

  onSearch() {
    this.page = 1;
    this.entityList = [];
    this.getEntityList();
  }

}
