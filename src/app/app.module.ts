import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PeopleComponent } from './people/people.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { PlanetComponent } from './planet/planet.component';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import { ScrollingModule } from '@angular/cdk/scrolling';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PeopleComponent,
    VehicleComponent,
    PlanetComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    CardModule,
    HttpClientModule,
    TableModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
