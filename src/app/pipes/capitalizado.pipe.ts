import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalizado'})
export class CapitalizadoPipe implements PipeTransform {
    transform(value: string, todas: boolean = true): string {
        value = value.toLowerCase();

        let words = value.split(' ');
        if(todas){
            for ( let i in words ) {
                words[i] = words[i][0].toUpperCase() + words[i].substr(1);
            }
        }else{
            words[0] = words[0][0].toUpperCase() + words[0].substr(1);
        }

        return words.join(' ');
    }
}
