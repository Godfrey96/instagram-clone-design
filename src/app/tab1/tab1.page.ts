import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { Sheet1Page } from '../pages/sheet1/sheet1.page';
import { Sheet2Page } from '../pages/sheet2/sheet2.page';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  slideOpts = {};
  users: any[] = [];
  posts: any[] = [];

  constructor(
    private modalCtrl: ModalController,
    private popoverController: PopoverController,
    private router: Router,
    public postService: PostService
  ) { }

  ngOnInit() {
    this.users = [
      {
        username: "Your story",
        profilePic: "https://helostatus.com/wp-content/uploads/2021/09/HD-WhatsApp-profile.jpg",
      },
      {
        username: "Mogau",
        profilePic: "https://loveshayariimages.in/wp-content/uploads/2021/10/1080p-Latest-Whatsapp-Profile-Images-1.jpg",
      },
      {
        username: "Khalipha",
        profilePic: "https://png.pngitem.com/pimgs/s/206-2067128_cat-png-image-free-download-searchpng-cute-stuff.png",
      },
      {
        username: "Pamela",
        profilePic: "https://helostatus.com/wp-content/uploads/2021/09/HD-WhatsApp-profile.jpg",
      },
      {
        username: "Pamela",
        profilePic: "https://loveshayariimages.in/wp-content/uploads/2021/10/1080p-Latest-Whatsapp-Profile-Images-1.jpg",
      },
      {
        username: "Pamela",
        profilePic: "https://helostatus.com/wp-content/uploads/2021/09/HD-WhatsApp-profile.jpg",
      },
      {
        username: "Pamela",
        profilePic: "https://helostatus.com/wp-content/uploads/2021/09/HD-WhatsApp-profile.jpg",
      },
      {
        username: "Pamela",
        profilePic: "https://helostatus.com/wp-content/uploads/2021/09/HD-WhatsApp-profile.jpg",
      }
    ];
    console.log('users: ', this.users);

    this.slideOpts = {
      slidesPerView: 7.5,
      slideShadows: true
    };
  }

  async open() {
    const modal = await this.modalCtrl.create({
      component: Sheet1Page,
      breakpoints: [0.4],
      initialBreakpoint: 0.4,
      handle: true
    });
    await modal.present();
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: Sheet2Page,
      cssClass: 'my-custom-class',
      event: ev,
      size: 'auto',
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  openActivity() {
    this.router.navigateByUrl('/activity');
  }

  openChat() {
    this.router.navigateByUrl('/chat');
  }

}
