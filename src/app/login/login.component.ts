import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public isAuthenticated = false;
  public username: string = "";
  public password: string = "";

  public logout(): void {
    this.isAuthenticated = false;
  }

  public login(): void {
    if(this.username !== "" && this.password !== ""){
      this.isAuthenticated = true;
      alert("Successfully logged in!");
    }
  }

  public createAccount(): void {
    // Perform the necessary actions to create a new account
    // You can navigate to a registration page or open a modal for creating an account
    console.log('Create Account button clicked');   
  }
  
  
}
