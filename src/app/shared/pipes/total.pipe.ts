import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {


    if (value) {
      if (args[0] === 'totalHt') {
        return value.totalHt();
      }
      if (args[0] === 'totalTtc') {
        return value.totalTtc();
      }

    }
    return null;
  }

}
