import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  themeService = inject(ThemeService);
   isDarkMode = signal(false);
  activeSection = signal<string>('accueil');
  
  // Signal pour l'état du menu mobile (ouvert / fermé)
  isMenuOpen = signal<boolean>(false);

  navItems = [
    { label: 'Accueil', id: 'accueil' },
    { label: 'À propos', id: 'a-propos' },
    { label: 'Compétences', id: 'competences' },
    { label: 'Experience', id:'experience'},
    { label: 'Projets', id: 'projets' },
    { label: 'Contact', id: 'contact' }
    
  ];

  // Bascule l'état du menu burger
  toggleMenu(): void {
    this.isMenuOpen.update(prev => !prev);
  }

  // Scroll vers la section ET ferme le menu mobile
  scrollTo(sectionId: string): void {
    this.activeSection.set(sectionId);
    this.isMenuOpen.set(false); // Ferme le menu mobile au clic

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
}