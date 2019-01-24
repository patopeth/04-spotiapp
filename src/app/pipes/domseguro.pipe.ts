import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private _domSanitazer: DomSanitizer) { }

  transform(value: string): any {
    // esto es para saltear la proteccion de seguridad de angular ante una posible url insegura

    const urlSpoty = 'https://open.spotify.com/embed/track/';

    return this._domSanitazer.bypassSecurityTrustResourceUrl(urlSpoty + value);
  }

}
