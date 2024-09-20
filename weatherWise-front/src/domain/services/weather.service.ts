import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { WeatherResponse } from '../models/WeatherResponse';
import { Observable } from 'rxjs';
import { WeatherUseCase } from '../usecases/weatherUseCase.usecase';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private w:WeatherUseCase){

  }
  getDataWeather(city:string):Observable<WeatherResponse>{
    return this.w.execute({city:city});
  }
}
