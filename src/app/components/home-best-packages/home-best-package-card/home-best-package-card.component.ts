import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-best-package-card',
  templateUrl: './home-best-package-card.component.html',
  styleUrls: ['./home-best-package-card.component.css']
})
export class HomeBestPackageCardComponent {
  @Input()
    packageSingle  : {
      amount :number ,
      imgUrl:string,
      place : string,
      ratingStar:number
      description:String,
    }
}
