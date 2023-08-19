import { Component } from '@angular/core';
import { ContactLink } from '../../interfaces/contactLink.interface';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.scss']
})


export class MainBannerComponent {
  public contactLinks: ContactLink[]= [
    {
      alt:'juan avalos - github',
      img: 'assets/icons/social-media/github.png',
      link: 'https://github.com/JuanPaAvalos',
    },
    {
      alt:'juan avalos - Linkedin',
      img: 'assets/icons/social-media/linkedin.png',
      link: 'https://www.linkedin.com/in/juan-pablo-avalos/',
    },
    {
      alt:'juan avalos - instagram',
      img: 'assets/icons/social-media/instagram.png',
      link: 'https://www.instagram.com/juan_deitri/',
    },
  ]
}
