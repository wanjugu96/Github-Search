import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercaseCount'
})
export class UppercaseCountPipe implements PipeTransform {

  
  transform(value: any): string  {

    return value.toUpperCase;
}


}
