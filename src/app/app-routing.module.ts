import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, {
    path: 'home',
    loadChildren: './pages/home/home.module#HomeModule'
  },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginModule'
  },
   {
    path: 'blog',
    loadChildren: './pages/blog/blog.module#BlogModule'
  }, {
    path: 'contact',
    loadChildren: './pages/contact/contact.module#ContactModule'
  }, {
    path: 'hotel',
    loadChildren: './pages/hotel/hotel.module#HotelModule'
  }, {
    path: 'services',
    loadChildren: './pages/services/services.module#ServicesModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
