import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CrearRfcComponent } from './components/crear-rfc/crear-rfc.component';
import { FooterComponent } from './components/footer/footer.component';
import { MostrarRfcComponent } from './components/mostrar-rfc/mostrar-rfc.component'; 
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CrearRfcComponent,
    FooterComponent,
    MostrarRfcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
