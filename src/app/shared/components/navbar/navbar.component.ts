import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public showMenu: boolean = false;

  public siteLinks = [
    { name: 'Inicio', route: '#home' },
    { name: 'Sobre Mi', route: '#about-me' },
    { name: 'Experiencia', route: '#experience' },
    { name: 'Habilidades', route: '#skills' },
    { name: 'Portafolio', route: '#my-work' },
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      const element = document.querySelector('.navbar-desktop');
      if (window.pageYOffset > 50) {
        element!.classList.add('navbar-desktop-dark');
      } else {
        element!.classList.remove('navbar-desktop-dark');
      }
    }
  }

  // public onClick(path: string): void {
  //   if (path.includes('#')) {
  //     this.router.navigate(['/']);
  //     if (isPlatformBrowser(this.platformId)) {
  //       setTimeout(() => {
  //         let element = document.querySelector(path) as HTMLElement;
  //         let topOfElement = element.offsetTop - 20;
  //         window.scroll({ top: topOfElement, behavior: 'smooth' });
  //       }, 0);
  //     }
  //   } else {
  //     this.router.navigate([path]);
  //   }
  // }
}
