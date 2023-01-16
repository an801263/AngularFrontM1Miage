import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter'
  })
  export class FilterPipe implements PipeTransform {
    transform(items: any[], searchTerm: string): any[] {
      if(!items) return [];
      if(!searchTerm) return items;
      searchTerm = searchTerm.toLowerCase();
      return items.filter( it => {
          for(let key in it){
              if(it[key] && it[key].toString().toLowerCase().includes(searchTerm)){
                  return true;
              }
          }
          return false;
      });
  }
  
  }