import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { HomeModule } from '../features/home/home.module';



@NgModule({
  declarations: [LayoutComponent, FooterComponent],
  imports: [
    CommonModule,
    HomeModule
  ],
  exports: [LayoutComponent, FooterComponent]
})
export class CoreModule { }
