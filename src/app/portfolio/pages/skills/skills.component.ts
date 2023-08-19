import { Component } from '@angular/core';
import { Skill } from '../../interfaces/skill.interface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  public skills: Skill[] = [
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
