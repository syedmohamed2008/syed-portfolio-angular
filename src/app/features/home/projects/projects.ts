import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

  projects = [
    {
      title: 'Portfolio Platform',
      description:
        'Portfolio and technical article platform using .NET, Angular, Web API and Azure.'
    },
    {
      title: 'Enterprise Applications',
      description:
        'Business applications using ASP.NET Core, SQL Server and REST APIs.'
    }
  ];

}