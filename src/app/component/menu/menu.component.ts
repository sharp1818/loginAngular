import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AuthenticationService } from 'src/app/services/authentication.services';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatMenuModule, MatIconModule],
})
export class MenuComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: AuthenticationService
  ) { }
  logout() {
    this.userService.logout()
      .then((response: any) => {
        this.router.navigate(['/login']);
      })
      .catch(error => {

      });
  }
  ngOnInit(): void {
  }

}
