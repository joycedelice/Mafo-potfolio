import { Component, inject, signal } from '@angular/core';
import { ThemeService } from '../../services/theme';
import { CvService } from '../../services/cv';
import { CV } from '../../config/site.config';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  themeService = inject(ThemeService);
  cvService = inject(CvService);
  cv = CV;
  activeSection = signal<string>('accueil');

  isMenuOpen = signal<boolean>(false);

  navItems = [
    { label: 'Accueil', id: 'accueil' },
    { label: 'À propos', id: 'a-propos' },
    { label: 'Compétences', id: 'competences' },
    { label: 'Expérience', id: 'experience' },
    { label: 'Projets', id: 'projets' },
    { label: 'Contact', id: 'contact' }
  ];

  toggleMenu(): void {
    this.isMenuOpen.update(prev => !prev);
  }

  scrollTo(sectionId: string, event?: Event): void {
    event?.preventDefault();
    this.activeSection.set(sectionId);
    this.isMenuOpen.set(false);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}