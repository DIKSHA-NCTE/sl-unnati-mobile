import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Network } from '@ionic-native/network/ngx';
import { NetworkService } from './network.service';
import { PopoverComponent } from './popover/popover.component';
import { CurrentUserProvider } from './current-user';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS, } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AppLauncher, AppLauncherOptions } from '@ionic-native/app-launcher/ngx';
import { Market } from '@ionic-native/market/ngx';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ApiProvider } from '../app/api/api';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { DatePipe } from '@angular/common';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { FcmProvider } from './fcm';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Badge } from '@ionic-native/badge/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { FileTransfer, FileTransferObject,FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { SharedModule } from './shared.module';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { GetSubEntitiesPage } from './get-sub-entities/get-sub-entities.page';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    PopoverComponent,
    GetSubEntitiesPage
  ],
  entryComponents: [
    PopoverComponent,
    GetSubEntitiesPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    SharedModule,
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    StatusBar,
    Network,
    NetworkService,
    CurrentUserProvider,
    InAppBrowser,
    AppLauncher,
    ApiProvider,
    Market,
    DatePicker,
    DatePipe,
    SocialSharing,
    SplashScreen,
    FileTransfer,
    FileTransferObject,
    File,
    FileChooser,
    Camera,
    FilePath,
    AppVersion,
    FileOpener,
    Base64,
    AndroidPermissions,
    Deeplinks,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    FCM,
    FcmProvider,
    LocalNotifications, Badge
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public statusBar: StatusBar) {
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString('#fff');
  }
}
platformBrowserDynamic().bootstrapModule(AppModule);
