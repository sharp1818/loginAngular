import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.services';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']

})
export class NewUserComponent implements OnInit {
  formReg: FormGroup;
  constructor(
    private router: Router,
    private userService: AuthenticationService
  ) {
    this.formReg = new FormGroup({
      name: new FormControl(),
      rut: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    })

  }
  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.signUp(this.formReg.value)
      .then((response: any) => {
        console.log(response);

      })
      .catch(error => console.log(error));
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
