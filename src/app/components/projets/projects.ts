import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'SmartQueue CM',
      description: 'Application de gestion des files d\'attente permettant aux utilisateurs de suivre leur position en temps réel.',
      image: 'assets/images/smartqueue.jpg',
      tags: ['Angular', 'TypeScript', 'Socket.IO'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Joyce Food',
      description: 'Plateforme web de restaurant avec présentation du menu et système de commande en ligne.',
      image: 'assets/images/joycefood.jpg',
      tags: ['Angular', 'Bootstrap', 'Firebase'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Dashboard Analytics',
      description: 'Tableau de bord interactif permettant de visualiser et analyser des données.',
      image: 'assets/images/dashboard.jpg',
      tags: ['Angular', 'TypeScript', 'Chart.js', 'REST API'],
      demoUrl: '#',
      githubUrl: '#'
    },

  ];
}