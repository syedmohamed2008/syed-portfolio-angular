import { Component } from '@angular/core';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.html',
  styleUrl: './expertise.css'
})
export class Expertise {

  expertiseItems = [
    {
      title: '.NET Development',
      description: 'ASP.NET Core, Web API, C# and Entity Framework Core.'
    },
    {
      title: 'Angular',
      description: 'Modern responsive frontend applications using Angular.'
    },
    {
      title: 'Microsoft Azure',
      description: 'Azure App Service, Storage, Key Vault and Azure DevOps.'
    },
    {
      title: 'SQL Server',
      description: 'Database design, queries, procedures and optimization.'
    }
  ];

}