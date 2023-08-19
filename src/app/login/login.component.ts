import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  user = {
    email: '',
    password: ''
  };
  
  constructor(private userService: UserService, private router: Router){}
  
  public isAuthenticated = false;
  // public email: string = "";
  // public password: string = "";
  public showForm = false;

  toggleForm(){
    this.showForm = !this.showForm;
  }

  public logout(): void {
    this.isAuthenticated = false;
  }

  // public login(): void {
  //   if(this.username !== "" && this.password !== ""){
  //     this.isAuthenticated = true;
  //     alert("Successfully logged in!");
  //   }
  // }

  public createAccount(): void {
    // Perform the necessary actions to create a new account
    // You can navigate to a registration page or open a modal for creating an account
    // this.userService.login(this.credentials).subscribe(res => {
    //   if(this.email !== "" && this.password !== "" ){
    //     this.isAuthenticated = true;
    //     alert("Successfully logged in!");
    //   }
      
    //   this.router.navigate(['/home'])
    // }, error => {

    // });
    // console.log('Create Account button clicked');
       
  }
  // credentials = { email: '', password: ''}


  // login() {
  //   this.userService.login(this.credentials).subscribe(res => {
  //     if(this.email !== "" && this.password !== "" ){
  //       this.isAuthenticated = true;
  //       alert("Successfully logged in!");
  //     }
  //     this.router.navigate(['/home'])
  //   }, error => {

  //   });
  // }
  onSubmit(): void {
    this.userService.login(this.user).subscribe(res => {
      // this.isAuthenticated = true;
      console.log("User login successfull!", res);
      this.router.navigate(['/home']);
    }, 
    error => {
        console.log("Error occurred", error)
    });
  }
  
}
