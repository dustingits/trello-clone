import { Directive, HostListener } from '@angular/core';
import {
  Auth,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from '@angular/fire/auth';
@Directive({
  selector: '[appGoogleSignin]',
})
export class GoogleSigninDirective {
  constructor(private afAuth: Auth, provider: ) {}

  @HostListener('click')
  onclick() {
   
  }
}
