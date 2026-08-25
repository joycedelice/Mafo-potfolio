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
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
        { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' }
      ]
    },
    {
      title: 'Backend',
      icon: 'database',
      items: [
        { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'JSON', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg' }
      ]
    },
    {
      title: 'Outils',
      icon: 'tools',
      items: [
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' }
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
        { name:'discipline', icon:''}
      ]
    }
  ];
}