import { Observable } from 'rxjs';
import { UseCase } from '../base/use-case';
import { WeatherResponse } from '../models/WeatherResponse';
import { WeatherRepository } from '../repositories/weather.repository';

export class WeatherUseCase implements UseCase<{ city: string }, WeatherResponse> {
    constructor(private weatherRepository: WeatherRepository) { }
    execute(
       params: { city: string},
    ): Observable<WeatherResponse> {
        return this.weatherRepository.getWeatherByName(params);
    }
}