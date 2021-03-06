import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { SliderComponent } from './components/slider/slider.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { SidebarAdminComponent } from './components/sidebar-admin/sidebar-admin.component';
import { ConfirmLogoutComponent } from './models/confirm-logout/confirm-logout.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    InstagramComponent,
    NavbarAdminComponent,
    SidebarAdminComponent,
    ConfirmLogoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    InstagramComponent,
    NavbarAdminComponent,
    SidebarAdminComponent,
    ConfirmLogoutComponent
  ]
})
export class CommonsModule { }
