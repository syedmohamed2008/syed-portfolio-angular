import { Component } from '@angular/core';

import { Hero } from './hero/hero';
import { About } from './about/about';
import { Expertise } from './expertise/expertise';
import { Experience } from './experience/experience';
import { Projects } from './projects/projects';
import { LatestArticles } from './latest-articles/latest-articles';
import { ContactCta } from './contact-cta/contact-cta';

@Component({
  selector: 'app-home',
  imports: [
    Hero,
    About,
    Expertise,
    Experience,
    Projects,
    LatestArticles,
    ContactCta
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
}