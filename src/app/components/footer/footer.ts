import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  emailNewsletter: string = '';
  currentYear: number = 2026;

  onSubscribe() {
    if (this.emailNewsletter) {
      console.log('Inscription newsletter pour :', this.emailNewsletter);
      this.emailNewsletter = '';
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}