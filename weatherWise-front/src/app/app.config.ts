import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { WeatherUseCase } from '../domain/usecases/weatherUseCase.usecase';
import { WeatherRepository } from '../domain/repositories/weather.repository';
import { WeatherRepositoryImpl } from '../domain/services/WeatherRepositoryImpl';


const weatherUseCaseFactory = 
  (weatherRepo: WeatherRepository) => new WeatherUseCase(weatherRepo);

export const weatherUseCaseProvider = {
    provide: WeatherUseCase,
    useFactory: weatherUseCaseFactory,
    deps: [WeatherRepository], 
};


export const weatherRepositoryProvider = {
    provide: WeatherRepository,
    useClass: WeatherRepositoryImpl, 
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideHttpClient(),
    weatherRepositoryProvider,  
    weatherUseCaseProvider       
  ],
};
