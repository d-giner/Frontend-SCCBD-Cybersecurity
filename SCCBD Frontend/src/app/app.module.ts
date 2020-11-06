import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CryptoService } from 'src/services/CryptoService';
import { HttpClientModule } from '@angular/common/http';
import { AliceWithTtpComponent } from './components/alice-with-ttp/alice-with-ttp.component';
import { AliceWithRsaComponent } from './components/alice-with-rsa/alice-with-rsa.component';
import { APP_ROUTING } from './app.routes';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    AliceWithTtpComponent,
    AliceWithRsaComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [CryptoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
