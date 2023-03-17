import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BalanceComponent } from './components/balance/balance.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModelsComponent } from './components/models/models.component';
import { FormsModule } from '@angular/forms';
import { TablasComponent } from './components/tablas/tablas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BalanceComponent,
    FooterComponent,
    ModelsComponent,
    TablasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
