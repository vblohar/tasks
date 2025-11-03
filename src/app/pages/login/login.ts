import { Component, inject } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Store } from '@ngrx/store';
import { login } from '../../store/auth/auth.actions';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  private store = inject(Store);

  creditials = {
  email: 'demo@example.com',
  password: 'password'
  }

  onLogin() {
    this.store.dispatch(login({
      email: this.creditials.email,
      password: this.creditials.password
    }));
  }

}
