import { Observable } from 'rxjs';
import { WeatherResponse } from '../models/WeatherResponse';
export abstract class WeatherRepository {
    abstract getWeatherByName(params: {city: string}): Observable<WeatherResponse>;
}