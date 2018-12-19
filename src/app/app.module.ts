import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';


/**
 * PARA REGISTRAR LA FECHA EN SPANISH ARGENTINE..desde..
 */
import { registerLocaleData } from '@angular/common';
import localeEsAr from '@angular/common/locales/es-AR';

registerLocaleData(localeEsAr, 'es-AR');

/**↑↑hasta */

@NgModule({
  declarations: [
    AppComponent
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
