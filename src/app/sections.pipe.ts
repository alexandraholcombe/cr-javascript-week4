import { Pipe, PipeTransform } from '@angular/core';
import { Musician } from './musician.model';

@Pipe({
  name: 'sections',
  pure: false
})
export class SectionsPipe implements PipeTransform {

  transform(input: any[], desiredSection: string) {
    var output: any[]=[];
    if(desiredSection === 'stringMusicians') {
      for (var i = 0; i < input.length; i++) {
        if (input[i].section === 'Strings') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSection === 'windMusicians') {
      for (var i = 0; i < input.length; i++) {
        if (input[i].section === 'Woodwinds') {
          console.log(input[i].name + ', ' + input[i].section);
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSection === 'brassMusicians') {
      for (var i = 0; i < input.length; i++) {
        if (input[i].section === 'Brass') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSection === 'percussionMusicians') {
      for (var i = 0; i < input.length; i++) {
        if (input[i].section === 'Percussion') {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
