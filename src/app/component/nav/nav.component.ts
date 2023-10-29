import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.services';
import { MenuComponent } from '../menu/menu.component';
import { CommonModule } from '@angular/common';

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
    MenuComponent,
    CommonModule
  ],
})
export class NavComponent implements OnInit {
  isAuthenticate: boolean = false;
  constructor(public authService: AuthenticationService) {
  }
  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      if (user) {
        this.isAuthenticate = true
      } else {
        this.isAuthenticate = false
      }
    });
  }
}
