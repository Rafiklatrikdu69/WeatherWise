import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-data',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-data.component.html',
  styleUrl: './search-data.component.css'
})
export class SearchDataComponent {
  @Output() search: EventEmitter<string> = new EventEmitter();
  weatherForm = new FormGroup({
    city: new FormControl('',[Validators.required]),
  });
  searchFilter(){
    if (this.verifySearch(this.weatherForm)) {
      this.search.emit(this.weatherForm.value.city as string);
    }
  }
  verifySearch(weatherForm:FormGroup):boolean{
    return weatherForm.value.city!.length != 0
  }
}
