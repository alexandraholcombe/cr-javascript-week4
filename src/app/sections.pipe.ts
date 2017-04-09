import { Pipe, PipeTransform } from '@angular/core';
import { Musician } from './musician.model';

@Pipe({
  name: 'sections',
  pure: false
})
export class SectionsPipe implements PipeTransform {

  transform(input: any[], desiredSection: string) {
    var output: any[]=[];
    if(desiredSection === 'allMusicians') {
      return input;
    } else {
      for (let i = 0; i < input.length; i++) {
        if (input[i].section === desiredSection) {
          output.push(input[i]);
        }
      }
      return output;
    }
  }

}
