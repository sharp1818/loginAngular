
import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from '@angular/fire/auth';
import { Firestore, doc, setDoc, collection } from '@angular/fire/firestore';
import { User } from 'firebase/auth';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {
    user: User | null | undefined;

    constructor(
        private auth: Auth,
        private firestore: Firestore
    ) {
        onAuthStateChanged(this.auth, (user: any) => {
            this.user = user;
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
}
