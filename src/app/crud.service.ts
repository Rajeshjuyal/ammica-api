import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private http: HttpClient) {}
  getschools() {
    return this.http.get('https://amicaapi.herokuapp.com/school');
  }
}
