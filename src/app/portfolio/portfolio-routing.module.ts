import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MainBannerComponent } from './pages/main-banner/main-banner.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { MyWorkComponent } from './pages/my-work/my-work.component';
const routes: Routes = [
  {
    path: '',
    children: [
      // { path: 'portfolio', component: HomePageComponent },
      { path: 'inicio', component: MainBannerComponent },
      { path: 'sobre-mi', component: AboutMeComponent },
      { path: 'experiencia-laboral', component: ExperienceComponent },
      { path: 'mis-habilidades', component: SkillsComponent },
      { path: 'mis-proyectos', component: MyWorkComponent },
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      { path: '**', redirectTo: 'inicio' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {}
