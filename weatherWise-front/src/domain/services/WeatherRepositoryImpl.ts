// infrastructure/repositories/WeatherRepositoryImpl.ts
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherRepository } from '../repositories/weather.repository';
import { WeatherResponse } from '../models/WeatherResponse';
import { environment } from '../../environments/environment.development';


@Injectable({
    providedIn: 'root'
})
export class WeatherRepositoryImpl extends WeatherRepository {
    private apiKey = environment.apiURL; 
    http =  inject(HttpClient)
   
    override getWeatherByName(params: { city: string; }): Observable<WeatherResponse> {
        return this.http.get<WeatherResponse>(`${this.apiKey}&q=${params.city}`);
    }
}
