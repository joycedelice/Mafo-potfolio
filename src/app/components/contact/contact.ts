import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  formData = {
    nom: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Message envoyé :', this.formData);
  }
}