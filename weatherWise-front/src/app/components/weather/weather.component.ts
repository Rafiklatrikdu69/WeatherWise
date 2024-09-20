import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { WeatherResponse } from '../../../domain/models/WeatherResponse';
import { TempPipe } from '../../pipe/temp.pipe';
import { SearchDataComponent } from './search-data/search-data.component';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
   TempPipe,
   SearchDataComponent
   ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent{
@Input() weatherProps ?:WeatherResponse;
@Output() search: EventEmitter<string> = new EventEmitter();

 searchFilter(city: string){
   this.search.emit(city)
 }
}



