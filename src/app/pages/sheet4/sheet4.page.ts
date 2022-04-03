import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sheet4',
  templateUrl: './sheet4.page.html',
  styleUrls: ['./sheet4.page.scss'],
})
export class Sheet4Page implements OnInit {

  items = [
    {
      text: "Post",
      icon: "apps-outline"
    },
    {
      text: "Reel",
      icon: "videocam-outline"
    },
    {
      text: "Story",
      icon: "add-circle-outline"
    },
    {
      text: "Story Highlight",
      icon: "heart-circle-outline"
    },
    {
      text: "Live",
      icon: "radio-outline"
    },
    {
      text: "Guide",
      icon: "book-outline"
    },
    {
      text: "Fundraiser",
      icon: "heart-circle-outline"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
