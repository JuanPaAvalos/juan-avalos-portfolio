import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { MyWorkComponent } from './components/my-work/my-work.component';
const routes: Routes = [
  {
    path: '',
    children: [
      // { path: 'portfolio', component: HomePageComponent },
      { path: 'home', component: MainBannerComponent },
      { path: 'about-me', component: AboutMeComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'my-work', component: MyWorkComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {}
