import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  public skills: skill[] = [
    {
      name: 'Angular',
      img: 'assets/icons/skills/angular.png',
      description: 'Lorem Ipsum is simply dummy text.',
    },
    {
      name: 'Angular',
      img: 'assets/icons/skills/angular.png',
      description: 'Lorem Ipsum is simply dummy text.',
    },
    {
      name: 'Angular',
      img: 'assets/icons/skills/angular.png',
      description: 'Lorem Ipsum is simply dummy text.',
    },
    {
      name: 'Angular',
      img: 'assets/icons/skills/angular.png',
      description: 'Lorem Ipsum is simply dummy text.',
    },
    {
      name: 'Angular',
      img: 'assets/icons/skills/angular.png',
      description: 'Lorem Ipsum is simply dummy text.',
    },
    {
      name: 'Angular',
      img: 'assets/icons/skills/angular.png',
      description: 'Lorem Ipsum is simply dummy text.',
    },
  ];
}

interface skill {
  name: string;
  img: string;
  description: string;
}
