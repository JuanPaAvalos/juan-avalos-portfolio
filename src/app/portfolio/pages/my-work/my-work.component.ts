import { Component } from '@angular/core';
import { Project } from '../../interfaces/project.interface';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent {
  public projects: Project[] = [
    {
      name: 'gifs app',
      siteLink: 'https://juanpaavalos.github.io/GifsApp/',
      img: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2018/08/one-piece_0.jpg?tf=1200x',
      description: 'Aplicación para poder visualizar gifs utilizando peticiones http a un servicio de gifs y utilizando fuciones como local storage y servicios de angular',
      githubLink: 'https://github.com/JuanPaAvalos/GifsApp'
    },
    {
      name: 'gifs app',
      siteLink: 'https://juanpaavalos.github.io/GifsApp/',
      img: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2018/08/one-piece_0.jpg?tf=1200x',
      description: 'Aplicación para poder visualizar gifs utilizando peticiones http a un servicio de gifs y utilizando fuciones como local storage y servicios de angular',
      githubLink: 'https://github.com/JuanPaAvalos/GifsApp'
    },
    {
      name: 'gifs app',
      siteLink: 'https://juanpaavalos.github.io/GifsApp/',
      img: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2018/08/one-piece_0.jpg?tf=1200x',
      description: 'Aplicación para poder visualizar gifs utilizando peticiones http a un servicio de gifs y utilizando fuciones como local storage y servicios de angular',
      githubLink: 'https://github.com/JuanPaAvalos/GifsApp'
    },
    {
      name: 'gifs app',
      siteLink: 'https://juanpaavalos.github.io/GifsApp/',
      img: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2018/08/one-piece_0.jpg?tf=1200x',
      description: 'Aplicación para poder visualizar gifs utilizando peticiones http a un servicio de gifs y utilizando fuciones como local storage y servicios de angular',
      githubLink: 'https://github.com/JuanPaAvalos/GifsApp'
    }
  ];
}

