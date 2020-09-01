import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cidade} from '../models/cidade'
const baseUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'

@Injectable({
  providedIn: 'root'
})
export class BuscadorIbgeServiceService {

  constructor(private http: HttpClient) { }

  getCities(uf: string): Observable<any> {
    return this.http.get(baseUrl + uf + '/distritos');
  }
}
