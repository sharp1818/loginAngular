import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  constructor(
    private router: Router,
    private userService: AuthenticationService
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })

  }
  ngOnInit(): void {
  }
  onSubmit() {
    this.userService.login(this.formLogin.value)
      .then((response: any) => {
        console.log(response);
      })
      .catch(error => console.log(error));
  }

  navigateToNewUserView() {
    this.router.navigate(['/newUser']);
  }
}
