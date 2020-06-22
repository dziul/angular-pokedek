import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { Interceptor } from './core/interceptor/interceptor.module';
import { HomeComponent } from './home/home.component';
import { DirectivesModule } from './shared/directives/directives.module';
import { MaterialComponentsModule } from './shared/material-components/material-components.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    Interceptor,
    MaterialComponentsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DirectivesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
