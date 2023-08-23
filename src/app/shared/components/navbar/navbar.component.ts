import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public showMenu: boolean = false;

  public siteLinks = [
    { name: 'Inicio', route: 'portfolio/home' },
    { name: 'Sobre Mi', route: 'portfolio/about-me' },
    { name: 'Experiencia', route: 'portfolio/experience' },
    { name: 'Habilidades', route: 'portfolio/skills' },
    { name: 'Portafolio', route: 'portfolio/my-work' },
  ];
}
