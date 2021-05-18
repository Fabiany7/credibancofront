import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchValue: string): any {

    if (!searchValue) return value;
    return value.filter((v: { autor: string; anno: string; }) => v.autor.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 || v.anno.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)

  }

}
