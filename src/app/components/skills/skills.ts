import { Component } from '@angular/core';

interface SkillItem {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  icon: 'code' | 'database' | 'tools' | 'rocket' | 'users';
  items: SkillItem[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class SkillsComponent {
  skills: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: 'code',
      items: [
        { name: 'HTML', icon: 'images/icons/html5-original.svg' },
        { name: 'CSS', icon: 'images/icons/css3-original.svg' },
        { name: 'JavaScript', icon: 'images/icons/javascript-original.svg' },
        { name: 'TypeScript', icon: 'images/icons/typescript-original.svg' },
        { name: 'Angular', icon: 'images/icons/angularjs-original.svg' },
        { name: 'Bootstrap', icon: 'images/icons/bootstrap-original.svg' }
      ]
    },
    {
      title: 'Backend',
      icon: 'database',
      items: [
        { name: 'PHP', icon: 'images/icons/php-original.svg' }
      ]
    },
    {
      title: 'Outils',
      icon: 'tools',
      items: [
        { name: 'GitHub', icon: 'images/icons/github-original.svg' },
        { name: 'VS Code', icon: 'images/icons/vscode-original.svg' },
        { name: 'Vercel', icon: 'images/icons/vercel-original.svg' }
      ]
    },
    {
      title: 'Soft Skills',
      icon: 'users',
      items: [
        { name: 'Travail en équipe', icon: '' },
        { name: 'Autonomie', icon: '' },
        { name: 'Communication', icon: '' },
        { name: 'Curiosité', icon: '' },
        { name: 'Discipline', icon: '' }
      ]
    }
  ];
}