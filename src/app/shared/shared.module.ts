import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PrimaryBtnComponent } from './components/primary-btn/primary-btn.component';



@NgModule({
  declarations: [
    NavbarComponent,
    PrimaryBtnComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  exports: [
    NavbarComponent,
    PrimaryBtnComponent
  ]
})
export class SharedModule { }
