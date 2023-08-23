import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  public works = [
    {
      workPlace: 'Dapper Technologies',
      description: `Empresa dedicada al desarrollo web a la medida, mantenimiento y mejora de proyectos propios o de terceros. <br><br>
      Comenzando como parte de mis prácticas profesionales, trabaje en el<strong> desarrollo de una PWA de un juego de
      póker</strong> con funciones de multijugador en tiempo real utilizando <strong>Angular, Node JS, Express, MongoDB, Firebase y
      Socket.IO</strong> utilizando Git Hub como manejador de versiones. Desde entonces partícipe activamente en área de
      desarrollo en diversas <strong>páginas y aplicaciones web</strong> utilizando el MEAN stack y tecnologías como WordPress y
      Laravel. Actualmente, me encuentro en el área de CI ayudando al <strong>mantenimiento y mejora de proyectos</strong>.`,
      img: 'assets/icons/skills/angular.png',
    },
    {
      workPlace: 'Capital 28',
      description: `Empresa dedicada al desarrollo web para diferentes proyectos inmobiliarios. <br><br>
      Realice prácticas profesionales desarrollando el front end en el framework de <strong>Vue Nuxt</strong> y la librería de estilos de
      <strong>Vuetify</strong> de una <strong>aplicación web para el envió de mensajes</strong> por correo electrónico o WhatsApp a clientes
      utilizando diferentes plantillas Esta aplicación contaba con funciones como autocompletar los mensajes con la
      información de cada cliente y un sistema de registro por cada envió de mensajes.
      `,
      img: 'assets/icons/skills/angular.png',
    },
    // {
    //   workPlace: 'Mapper',
    //   description:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  Was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    //   img: 'assets/icons/skills/angular.png',
    // },
  ];
}
