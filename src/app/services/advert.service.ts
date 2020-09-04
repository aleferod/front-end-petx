import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Advert } from '../models/advert';
import { Picture } from '../models/picture'

const baseUrl = 'http://localhost:8080/advert'

@Injectable({
  providedIn: 'root'
})
export class AdvertService {

  constructor(private http: HttpClient) { }

  postAdvert(advert: Advert): Observable<Advert> {
    console.log(advert)
    return this.http.post<Advert>(baseUrl, advert);
  }

  postPicture(picture: Picture): Observable<Picture> {
    return this.http.post<Picture>(baseUrl + '/picture', picture );
  }
}
