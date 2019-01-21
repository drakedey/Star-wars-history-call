import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { CallsPage, ChatsPage, SoundsPage } from "../pages.index";

@IonicPage()
@Component({
  template: `
    <ion-tabs color="dark">
      <ion-tab tabIcon="call" tabTitle="Calls" [root]="callsPage"></ion-tab>
      <ion-tab tabIcon="chatboxes" tabTitle="Chats" [root]="chatsPage"></ion-tab>
      <ion-tab tabIcon="musical-notes" tabTitle="Sounds" [root]="soundsPage"></ion-tab>
    </ion-tabs>`
})
export class TabsPage {
  callsPage: any;
  chatsPage: any;
  soundsPage: any;
  constructor() {
    this.settingPages();
  }

  settingPages() {
    this.callsPage = CallsPage;
    this.chatsPage = ChatsPage;
    this.soundsPage = SoundsPage;
  }


}
