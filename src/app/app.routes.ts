import { Routes } from '@angular/router';

import { PublicLayout }
  from './layout/public-layout/public-layout';

import { AdminLayout }
  from './layout/admin-layout/admin-layout';

import { Home }
  from './features/home/home';

import { Portfolio  }
  from './features/portfolio/portfolio';

import { ArticleList }
  from './features/articles/article-list/article-list';

import { Contact }
  from './features/contact/contact';  

import { Dashboard }
  from './features/admin/dashboard/dashboard';

import { ArticleDetail }
  from './features/articles/article-detail/article-detail';
import { unsavedChangesGuard } from './core/guards/unsaved-changes.guard';

export const routes: Routes = [

  {
    path: '',
    component: PublicLayout,
    children: [
      {
        path: '',
        component: Home
      }, 

      {
        path: 'portfolio',
        component: Portfolio 
      },

      {
        path: 'articles',
        component: ArticleList 
      },

      {
        path: 'contact',
          loadComponent: ()=> import('./features/contact/contact').then(m => m.Contact),

          canDeactivate: [
            unsavedChangesGuard
          ]
      }, 
      {
        path: 'articles',
        component: ArticleList
      },
      {
         path: 'articles/:slug',
            loadComponent: () =>
                import('./features/articles/article-detail/article-detail')
                .then(m => m.ArticleDetail)
      },
      {
        path: '**',
        redirectTo: ''
      }


    ]
  },

  {
    path: 'admin',
    component: AdminLayout,
    children: [
      {
        path: 'dashboard',
        component: Dashboard
      }
    ]
  },

];