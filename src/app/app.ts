import { Component, signal } from '@angular/core';

import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { SkillsComponent } from './components/skills/skills';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';
import { ProjectsComponent } from './components/projets/projects';
import { ExperienceComponent } from './components/experience/experience';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent , HeroComponent, AboutComponent, SkillsComponent , ContactComponent ,FooterComponent , ProjectsComponent, ExperienceComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Mafo-portfolio');
}
