import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class AlbumsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AlbumsProvider Provider');
  }

  GetAlbumData():Observable<any>{
    return this.http.get('https://bit.ly/2HPpPxr');
  }

}
