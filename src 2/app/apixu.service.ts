import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }
  getWeather(location){
    return this.http.get(
      'https://api.apixu.com/v1/current.json?key=becb2008f5864d4e9ef135622191705&q=' + location
    );
  }
}
