import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sheet5',
  templateUrl: './sheet5.page.html',
  styleUrls: ['./sheet5.page.scss'],
})
export class Sheet5Page implements OnInit {

  items = [
    {
      text: "Settings",
      icon: "settings-outline"
    },
    {
      text: "Archive",
      icon: "archive-outline"
    },
    {
      text: "Your activity",
      icon: "timer-outline"
    },
    {
      text: "QR code",
      icon: "qr-code-outline"
    },
    {
      text: "Saved",
      icon: "bookmark-outline"
    },
    {
      text: "Orders and Payments",
      icon: "card-outline"
    },
    {
      text: "Close Friends",
      icon: "list-outline"
    },
    {
      text: "COVID-19 Informantion Center",
      icon: "heart-circle-outline"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
