import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FiltersPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'filters',
})
export class FiltersPipe implements PipeTransform {
  transform(items: any[], filter): any {
    console.log(items,filter);
    if (!items || !filter) {
        return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter(item => filter!== -1);
}
}
