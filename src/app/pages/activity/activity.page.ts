import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {

  activities: any[] = [];

  constructor() { }

  ngOnInit() {
    this.activities = [
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
        activity: "comment",
        comments: "Great content without a doubt. I am your big fan of you.",
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

}
