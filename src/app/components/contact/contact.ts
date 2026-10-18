import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

type SendStatus = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  // ⚠️ Remplace par la clé reçue sur web3forms.com
  private readonly ACCESS_KEY = 'd99b104d-728e-4de4-8220-2482b8bb2cda';

  formData = {
    nom: '',
    email: '',
    message: ''
  };

  status = signal<SendStatus>('idle');
  errorMessage = signal<string>('');

  async onSubmit() {
    if (this.status() === 'sending') return;

    this.status.set('sending');
    this.errorMessage.set('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: this.ACCESS_KEY,
          name: this.formData.nom,
          email: this.formData.email,
          message: this.formData.message,
          subject: `Nouveau message de ${this.formData.nom} — Portfolio`
        })
      });

      const result = await response.json();

      if (result.success) {
        this.status.set('success');
        this.formData = { nom: '', email: '', message: '' };
        // Revenir à l'état neutre après quelques secondes
        setTimeout(() => this.status.set('idle'), 5000);
      } else {
        throw new Error(result.message || 'Échec de l\'envoi');
      }
    } catch (err) {
      this.status.set('error');
      this.errorMessage.set('Une erreur est survenue. Réessayez ou écrivez-moi directement par email.');
      console.error('Erreur envoi formulaire :', err);
    }
  }
}