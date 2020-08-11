import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    // {
    //   title: 'Saldo/Creditos/Cuotas vencidas',
    //   url: '/folder/Inbox',
    //   icon: 'wallet'
    // },
    {
      title: 'Saldo/Creditos/Cuotas vencidas',
      url: '/micuenta',
      icon: 'wallet'
    },
    {
      title: 'Transferencias',
      url: '/transferencia',
      icon: 'paper-plane'
    },
    {
      title: 'Cambio Contraseña',
      url: '/cambiocontrasena',
      icon: 'pencil'
    },
    {
      title: 'Salir',
      url: '/folder/Trash',
      icon: 'log-out'
    }
  ];
  public labels = ['.'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
