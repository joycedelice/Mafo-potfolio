import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent {
  emailCopied = signal(false);

  scrollToProjects(): void {
    const element = document.getElementById('projets');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  async copyEmail(event: Event): Promise<void> {
    event.preventDefault();
    try {
      await navigator.clipboard.writeText('joycedelicemafo@gmail.com');
      this.emailCopied.set(true);
      setTimeout(() => this.emailCopied.set(false), 2000);
    } catch {
      // Fallback si le presse-papier est bloqué par le navigateur
      window.location.href = 'mailto:joycedelicemafo@gmail.com';
    }
  }
}