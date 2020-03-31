import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-pokecards',
  templateUrl: './pokecards.page.html',
  styleUrls: ['./pokecards.page.scss'],
})
export class PokecardsPage implements OnInit {
  
  data:any;
 
  constructor(private activatedRoute: ActivatedRoute) { }
  queryParamRes: Params;
  convertQueryParam: string;
  ngOnInit() {
  
    this.activatedRoute.paramMap.subscribe(paramMap => {

      if(!paramMap.has('id')){

        return;
      }
      this.data = paramMap.get('id');
      console.log(this.data);
      // this.data = this.id;
      //this.cardImg = this.image[this.data.name]

      console.log(this.data);
      //console.log(this.cardImg);

    });
   
  
}

}

