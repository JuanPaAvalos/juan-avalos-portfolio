import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public showMenu: boolean = false;

  public siteLinks = [
    { name: 'portfolio', route: 'portfolio/home' },
    { name: 'about-me', route: 'portfolio/about-me' },
    { name: 'experience', route: 'portfolio/experience' },
    { name: 'skills', route: 'portfolio/skills' },
    { name: 'my-work', route: 'portfolio/my-work' },
  ];
}
