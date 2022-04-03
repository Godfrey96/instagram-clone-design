import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sheet2',
  templateUrl: './sheet2.page.html',
  styleUrls: ['./sheet2.page.scss'],
})
export class Sheet2Page implements OnInit {

  items = [
    {
      text: "Post",
      icon: "apps-outline"
    },
    {
      text: "Story",
      icon: "add-circle-outline"
    },
    {
      text: "Reel",
      icon: "videocam-outline"
    }
    ,
    {
      text: "Live",
      icon: "radio-outline"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
