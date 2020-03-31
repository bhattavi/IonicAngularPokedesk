import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  pokemon: any;
  img: any;
  constructor(public alertController: AlertController, public router: Router) { }

  ngOnInit(){
    fetch('./assets/pokemon.json').then(res => res.json()).then(json => {
      this.pokemon = json;
    })
    fetch('./assets/img.json').then(res => res.json()).then(img => {
      this.img = img;
      
    })
  }

  buttonPress() {

  
    this.alert();

  }

  getPokemonList(){
  
   

    this.router.navigate(['pokelist']);
  }

  async alert() {
    const alert = await this.alertController.create({
      header: 'Pokemon',
      subHeader: 'Gotta Catch em All',
      message: 'Pika Pika',
      buttons: ['Okay'],
    });

    await alert.present();
  }
  


}
