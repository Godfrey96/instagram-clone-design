import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Sheet3Page } from '../sheet3/sheet3.page';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  users: any[] = [];

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.users = [
      {
        id: 1,
        username: "Mogau",
        profilePic: "https://helostatus.com/wp-content/uploads/2021/09/HD-WhatsApp-profile.jpg",
        time: "1 min",
        activity: "follow"
      },
      {
        id: 2,
        username: "Khalipha",
        profilePic: "https://helostatus.com/wp-content/uploads/2021/09/HD-WhatsApp-profile.jpg",
        time: "5 mins",
        activity: "follow",
      },
      {
        id: 3,
        username: "Pamela",
        profilePic: "https://helostatus.com/wp-content/uploads/2021/09/HD-WhatsApp-profile.jpg",
        time: "1d",
        activity: "follow"
      },
      {
        id: 4,
        username: "Mogau",
        profilePic: "https://helostatus.com/wp-content/uploads/2021/09/HD-WhatsApp-profile.jpg",
        time: "1w",
        activity: "follow"
      },
    ];
  }

  async openAccount() {
    const modal = await this.modalCtrl.create({
      component: Sheet3Page,
      breakpoints: [0.2],
      initialBreakpoint: 0.2,
      handle: true
    });
    await modal.present();
  }

}
