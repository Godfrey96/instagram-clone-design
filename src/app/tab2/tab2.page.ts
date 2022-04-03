import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  buttonValue = 'grid';
  buttonItems: any[] = [];
  posts: any[] = [];

  constructor() { }

  ngOnInit() {
    this.buttonItems = [
      { value: 'grid', icon: 'grid' },
      { value: 'reels', icon: 'film' },
      { value: 'photos', icon: 'images' },
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

}
