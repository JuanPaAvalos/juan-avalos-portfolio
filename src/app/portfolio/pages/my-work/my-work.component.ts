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
      name: 'Gifs App',
      description: 'Aplicación para poder visualizar gifs utilizando peticiones http a un servicio de gifs y utilizando funciones como local storage y servicios de Angular.',
      githubLink: 'https://github.com/JuanPaAvalos/GifsApp',
      img: 'assets/images/projects/gifs-app-img.webp',
      siteLink: 'https://juanpaavalos.github.io/GifsApp/',
    },
    {
      name: 'Pipes App',
      // siteLink: 'https://github.com/JuanPaAvalos/pipesApp',
      img: 'assets/images/projects/pipes-app-img.webp',
      description: 'Aplicación web hecha con PrimeNg que sirve como demostración del uso de diferentes tipos de pipes así como la creación de pipes personalizados.',
      githubLink: 'https://juanpaavalos.github.io/pipesApp/',
    },
    {
      name: 'Paises App',
      siteLink: 'https://juanpaavalos.github.io/PaisesApp/',
      img: 'assets/images/projects/paises-app-img.webp',
      description: 'Aplicación web que aprovecha componentes y servicios para obtener información de países mediante peticiones HTTP de una API pública. Cuenta con características como local storage, router e intercambio de información entre componentes padres e hijos.',
      githubLink: 'https://github.com/JuanPaAvalos/PaisesApp',
    },
    {
      name: 'Heroes App',
      img: 'assets/images/projects/heroes-app-img.webp',
      description: 'CRUD de héroes hecho con angular material, cuenta con un backend local gracias a la librería de json-server además de un login que aprovecha los guards para proteger el acceso y el uso de diferentes módulos para las secciones del login y el CRUD.',
      githubLink: 'https://github.com/JuanPaAvalos/GifsApp',
    },
    {
      name: 'Forms App',
      siteLink: 'https://juanpaavalos.github.io/formsApp/ ',
      img: 'assets/images/projects/forms-app-img.webp',
      description: 'Aplicación que sirve para mostrar y probar el uso de formularios reactivos, utilizando funciones como validaciones propias de angular, personalizadas y asíncronas, además de manejo de errores a través de servicios.',
      githubLink: 'https://github.com/JuanPaAvalos/formsApp',
    }
  ];
}

