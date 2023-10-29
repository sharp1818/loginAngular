import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './component/nav/nav.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { AuthenticationService } from './services/authentication.services';
import { ReactiveFormsModule } from '@angular/forms';
import { TablePaginationComponent } from './component/table-pagination/table-pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewUserComponent,
    UserListComponent,
  ],
  imports: [
    NavComponent,
    FooterComponent,
    TablePaginationComponent,
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({
      "projectId": "finmarkets-login",
      "appId": "1:23433445492:web:711cad9e498fa1e4291121", 
      "storageBucket": "finmarkets-login.appspot.com", 
      "apiKey": "AIzaSyB7zwzQafPkk7ANeUD2AgDeGE5jhk4p08k", 
      "authDomain": "finmarkets-login.firebaseapp.com", 
      "messagingSenderId": "23433445492"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    // AngularFireAuthModule,
    // AngularFirestoreModule,
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
