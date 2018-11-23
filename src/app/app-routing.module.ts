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
    path: 'rooms',
    loadChildren: './pages/rooms/rooms.module#RoomsModule'
  }, {
    path: 'contact',
    loadChildren: './pages/contact/contact.module#ContactModule'
  }, {
    path: 'booking',
    loadChildren: './pages/booking/booking.module#BookingModule'
  }, {
    path: 'services',
    loadChildren: './pages/services/services.module#ServicesModule'
  }, {
    path: 'about',
    loadChildren: './pages/blog/blog.module#BlogModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
