import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
const routes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  //{ path: 'home', loadChildren: './home/home.module#HomePageModule' },
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
  //{ path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' },
  //{ path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule' },
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }