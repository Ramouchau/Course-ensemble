import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { NotificationsServiceProvider } from '../providers/notifications-service';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;
	rootPage: any = LoginPage;
	constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, notificationSerice: NotificationsServiceProvider) {
		platform.ready().then(() => {
			statusBar.styleDefault();
		});
	}

	public openProfile() {
		this.nav.push(ProfilePage);
	}

}

