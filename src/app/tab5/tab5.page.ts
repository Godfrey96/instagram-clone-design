import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Sheet3Page } from '../pages/sheet3/sheet3.page';
import { Sheet4Page } from '../pages/sheet4/sheet4.page';
import { Sheet5Page } from '../pages/sheet5/sheet5.page';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  buttonValue = 'grid';
  buttonItems: any[] = [];
  posts: any[] = [];

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.buttonItems = [
      { value: 'grid', icon: 'apps' },
      { value: 'photos', icon: 'person' },
    ];
    this.posts = [
      { id: 1, url: "https://www.tekrevol.com/blogs/wp-content/uploads/2020/09/Milliom-Dollar-App-.png" },
      { id: 2, url: "https://i.ytimg.com/vi/ES_E5X2ly6s/maxresdefault.jpg" },
      { id: 3, url: "https://www.codercanyon.net/wp-content/uploads/2020/07/ecommer_solution.jpg" },
      { id: 4, url: "https://res.cloudinary.com/dwarkeshinfotech/image/upload/c_scale,w_600,f_webp,q_auto:eco/v1546418333/products/ecommerce_script.png" },
      { id: 9, url: "https://cookthestory.com/wp-content/uploads/2019/02/How-to-Cook-Fish-Fillets-Perfectly-1392x780.jpg" },
      { id: 6, url: "https://mysewingadventure.com/wp-content/uploads/2021/11/DSC_0024-1000x667-2.jpg" },
      { id: 5, url: "https://cookthestory.com/wp-content/uploads/2019/02/How-to-Cook-Fish-Fillets-Perfectly-1392x780.jpg" },
      { id: 8, url: "https://mysewingadventure.com/wp-content/uploads/2021/11/DSC_0024-1000x667-2.jpg" },
      { id: 7, url: "https://res.cloudinary.com/dwarkeshinfotech/image/upload/c_scale,w_600,f_webp,q_auto:eco/v1546418333/products/ecommerce_script.png" },
      { id: 10, url: "https://www.codercanyon.net/wp-content/uploads/2020/07/ecommer_solution.jpg" },
      { id: 11, url: "https://i.ytimg.com/vi/ES_E5X2ly6s/maxresdefault.jpg" },
      { id: 12, url: "https://www.tekrevol.com/blogs/wp-content/uploads/2020/09/Milliom-Dollar-App-.png" },
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

  async openAdd() {
    const modal = await this.modalCtrl.create({
      component: Sheet4Page,
      breakpoints: [0.5],
      initialBreakpoint: 0.5,
      handle: true
    });
    await modal.present();
  }

  async openOptions() {
    const modal = await this.modalCtrl.create({
      component: Sheet5Page,
      breakpoints: [0.5],
      initialBreakpoint: 0.5,
      handle: true
    });
    await modal.present();
  }

  buttonsChanged(event) {
    console.log(event.detail.value);
    this.buttonValue = event.detail.value;
  }

}
