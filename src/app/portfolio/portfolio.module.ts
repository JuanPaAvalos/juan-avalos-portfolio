import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { MyWorkComponent } from './pages/my-work/my-work.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { MainBannerComponent } from './pages/main-banner/main-banner.component';
import { SharedModule } from '../shared/shared.module';
import { HomePageComponent } from './pages/home-page/home-page.component';



@NgModule({
  declarations: [
    MainBannerComponent,
    AboutMeComponent,
    ExperienceComponent,
    SkillsComponent,
    MyWorkComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
