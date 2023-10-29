import { Component, OnInit } from '@angular/core';
import { UserListService } from 'src/app/services/userList.services';
import { __values } from 'tslib';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})


export class UserListComponent implements OnInit {
  userItems: any[] = [];

  constructor(
    private userListService: UserListService
  ) {
  }
  ngOnInit(): void {

    this.userListService.getUsers().subscribe(
      (users) => {
        this.userItems = users;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }  

}
