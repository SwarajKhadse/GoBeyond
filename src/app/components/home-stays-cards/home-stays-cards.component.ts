import { Component } from '@angular/core';

@Component({
  selector: 'app-home-stays-cards',
  templateUrl: './home-stays-cards.component.html',
  styleUrls: ['./home-stays-cards.component.css']
})
export class HomeStaysCardsComponent {
  staysData = [
    {
      imgUrl :"../.../../../../../assets/homePage/stays1.png",
      place : "Kavaratti",
      ratingStar:4.6,
      reviewCount:1.5,
      description: "Kavaratti is the capital of the Union Territory of Lakshadweep having ...",
    },
    {
      imgUrl :"../.../../../../../assets/homePage/stays2.png",
      place : "Kavaratti",
      ratingStar:4.7,
      reviewCount:1.5,
      description: "Kavaratti is the capital of the Union Territory of Lakshadweep having ...",
    },
    {
      imgUrl :"../.../../../../../assets/homePage/stays3.png",
      place : "Kavaratti",
      ratingStar:4.8,
      reviewCount:1.5,
      description: "Kavaratti is the capital of the Union Territory of Lakshadweep having ...",
    },
    {
      imgUrl :"../.../../../../../assets/homePage/stays4.png",
      place : "Kavaratti",
      ratingStar:4.3,
      reviewCount:1.5,
      description: "Kavaratti is the capital of the Union Territory of Lakshadweep having ...",
    },
    {
      imgUrl :"../.../../../../../assets/homePage/stays5.png",
      place : "Kavaratti",
      ratingStar:4.9,
      reviewCount:1.5,
      description: "Kavaratti is the capital of the Union Territory of Lakshadweep having ...",
    },
    {
      imgUrl :"../.../../../../../assets/homePage/stays6.png",
      place : "Kavaratti",
      ratingStar:5,
      reviewCount:1.5,
      description: "Kavaratti is the capital of the Union Territory of Lakshadweep having ...",
    },
    ]
}
