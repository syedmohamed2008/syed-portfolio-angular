import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.html',
  styleUrl: './certifications.css'
})
export class Certifications {

  certifications = [
    {
      title: 'Microsoft Azure',
      description: 'Azure cloud knowledge and continuous learning.'
    },
    {
      title: 'Angular',
      description: 'Modern Angular application development.'
    },
    {
      title: '.NET',
      description: 'Continuous learning in ASP.NET Core and Web API.'
    }
  ];

}