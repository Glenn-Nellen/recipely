import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translatePipe'
})
export class TranslatePipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
