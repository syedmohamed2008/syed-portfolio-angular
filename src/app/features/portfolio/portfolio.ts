import { Component } from '@angular/core';

import { ProfileSummary } from './profile-summary/profile-summary';
import { Skills } from './skills/skills';
import { WorkExperience } from './work-experience/work-experience';
import { Projects } from './projects/projects';
import { Certifications } from './certifications/certifications';
import { ResumeCta } from './resume-cta/resume-cta';

@Component({
  selector: 'app-portfolio',
  imports: [
    ProfileSummary,
    Skills,
    WorkExperience,
    Projects,
    Certifications,
    ResumeCta
  ],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {
}