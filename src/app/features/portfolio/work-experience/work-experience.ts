import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.html',
  styleUrl: './work-experience.css'
})
export class WorkExperience {

  experiences = [

    {
      role: 'Technical Lead / Senior .NET Developer',
      description:
        'Designing and developing enterprise applications using .NET, Web API, SQL Server and Azure.'
    },

    {
      role: '.NET Developer',
      description:
        'Developed backend services, database solutions and business applications using Microsoft technologies.'
    }

  ];

}