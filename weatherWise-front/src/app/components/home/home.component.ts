import { Component, computed, inject, OnInit, Signal, signal } from '@angular/core';
import { WeatherComponent } from '../weather/weather.component';
import { WeatherService } from '../../../domain/services/weather.service';
import { WeatherResponse } from '../../../domain/models/WeatherResponse';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WeatherComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  weatherService = inject(WeatherService);
  searchChange = signal('tignieu');
  weatherResponse !:Signal<Observable<WeatherResponse>>; 
ngOnInit(): void {
  try{
    this.weatherResponse  = computed(
      () =>  this.weatherService.getDataWeather(this.searchChange())
    
    );
  }catch(err){
    console.error(err);
  }
}
  searchFilter(city: string){
    this.searchChange.set(city);
  }
}
