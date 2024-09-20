import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-data',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-data.component.html',
  styleUrl: './search-data.component.css'
})
export class SearchDataComponent {
  @Output() search: EventEmitter<string> = new EventEmitter();
  personForm = new FormGroup({
    city: new FormControl(''),

  });
  searchFilter(){
    this.search.emit(this.personForm.value.city as string);
  }
}
