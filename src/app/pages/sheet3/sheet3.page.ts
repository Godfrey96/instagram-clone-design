import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sheet3',
  templateUrl: './sheet3.page.html',
  styleUrls: ['./sheet3.page.scss'],
})
export class Sheet3Page implements OnInit {

  items = [
    {
      text: "Link",
      profilePic: "https://helostatus.com/wp-content/uploads/2021/09/HD-WhatsApp-profile.jpg"
    },
    {
      text: "Add account",
      icon: "add-circle-outline"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
