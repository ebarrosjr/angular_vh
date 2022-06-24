import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from 'src/app.routing';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

import { AppComponent } from './app.component';
import { GraducaoComponent } from './graducao/graducao.component';
import { PosgraducaoComponent } from './posgraducao/posgraducao.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    GraducaoComponent,
    PosgraducaoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgxUsefulSwiperModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
