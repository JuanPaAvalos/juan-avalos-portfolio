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
      description: `<strong>Empresa especializada en el desarrollo web para el sector hotelero.</strong><br><br>
      Me desempeño en el área de desarrollo, participando en el mantenimiento y desarrollo del frontend
      de una plataforma para la gestión hotelera, utilizando <strong>React y .NET</strong> como tecnologías principales.<br><br>

      Actualmente, mi responsabilidad principal es la implementación de nuevas funcionalidades
      y la mejora de la experiencia del usuario en la plataforma a través de <strong>microfrontend</strong>.<br><br>

      <strong>Proyectos destacables:</strong><br>

      Durante la implementación de nuevas funcionalidades, desarrollé un <strong>framework de React en Vite</strong>
      para la integración de componentes basado en <strong>microfrontend</strong> para las vistas de proyectos existentes,
      implementando <strong>estructuras de proyecto, patrones de diseño y arquitectura de software</strong>, además de diferentes librerías para facilitar el desarrollo.`,
      img: 'assets/icons/works/avance-logo.webp',
    },
    {
      workPlace: 'Dapper Technologies',
      description: `<strong>Empresa especializada en el desarrollo, mantenimiento y mejora de proyectos a la medida.</strong><br><br>
      Comenzando en el área de desarrollo, contribuí ampliamente en diferentes proyectos con <strong>MEAN stack, WordPress y Laravel</strong>.
      Posteriormente, me integré al área de <strong>CI/CD y Marketing</strong>, dando mantenimiento a proyectos propios y de terceros,
      pero principalmente encargándome de implementar herramientas de Google Ad Manager, como <strong>Analytics, Ads y Tag Manager</strong>,
      junto con la creación y seguimiento de campañas, además de utilizar <strong>Hotjar y Meta Ads de Facebook</strong>. <br><br>
      <strong>Proyectos destacables:</strong><br>
      <strong>Desarrollé una PWA de un juego de póker</strong> con funciones de multijugador en tiempo real. <br>
      <strong>Reconstrucción de una plataforma web</strong> utilizada para el manejo y control de documentos de diferentes obras
       de una reconocida empresa de calefacción y ventilación que requirió grandes actualizaciones y refactorización. <br>`,
      img: 'assets/icons/works/dapper-technologies-logo.webp',
    },
    {
      workPlace: 'Capital 28',
      description: `<strong> Empresa dedicada al desarrollo para el sector inmobiliario.</strong><br><br>

      Desarrolle el frontend de una aplicación web inmobiliaria que automatiza la comunicación con clientes mediante
      plantillas de correo y WhatsApp, esta aplicación cuenta con funciones como autocompletar los mensajes con la
      información de cada cliente y un sistema de registro por cada envío de mensajes.<br><br>

      Este proyecto fue desarrollado utilizando <strong>Vue Nuxt</strong> y la librería de estilos de
      <strong>Vuetify</strong>.`,
      img: 'assets/icons/works/capital-28-logo.webp',
    }
  ];
}
