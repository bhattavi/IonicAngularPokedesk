import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.page.html',
  styleUrls: ['./pokelist.page.scss'],
})
export class PokelistPage implements OnInit {
  pokemon: any;
  image: any;
  constructor(private router: Router) { }

  ngOnInit(){
    fetch('./assets/pokemon.json').then(res => res.json()).then(json => {
      this.pokemon = json;
    }) 
    fetch('./assets/img.json').then(res => res.json()).then(img => {
      this.image = img;
      
    })
  }
  onClick(parameter) {
  
    this.router.navigate(['pokelist', parameter]);
   

  }

}

