import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-home-stays-card-single',
  templateUrl: './home-stays-card-single.component.html',
  styleUrls: ['./home-stays-card-single.component.css']
})
export class HomeStaysCardSingleComponent {
  @Input()
  stays : {
    imgUrl :string,
      place : string,
      ratingStar:number,
      reviewCount:number,
      description:string 
  }
}
