import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  images: [string, string]; // 2 photos par projet
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
      title: 'Délices de Douala',
      description: 'Application web Angular permettant de découvrir, noter et filtrer les meilleurs restaurants de Douala. Système de notation par étoiles en temps réel, tri dynamique et filtres avancés, entièrement construit avec les Angular Signals.',
      images: ['images/delices-1.png', 'images/delices-2.png'],
      tags: ['Angular', 'TypeScript', 'Signals', 'HttpResource', 'Routing'],
      demoUrl: 'https://delices-de-douala-344o.vercel.app/',
      githubUrl: 'https://github.com/joycedelice/delices-de-douala'
    },
    {
      title: 'SmartQueue CM',
      description: 'Application de gestion des files d\'attente permettant aux utilisateurs de suivre leur position en temps réel.',
      images: ['images/smartqueue.png', 'images/smartqueue-2.png'],
      tags: ['Angular', 'TypeScript', 'Socket.IO'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Joyce Food',
      description: 'Plateforme web de restaurant avec présentation du menu et système de commande en ligne.',
      images: ['images/joycefood.png', 'images/joycefood-2.png'],
      tags: ['Angular', 'Bootstrap', 'Firebase'],
      demoUrl: '#',
      githubUrl: '#'
    }
  ];
}