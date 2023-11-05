import { Component } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
      reviewData = [{
        name :"Roman Rey",
        profieImg:"../../../../assets/homePage/profile1.png",
        rev:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur ac quam in congue. ",
        starsRating:5,
        place:"Toranto, Canada"
      },
      {
        name :"Alex Tom",
        profieImg:"../../../../assets/homePage/profile2.png",
        rev:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur ac quam in congue. ",
        starsRating:4,
        place:"Toranto, Canada"
      },
      {
        name :"Finn Balor",
        profieImg:"../../../../assets/homePage/profile3.png",
        rev:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur ac quam in congue. ",
        starsRating:5,
        place:"Toranto, Canada"

      },
    ]
}
