
import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs, query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserListService {

    constructor(
        private firestore: Firestore
    ) {
        this.getUsers();
    }

    getUsers(): Observable<any[]> {
        return new Observable((observer) => {
          getDocs(query(collection(this.firestore, 'users')))
            .then((querySnapshot) => {
              const users: any[] = [];
              querySnapshot.forEach((user) => {
                users.push(user.data());
              });
              observer.next(users);
            })
            .catch((error) => {
              observer.error(error);
            });
        });
      }

}
