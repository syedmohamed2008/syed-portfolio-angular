import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {

  skillGroups = [

    {
      title: 'Backend',
      skills: [
        'C#',
        'ASP.NET Core',
        'Web API',
        'Entity Framework Core'
      ]
    },

    {
      title: 'Frontend',
      skills: [
        'Angular',
        'TypeScript',
        'HTML',
        'CSS'
      ]
    },

    {
      title: 'Database',
      skills: [
        'SQL Server',
        'T-SQL',
        'Stored Procedures',
        'Performance Tuning'
      ]
    },

    {
      title: 'Cloud & DevOps',
      skills: [
        'Azure',
        'Azure App Service',
        'Azure Storage',
        'Azure DevOps'
      ]
    }

  ];

}