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
      name: 'HTML y CSS',
      img: 'assets/icons/skills/angular.png',
      description: '',
    },
    {
      name: 'Angular',
      img: 'assets/icons/skills/angular.png',
      description: '',
    },
    {
      name: 'Node JS',
      img: 'assets/icons/skills/angular.png',
      description: '',
    },
    {
      name: 'Express',
      img: 'assets/icons/skills/angular.png',
      description: '',
    },
    {
      name: 'MongoDB',
      img: 'assets/icons/skills/angular.png',
      description: '',
    },
    {
      name: 'GitHub/GitLab',
      img: 'assets/icons/skills/angular.png',
      description: '',
    },
  ];


  public hoveredElementIndex: number = 1;

  isHover(elementIndex: number){
    this.hoveredElementIndex = elementIndex;
  }
}
