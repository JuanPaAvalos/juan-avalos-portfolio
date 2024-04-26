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
      Actualmente me desempeño en el área de CI/CD, mejorando diversos proyectos con tecnologías como Angular, Node JS, Express, MongoDB, Firebase ademas de  WordPress y
      Laravel. Tambien trabajo en el equipo de marketing utilizando la suit de herramientas Goggle como Ads o Tag Manager. <br><br>

      Como proyectos destacables: <br>
      <strong>Desarrolle de una PWA de un juego de póker</strong> con funciones de multijugador en tiempo real<br>
      <strong>Refactorización de un cotizador de seguros universitarios</strong> al que se integrarón varias funciones <br> <strong>reconstrucción de una plataforma de manejo de documentos </strong> para el control de obras de una reconocida empresa de calefacción y ventilación. <br>
      <strong>partícipar activamente </strong> en el desarrollo en diversas páginas y aplicaciones web`,
      img: 'assets/icons/works/dapper-technologies-logo.webp',
    },
    {
      workPlace: 'Capital 28',
      description: `Empresa dedicada al desarrollo web para diferentes proyectos inmobiliarios. <br><br>
      Realice prácticas profesionales desarrollando el front end en el framework de <strong>Vue Nuxt</strong> y la librería de estilos de
      <strong>Vuetify</strong> de una <strong>aplicación web para el envío de mensajes</strong> por correo electrónico o WhatsApp a clientes
      utilizando diferentes plantillas Esta aplicación contaba con funciones como autocompletar los mensajes con la
      información de cada cliente y un sistema de registro por cada envío de mensajes.
      `,
      img: 'assets/icons/works/capital-28-logo.webp',
    },
    // {
    //   workPlace: 'Mapper',
    //   description:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  Was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    //   img: 'assets/icons/skills/angular.png',
    // },
  ];
}
