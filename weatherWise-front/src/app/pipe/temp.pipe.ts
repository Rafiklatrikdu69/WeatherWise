import { Pipe, PipeTransform } from '@angular/core';
const KELVIN = 273;
@Pipe({
  name: 'temp',
  standalone: true
})
export class TempPipe implements PipeTransform {
  transform(value: number): number {
    const tempRound = Math.round(value-KELVIN);
    return tempRound;
  }
}
