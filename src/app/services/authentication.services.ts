
import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from '@angular/fire/auth';
import { Firestore, doc, setDoc, collection } from '@angular/fire/firestore';
import { User } from 'firebase/auth';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {
    user!: Observable<User | null | undefined>;
    private userSubject: BehaviorSubject<User | null | undefined>;

    constructor(
        private auth: Auth,
        private firestore: Firestore
    ) {
        this.userSubject = new BehaviorSubject<User | null | undefined>(null);
        this.user = this.userSubject.asObservable();

        onAuthStateChanged(this.auth, (user: any) => {
            if(user){
                this.userSubject.next(user.uid);
            } else {
                this.userSubject.next(null);
            }
        });
    }

    async signUp({ name, rut, email, password }: any): Promise<User> {
        try {
            const response = await createUserWithEmailAndPassword(this.auth, email, password);
            this.addUser(name, rut, email, response.user.uid)
            return response.user;
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }: any): Promise<any> {
        try {
            const response = await signInWithEmailAndPassword(this.auth, email, password);
            return response.user;
        } catch (error) {
            throw error;
        }
    }

    async logout(): Promise<void> {
        try {
            this.userSubject.next(null);
            await signOut(this.auth);
        } catch (error) {
            throw error;
        }
    }

    async addUser(name: string, rut: string, email: string, uid: string) {
        try {
            const additionalUserInfo = {
                name: name,
                rut: rut,
                email: email,
            };
            const docRef = await doc(collection(this.firestore, 'users'), uid)
            await setDoc(docRef, additionalUserInfo, { merge: true })

        } catch (error) {
            throw error
        }
    }

    isAuthenticated(): boolean {
        if(this.user){
            return true
        } else {
            return false
        }
    }
}
