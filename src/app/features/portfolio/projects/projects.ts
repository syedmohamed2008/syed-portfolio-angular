import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

  projects = [

    {
      title: 'JN Tech Portfolio Platform',
      technologies:
        'ASP.NET Core, Web API, SQL Server, Angular, Azure',
      description:
        'Portfolio and technical article platform with public and administration features.'
    },

    {
      title: 'Enterprise Applications',
      technologies:
        '.NET, Web API, SQL Server',
      description:
        'Enterprise business applications built using Microsoft technologies.'
    }

  ];

}