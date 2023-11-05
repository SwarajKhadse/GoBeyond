import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css']
})
export class ReviewCardComponent {
      @Input()
      reviewsSingle:{
        name :string,
        profieImg:string,
        rev:string,
        starsRating:number,
        place:string,
      }
}
