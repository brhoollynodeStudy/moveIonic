import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = [
    'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
    'The Legend of Zelda',
    'Pac-Man',
    'Super Mario World',
    'Street Fighter II',
    'Half Life',
    'Final Fantasy VII',
    'Star Fox',
    'Tetris',
    'Donkey Kong III',
    'GoldenEye 007',
    'Doom',
    'Fallout',
    'GTA',
    'Halo'
  ];
  datas = []
  http:HTTP = new HTTP()
  constructor(public navCtrl: NavController) {
    this.getRequest()
  }

   getRequest (){
    this.http.get('http://192.168.123.105:8081/', {}, {})
      .then(data => {

        console.log(data.status);
        console.log(data.data); // data received by server
        this.datas =  JSON.parse(data.data)
        console.log(data.headers);

      })
      .catch(error => {
        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });
  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

}
