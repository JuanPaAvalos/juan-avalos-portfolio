import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MyWorkComponent } from './pages/my-work/my-work.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { MainBannerComponent } from './pages/main-banner/main-banner.component';



@NgModule({
  declarations: [
    HomePageComponent,
    MainBannerComponent,
    AboutMeComponent,
    ExperienceComponent,
    SkillsComponent,
    MyWorkComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
