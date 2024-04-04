import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

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

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Asegúrate de que estás ejecutando esto en el navegador
    if (isPlatformBrowser(this.platformId)) {
      const element = document.querySelector('.navbar-desktop');
      if (window.pageYOffset > 50) { // Ajusta el 100 según sea necesario
        element!.classList.add('navbar-desktop-dark');
      } else {
        element!.classList.remove('navbar-desktop-dark');
      }
    }
  }

}
