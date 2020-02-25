import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationCardService } from '../notification-card/notification.service';
import { ApiProvider } from '../api/api';
import { Storage } from '@ionic/storage';
import { Badge } from '@ionic-native/badge/ngx';
import { MenuController } from '@ionic/angular';
import { HomeService } from '../home/home.service';
import { Platform } from '@ionic/angular';
import { UpdateProfileService } from '../update-profile/update-profile.service';
import { NetworkService } from '../network.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() showMenu: boolean = true;
  @Input() showBack: boolean;
  @Input() noBorder: boolean = true;
  @Input() isGoBack: boolean = false;
  @Input() isParam;
  @Input() bg = '#fff'
  public connected: any = navigator.onLine;
  page = 1;
  isIos;
  limit = 20;
  public notificationCount;
  constructor(public router: Router,
    public notificationCardService: NotificationCardService,
    public storage: Storage,
    public platform: Platform,
    public menuController: MenuController,
    public badge: Badge, public api: ApiProvider,
    public homeService: HomeService,
    public updateProfileService: UpdateProfileService,
    public networkService: NetworkService) {
    networkService.emit.subscribe(status => {
      this.connected = status;
    })
    this.isIos = this.platform.is('ios') ? true : false;
    notificationCardService.notificationCount.subscribe(count => {
      this.notificationCount = count;
      this.badge.set(this.notificationCount);
    })
  }

  ngOnInit() {
    this.isIos = this.platform.is('ios') ? true : false;
    this.fetchAllNotifications();
  }

  public fetchAllNotifications(infinateScrollRefrnc?) {
    this.storage.get('userTokens').then(data => {
      if (data) {
        this.api.refershToken(data.refresh_token).subscribe((data: any) => {
          let parsedData = JSON.parse(data._body);
          if (parsedData && parsedData.access_token) {
            let userTokens = {
              access_token: parsedData.access_token,
              refresh_token: parsedData.refresh_token,
            };
            this.storage.set('userTokens', userTokens).then(usertoken => {
              this.notificationCardService.getAllNotifications(userTokens.access_token, this.page, this.limit).subscribe((data: any) => {
                if (data.result.data) {
                  let update: boolean = false;
                  data.result.data.forEach(notification => {
                    if (notification.action === 'Update' && !notification.is_read && !update) {
                      update = true;
                      this.storage.set('clearNotification', notification).then((data) => {
                        this.updateProfileService.updateProfile('Update');
                      });
                    }
                  });
                }
              }, error => {
                // intentially left blank
              })
              this.notificationCardService.checkForNotificationApi(userTokens.access_token).subscribe((data: any) => {
                this.notificationCardService.getCount(data.result.count);
              }, error => {
              })
            }, error => {
              // intentially left blank
            })
          }
        })
      }
    })
  }
  // Navigate to notification screen
  public navigateToNotification() {
    this.router.navigate(['project-view/notifications']);
  }

  public goBack() {
    if (this.isParam) {
      this.router.navigate([this.isGoBack, this.isParam]);
    } else {
      this.router.navigate([this.isGoBack]);
    }
  }
  public menuToggle() {
    this.menuController.toggle();
  }
}