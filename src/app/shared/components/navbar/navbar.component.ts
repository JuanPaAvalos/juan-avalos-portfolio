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
    { name: 'Inicio', route: 'portfolio/inicio' },
    { name: 'Sobre Mi', route: 'portfolio/sobre-mi' },
    { name: 'Experiencia', route: 'portfolio/experiencia-laboral' },
    { name: 'Habilidades', route: 'portfolio/mis-habilidades' },
    { name: 'Portafolio', route: 'portfolio/mis-proyectos' },
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
