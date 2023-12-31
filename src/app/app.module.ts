import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './component/nav/nav.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { AuthenticationService } from './services/authentication.services';
import { ReactiveFormsModule } from '@angular/forms';
import { TablePaginationComponent } from './component/table-pagination/table-pagination.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { BottomRightModalComponent } from './component/bottom-right-modal/bottom-right-modal.component';
import { MatDialogModule } from '@angular/material/dialog';

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
    BottomRightModalComponent,
    TablePaginationComponent,
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
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
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
