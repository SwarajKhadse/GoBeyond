import { Component } from '@angular/core';

@Component({
  selector: 'app-home-best-packages',
  templateUrl: './home-best-packages.component.html',
  styleUrls: ['./home-best-packages.component.css']
})
export class HomeBestPackagesComponent {
    packagesData = [
    {
      amount : 500,
      imgUrl :"../../../../assets/homePage/cardImg1.png",
      place : "Indonesia",
      ratingStar:4.5,
      description: "Explore the Beauty of the island for 3 days and 2 nights with our travel agency...",
    },
    {
      amount : 400,
      imgUrl :"../../../../assets/homePage/cardImg2.png",
      place : "Thailand",
      ratingStar:4.3,
      description: "Explore the Beauty of the island for 3 days and 2 nights with our travel agency...",
    },
    {
      amount : 200,
      imgUrl :"../../../../assets/homePage/cardImg3.png",
      place : "HongKong",
      ratingStar:4.8,
      description: "Explore the Beauty of the island for 3 days and 2 nights with our travel agency...",
    },
   

    ]
}
// {
//   amount : 700,
//   place : "kanyakumari",
//   ratingStar:4.9,
//   description: "Explore the Beauty of the island for 3 days and 2 nights with our travel agency...",
// },
// {
//   amount : 100,
//   place : "Dharamshala",
//   ratingStar:4.5,
//   description: "Explore the Beauty of the island for 3 days and 2 nights with our travel agency...",
// },