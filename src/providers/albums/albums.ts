import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class AlbumsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AlbumsProvider Provider');
  }

  GetAlbumData():Observable<any>{ // link to my custom API
    return this.http.get('https://jsonblob.com/api/jsonblob/c13cf126-4f98-11e8-9df1-8364f36f43b7');
  
  }

}
