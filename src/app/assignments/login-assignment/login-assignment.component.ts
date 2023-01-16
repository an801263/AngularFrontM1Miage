import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/shared/auth.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login-assignment',
  templateUrl: './login-assignment.component.html',
  styleUrls: ['./login-assignment.component.css']
})
export class LoginAssignmentComponent implements OnInit {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
   /* this.authService.logIn(this.username, this.password)
      .pipe(
        tap(data => {
         // localStorage.setItem('token', data.token);
         console.log("OKKKKK <=======", data);
         localStorage.setItem('token', "myTokenblablabla");
          this.router.navigate(['/home']);
        },
        error => {
          this.errorMessage = 'Nom d\'utilisateur ou mot de passe incorrect';
        })
      )
      .subscribe();*/
      if(this.username == "admin" && this.password == "admin") {
        localStorage.setItem("loggedIn", "true")
        this.router.navigate(['/home']);
      } else {
        localStorage.setItem("loggedIn", "false")
        this.errorMessage = 'Nom d\'utilisateur ou mot de passe incorrect';
      }
  }
 
  ngOnInit(): void {
  }

}
