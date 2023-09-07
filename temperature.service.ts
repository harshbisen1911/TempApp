import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable({

  providedIn: 'root'

})

export class TemperatureService {

  constructor(private http: HttpClient) { }


  getCurrentTemperature(): Observable<number> {

    // Replace with actual API endpoint to fetch temperature

    return this.http.get<number>('https://your-api-url/current-temperature');

  }


  getTemperatureEvents(): Observable<any> {

    // Replace with actual API endpoint to receive temperature events

    return this.http.get<any>('https://your-api-url/temperature-events');

  }

}