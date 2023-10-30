import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BottomRightModalComponent } from 'src/app/component/bottom-right-modal/bottom-right-modal.component';
import { AuthenticationService } from 'src/app/services/authentication.services';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  formReg: FormGroup;
  title: string = 'Algo ocurrio!!';
  message: string = '';
  constructor(
    private router: Router,
    private userService: AuthenticationService,
    public dialog: MatDialog
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
        this.router.navigate(['/login']);
      })
      .catch(error => {
        this.openDialog(error.code)
      }
      );
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

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
