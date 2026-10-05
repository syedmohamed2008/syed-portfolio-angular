import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ExternalLink } from '../../shared/directives/external-link';
import { HoverHighlight } from '../../shared/directives/hover-highlight';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive, 
    ExternalLink,
    HoverHighlight
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  isMenuOpen = signal(false);

  toggleMenu(): void {
    this.isMenuOpen.update(value => !value);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

}