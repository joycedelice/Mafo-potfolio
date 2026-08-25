import { Component } from '@angular/core';

interface TimelineItem {
  date: string;
  dateSub: string;
  title: string;
  badge?: string;
  icon: 'graduation' | 'university' | 'laptop';
  description: string;
  tags: string[];
}

interface StatItem {
  icon: 'star' | 'code' | 'users';
  value: string;
  label: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class ExperienceComponent {
  timeline: TimelineItem[] = [
    {
      date: '2026',
      dateSub: 'En cours',
      title: 'Formation Angular - Orange Digital Center',
      badge: 'En cours',
      icon: 'graduation',
      description: 'Apprentissage approfondi du développement d\'applications web avec Angular.',
      tags: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Bootstrap', 'Git & GitHub', 'API', 'Projets pratiques']
    },
    {
      date: '2025',
      dateSub: 'Aujourd\'hui',
      title: 'Étudiante en Informatique - Université de Douala',
      badge: 'En cours',
      icon: 'university',
      description: 'Parcours en informatique avec des enseignements en algorithmique, programmation, bases de données et développement d\'applications.',
      tags: ['Algorithmique', 'Structure de données', 'Bases de données', 'Programmation', 'Réseaux']
    },
    {
      date: 'Projets',
      dateSub: 'Académiques & Personnels',
      title: 'Projets académiques & personnels',
      icon: 'laptop',
      description: 'Réalisation de différents projets académiques et personnels pour mettre en pratique mes compétences techniques et résoudre des problèmes concrets.',
      tags: ['HTML/CSS', 'JavaScript', 'Angular', 'Python', 'PHP', 'MySQL', 'Git & GitHub']
    }
  ];

  stats: StatItem[] = [
    { icon: 'star', value: '+10', label: 'Projets réalisés' },
    { icon: 'code', value: 'Compétences', label: 'Techniques acquises' },
    { icon: 'users', value: 'Équipe', label: 'Travail collaboratif' }
  ];
}