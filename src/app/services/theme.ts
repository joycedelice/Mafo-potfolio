import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // Sombre par défaut (true)
  isDarkMode = signal<boolean>(true);

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme !== null) {
      this.isDarkMode.set(savedTheme === 'dark');
    }
    this.applyTheme();
  }

  toggleTheme(): void {
    this.isDarkMode.update(prev => !prev);
    localStorage.setItem('theme', this.isDarkMode() ? 'dark' : 'light');
    this.applyTheme();
  }

  private applyTheme(): void {
    const isDark = this.isDarkMode();
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }
}