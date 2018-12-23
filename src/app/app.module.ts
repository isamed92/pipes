import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';


/**
 * PARA REGISTRAR LA FECHA EN SPANISH ARGENTINE..desde..
 */
import { registerLocaleData } from '@angular/common';
import localeEsAr from '@angular/common/locales/es-AR';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';

registerLocaleData(localeEsAr, 'es-AR');

/**↑↑hasta */

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomSeguroPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
   { provide: LOCALE_ID, useValue: 'es-AR'}  // Incluido..
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
