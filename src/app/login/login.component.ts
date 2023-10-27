import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  
  constructor(private router: Router, private snackBar: MatSnackBar) {}

  authenticate() {
    if (this.username === 'nacer@devid.com' && this.password === 'FutbalL2018') {
      // Authentification réussie, redirigez l'utilisateur vers la page d'accueil
      this.router.navigate(['/home']);
    } else {
      // Authentification échouée, affichez une alerte
      this.snackBar.open('Mauvais nom d\'utilisateur ou mauvais mot de passe', 'Fermer', {
        duration: 3000,
      });
    }
  }
}
