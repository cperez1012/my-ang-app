import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  message: string = "";

  constructor(private userService: UserService){

  }

  ngOnInit(): void {
      this.userService.sayHello().subscribe(data => {
        this.message = data;
      })
  }

}
