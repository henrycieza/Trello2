import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeadComponent } from './head/head.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [HeadComponent, MainComponent, HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
