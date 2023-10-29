import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'newUser', component: NewUserComponent },
  { path: 'userList', component: UserListComponent, canActivate: [authGuard], },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redireccionar a la página de inicio de sesión por defecto.
  { path: '**', redirectTo: '/login' }, // Manejo de rutas no encontradas (puede personalizarse).
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
