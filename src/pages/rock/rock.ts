import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlbumsProvider } from '../../providers/albums/albums';

@Component({
  selector: 'page-rock',
  templateUrl: 'rock.html',
})
export class RockPage {
  albums:any[]=[];
  constructor(public navCtrl: NavController, private ap:AlbumsProvider) {
  }

  ionViewDidLoad() {
    this.ap.GetAlbumData().subscribe(data =>
    {
      this.albums = data.rock;
    })
  }

}
