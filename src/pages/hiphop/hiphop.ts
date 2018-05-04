import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlbumsProvider } from '../../providers/albums/albums';

@Component({
  selector: 'page-hiphop',
  templateUrl: 'hiphop.html',
})
export class HiphopPage {
  albums:any[];
  constructor(public navCtrl: NavController, private ap:AlbumsProvider) {
  }

  ionViewDidLoad() {
    this.ap.GetAlbumData().subscribe(data =>
    {
      this.albums = data.hiphop;
    })
  }

}