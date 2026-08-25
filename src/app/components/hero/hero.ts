import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent {
  // Méthode pour le scroll vers les projets
  scrollToProjects(): void {
    const element = document.getElementById('projets');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}