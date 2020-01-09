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
    path: 'stap2',
    loadChildren: () => import('./stap2/stap2.module').then( m => m.Stap2PageModule)
  },
  {
    path: 'stap3',
    loadChildren: () => import('./stap3/stap3.module').then( m => m.Stap3PageModule)
  },
  {
    path: 'stap4',
    loadChildren: () => import('./stap4/stap4.module').then( m => m.Stap4PageModule)
  },
  {
    path: 'meatrecipes',
    loadChildren: () => import('./meatrecipes/meatrecipes.module').then( m => m.MeatrecipesPageModule)
  },
  {
    path: 'fishrecipes',
    loadChildren: () => import('./fishrecipes/fishrecipes.module').then( m => m.FishrecipesPageModule)
  },
  {
    path: 'veganrecipes',
    loadChildren: () => import('./veganrecipes/veganrecipes.module').then( m => m.VeganrecipesPageModule)
  },
  {
    path: 'veganrecipes',
    loadChildren: () => import('./veganrecipes/veganrecipes.module').then( m => m.VeganrecipesPageModule)
  },
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
    path: 'mijnprofiel',
    loadChildren: () => import('./mijnprofiel/mijnprofiel.module').then( m => m.MijnprofielPageModule)
  },
  {
    path: 'uitloggen',
    loadChildren: () => import('./uitloggen/uitloggen.module').then( m => m.UitloggenPageModule)
  },
  //{ path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' },
  //{ path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }