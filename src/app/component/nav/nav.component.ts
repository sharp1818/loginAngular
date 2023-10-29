import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.services';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  standalone: true,

  imports: [
    RouterModule, 
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    MenuComponent
  ],
})
export class NavComponent {
  constructor(private authService: AuthenticationService) { }
  ngOnInit() {
    // Puedes acceder al usuario actual
    const currentUser = this.authService.user;
    if (currentUser) {
      console.log('Usuario actual:', currentUser);
    } else {
      console.log('Ningún usuario ha iniciado sesión.');
    }
  }
}
