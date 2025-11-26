import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const url = `${environment.weatherApiUrl}?key=${environment.weatherApiKey}&q=${city}&aqi=no`;
    return this.http.get(url);
  }
}
