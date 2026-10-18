import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CV } from '../../config/site.config';
import { CvService } from '../../services/cv';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  cvService = inject(CvService);
  cv = CV;
  emailNewsletter: string = '';
  currentYear: number = new Date().getFullYear();

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