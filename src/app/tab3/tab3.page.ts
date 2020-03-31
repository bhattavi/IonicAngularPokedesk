import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  pokemon: any;
  image: any;
 
  constructor(private pokemonService: PokemonService) {}

   

ngOnInit(){
  fetch('./assets/pokemon.json').then(res => res.json()).then(json => {
    this.pokemon = json;
  })
  fetch('./assets/img.json').then(res => res.json()).then(img => {
    this.image = img;
    
  })
 

  // this.pokemon = this.pokemonService.getAllPokemon;
  // this.image = this.pokemonService.getAllImages;
  // console.log(this.image)
}


}
