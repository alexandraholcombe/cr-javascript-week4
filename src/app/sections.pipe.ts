import { Pipe, PipeTransform } from '@angular/core';
import { Musician } from './musician.model';

@Pipe({
  name: 'sections',
  pure: false
})
export class SectionsPipe implements PipeTransform {

  transform(input: any[], desiredSection: string, desiredInstrument: string) {
    let output: any[] = [];
    if ((desiredSection === 'allSections') && (desiredInstrument === 'allInstruments')) {
      return input;
    }

    if (desiredSection === 'allSections') {
      for (let i = 0; i < input.length; i++) {
        if (input[i].instrument === desiredInstrument) {
          output.push(input[i]);
        }
      }
      return output;
    }

    if (desiredInstrument === 'allInstruments') {
      for (let i = 0; i < input.length; i++) {
        if (input[i].section === desiredSection) {
          output.push(input[i]);
        }
      }
      return output;
    }

    for (let i = 0; i < input.length; i++) {
      if ((input[i].section === desiredSection) && (input[i].instrument === desiredInstrument)) {
        output.push(input[i]);
      }
    }
    return output;
  }

}
