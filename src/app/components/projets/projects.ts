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
      title: 'CertiUni',
      description: 'Plateforme nationale de délivrance et de vérification de diplômes universitaires au Cameroun. Chaque université gère ses propres diplômes, et toute personne peut vérifier l\'authenticité d\'un diplôme en quelques secondes. Projet d\'équipe réalisé pendant l\'Angular Talent Lab 2026.',
      images: ['images/certiuni-1.png', 'images/certiuni-2.png'],
      tags: ['Angular', 'TypeScript', 'Travail d\'équipe'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Virtual Elections',
      description: 'Plateforme web de vote en ligne permettant d\'organiser une élection de façon simple et transparente : inscription des électeurs, choix du candidat et affichage des résultats, avec une interface claire et responsive.',
      images: ['images/virtual-1.png', 'images/virtual-2.png'],
      tags: ['HTML', 'Bootstrap', 'CSS', 'JavaScript'],
      demoUrl: 'https://273-nine.vercel.app/',
      githubUrl: 'https://github.com/joycedelice/273'
    }
  ];
}