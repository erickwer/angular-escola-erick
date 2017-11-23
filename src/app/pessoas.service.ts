import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class PessoasService {
  API_PES = 'http://localhost:3000'
  
  constructor(private http: HttpClient) { }

  getPessoas(): Observable<any[]> {
    return this.http.get<any[]>(this.API_PES + '/pessoas');
  }
  getPessoa(id: number): Observable<any> {
    return this.http.get<any>(this.API_PES + '/pessoas/' + id + '?_embed=pessoas');
  }
}
