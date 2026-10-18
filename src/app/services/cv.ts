import { Injectable } from '@angular/core';
import { CV } from '../config/site.config';

@Injectable({ providedIn: 'root' })
export class CvService {
  async download(event: Event): Promise<void> {
    // Téléphone / tablette : on laisse le lien s'ouvrir dans un nouvel onglet
    if (window.matchMedia('(pointer: coarse)').matches) return;

    event.preventDefault();

    try {
      const response = await fetch(CV.url, { cache: 'no-store' });
      const type = response.headers.get('content-type') ?? '';

      // Sécurité : si ce n'est pas un PDF, on ne télécharge pas un fichier cassé
      if (!response.ok || !type.includes('pdf')) {
        throw new Error('Le fichier reçu n\'est pas un PDF');
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = CV.downloadName;
      document.body.appendChild(link);
      link.click();
      link.remove();

      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (error) {
      console.error('Erreur téléchargement CV :', error);
      window.open(CV.url, '_blank', 'noopener');
    }
  }
}