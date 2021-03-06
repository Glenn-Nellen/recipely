import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
const routes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  //{ path: 'home', loadChildren: './home/home.module#HomePageModule' },

  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  {
    path: 'favorieten',
    loadChildren: () => import('./favorieten/favorieten.module').then( m => m.FavorietenPageModule)
  },
  {
    path: 'mijnrecepten',
    loadChildren: () => import('./mijnrecepten/mijnrecepten.module').then( m => m.MijnreceptenPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'inloggen',
    loadChildren: () => import('./inloggen/inloggen.module').then( m => m.InloggenPageModule)
  },
  {
    path: 'newpassword',
    loadChildren: () => import('./newpassword/newpassword.module').then( m => m.NewpasswordPageModule)
  },
  {
    path: 'recept',
    loadChildren: () => import('./recept/recept.module').then( m => m.ReceptPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'stappen',
    loadChildren: () => import('./stappen/stappen.module').then( m => m.StappenPageModule)
  },
  {
    path: 'review',
    loadChildren: () => import('./review/review.module').then( m => m.ReviewPageModule)
  },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }