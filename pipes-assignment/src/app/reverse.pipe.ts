import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
    if (value.length === 0 || value.length === 1) {
      return value;
    }
    let result = '';
    for (let i = value.length -1; i >= 0; i--) {
      result += value[i];
    }
    return result;
  }

}
