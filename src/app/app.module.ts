import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HelloComponent} from './hello/hello.component';
import {NgOptimizedImage} from '@angular/common';
import { TelaDeLoginComponent } from './tela-de-login/tela-de-login.component';



@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TelaDeLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


