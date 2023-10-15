import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  styles: [
    `
    :host {
      background-image:url('../../assets/img/927090.jpg');
      background-size: cover; /* Pour adapter l'image à la taille de l'écran */
  background-position: center; /* Pour centrer l'image */
  /* Autres styles */
  height: 100vh; /* Pour que le composant occupe toute la hauteur de l'écran */
  display: flex; /* Pour centrer le contenu verticalement */
  justify-content: center; /* Pour centrer le contenu horizontalement */
  align-items: center; /* Pour centrer le contenu verticalement */
    }
    `
  ]
})
export class LoginComponent {

}
