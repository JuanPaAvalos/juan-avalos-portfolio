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
      name: 'React',
      img: 'assets/icons/skills/react-logo.webp',
      description: '',
    },
    {
      name: 'Angular',
      img: 'assets/icons/skills/angular-logo.webp',
      description: '',
    },
    {
      name: 'HTML, CSS & SASS',
      img: 'assets/icons/skills/html-logo.webp',
      description: '',
    },
    // {
    //   name: 'CSS & SASS',
    //   img: 'assets/icons/skills/scss-logo.webp',
    //   description: '',
    // },
    {
      name: 'TypeScript',
      img: 'assets/icons/skills/ts-logo.webp',
      description: '',
    },
    {
      name: 'Node JS & Express',
      img: 'assets/icons/skills/node-logo.webp',
      description: '',
    },
    {
      name: 'Dot Net',
      img: 'assets/icons/skills/net-logo.webp',
      description: '',
    },
    {
      name: 'MongoDB',
      img: 'assets/icons/skills/mongo-logo.webp',
      description: '',
    },
    {
      name: 'Supabase',
      img: 'assets/icons/skills/supabase-logo.webp',
      description: '',
    },
    {
      name: 'GitHub / GitLab',
      img: 'assets/icons/skills/github-logo.webp',
      description: '',
    },
    {
      name: 'Google Ads Suite',
      img: 'assets/icons/skills/google-ads-logo.webp',
      description: '',
    },
  ];


  public hoveredElementIndex: number = 1;

  isHover(elementIndex: number){
    this.hoveredElementIndex = elementIndex;
  }
}
