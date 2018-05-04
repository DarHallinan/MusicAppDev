import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlbumsProvider } from '../../providers/albums/albums';

@Component({
  selector: 'page-metal',
  templateUrl: 'metal.html',
})
export class MetalPage {
  albums:any[];
  constructor(public navCtrl: NavController, private ap:AlbumsProvider) {
  }

  ionViewDidLoad() {
    this.ap.GetAlbumData().subscribe(data =>
    {
      this.albums = data.metal;
    })
  }

}
