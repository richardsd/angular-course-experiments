import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: string[], direction: 'asc' | 'desc', propName: string) {
    return value.sort((a, b) => {
      return direction === 'asc' ? a[propName].localeCompare(b[propName]) : b[propName].localeCompare(a[propName]);
    });
  }

}
