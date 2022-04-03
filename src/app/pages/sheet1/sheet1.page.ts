import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sheet1',
  templateUrl: './sheet1.page.html',
  styleUrls: ['./sheet1.page.scss'],
})
export class Sheet1Page implements OnInit {

  item1 = [
    {
      text: "Link",
      icon: "link-outline"
    },
    {
      text: "Share",
      icon: "share-social-outline"
    },
    {
      text: "Report",
      icon: "alert-circle-outline"
    }
  ];

  item2 = [
    {
      text: "Why you're seeing this post",
    },
    {
      text: "Hide",
    },
    {
      text: "Unfollow",
    }
  ];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
