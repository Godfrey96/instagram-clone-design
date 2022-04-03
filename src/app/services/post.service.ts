import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts = [
    {
      user: {
        username: "Mogau",
        profilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
      },
      data: {
        picture: "https://www.tekrevol.com/blogs/wp-content/uploads/2020/09/Milliom-Dollar-App-.png",
        ago: "10 hours",
        comments: 10,
        like: 243,
        id: 1
      }
    },
    {
      user: {
        username: "Godfrey",
        profilePic: "https://loveshayariimages.in/wp-content/uploads/2021/10/1080p-Latest-Whatsapp-Profile-Images-1.jpg"
      },
      data: {
        picture: "https://i.ytimg.com/vi/ES_E5X2ly6s/maxresdefault.jpg",
        ago: "8 months",
        comments: 850,
        like: 2103,
        id: 2
      }
    },
    {
      user: {
        username: "Khalipha",
        profilePic: "https://helostatus.com/wp-content/uploads/2021/09/HD-WhatsApp-profile.jpg"
      },
      data: {
        picture: "https://www.codercanyon.net/wp-content/uploads/2020/07/ecommer_solution.jpg",
        ago: "13 hours",
        comments: 15,
        like: 23,
        id: 3
      }
    },
    {
      user: {
        username: "Pamela",
        profilePic: "https://helostatus.com/wp-content/uploads/2021/09/HD-WhatsApp-profile.jpg"
      },
      data: {
        picture: "https://res.cloudinary.com/dwarkeshinfotech/image/upload/c_scale,w_600,f_webp,q_auto:eco/v1546418333/products/ecommerce_script.png",
        ago: "4 years",
        comments: 85,
        like: 113,
        id: 1
      }
    },
    {
      user: {
        username: "Thuto",
        profilePic: "https://helostatus.com/wp-content/uploads/2021/09/profile-ke-liye-photo.jpg"
      },
      data: {
        picture: "https://cookthestory.com/wp-content/uploads/2019/02/How-to-Cook-Fish-Fillets-Perfectly-1392x780.jpg",
        ago: "8 months",
        comments: 5,
        like: 26,
        id: 2
      }
    },
    {
      user: {
        username: "Losta",
        profilePic: "https://png.pngitem.com/pimgs/s/206-2067128_cat-png-image-free-download-searchpng-cute-stuff.png"
      },
      data: {
        picture: "https://mysewingadventure.com/wp-content/uploads/2021/11/DSC_0024-1000x667-2.jpg",
        ago: "13 hours",
        comments: 75,
        like: 264,
        id: 3
      }
    }
  ];

  constructor() { }
}
