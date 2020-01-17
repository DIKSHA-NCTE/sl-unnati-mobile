import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { CurrentUserProvider } from '../current-user';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AppConfigs } from '../app.config'
import { URLSearchParams, Http } from '@angular/http';
import { Subject } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    public emit = new Subject();
    public title = new Subject();
    constructor(public http: HttpClient, public Http: Http, public currentUser: CurrentUserProvider, public storage: Storage) {
    }

    // sync subtask
    public sync(data, token) {
        let httpHeaders = new HttpHeaders({
            'x-auth-token': token
        })
        return this.http.post(AppConfigs.api_url + '/unnati/api/v1/project/sync', data, { headers: httpHeaders })
    }
    public loadChart() {
        this.emit.next('load');
    }
    public setTitle(title) {
        this.title.next(title);
    }
    public projectDetails(token, data) {
        let httpHeaders = new HttpHeaders({
            'x-auth-token': token
        })
        return this.http.post(AppConfigs.api_url + '/unnati/api/v1/projectsDetailsById', data, { headers: httpHeaders })
    }

}