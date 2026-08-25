import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  // Informations des badges du bas
  infoChips = [
    {
      icon: 'location',
      label: 'Douala, Cameroun'
    },
    {
      icon: 'education',
      label: 'Étudiante en informatique'
    },
    {
      icon: 'work',
      label: 'Freelance'
    }
  ];
}