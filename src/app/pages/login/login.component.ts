import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BottomRightModalComponent } from 'src/app/component/bottom-right-modal/bottom-right-modal.component';
import { AuthenticationService } from 'src/app/services/authentication.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  title: string = 'Algo ocurrio!!';
  message: string = '';
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: AuthenticationService,
    public dialog: MatDialog
  ) {
    this.formLogin = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    })

  }
  ngOnInit(): void {
  }
  onSubmit() {
    this.userService.login(this.formLogin.value)
      .then((response: any) => {
        this.router.navigate(['/userList']);
      })
      .catch(error => {
        this.openDialog(error.code)
      });
  }

  openDialog(message: string): void {
    const dialogRef = this.dialog.open(BottomRightModalComponent, {
      data: {title: this.title, message: message},
      maxWidth: '500px',
      position: { right: '20px', bottom: '20px' },
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  navigateToNewUserView() {
    this.router.navigate(['/newUser']);
  }
}
