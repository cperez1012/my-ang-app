import { Component } from '@angular/core';
//import Hero class to hero-form
import { Hero } from '../hero';
import { FormBuilder, Validators } from '@angular/forms';

// import data from 'src/assets/json/test.json';

@Component({
  //you can drop this form in a parent template using the <app-hero-form> tag
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  // powers=['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  // model= new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  // title = 'json-read-example';
  // studentData:any;
  // url: string = '/test.json';
  data: Array<any>;

  genders=["Male", "Female", "Polygender"]

  submitted = false;

  personForm = this.formBuilder.group({
    id: null,
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    email: ["", Validators.required, Validators.email],
    gender: ["", Validators.required]
  })

  onSubmit(): void { 
    // this.submitted = true;
    this.data.push(this.personForm.value);
    console.log(this.data);
    this.personForm.reset();
  }

  constructor(private formBuilder: FormBuilder){
    this.data = [{
      "id": 1,
      "firstName": "Beret",
      "lastName": "Penbarthy",
      "email": "bpenbarthy0@wisc.edu",
      "gender": "Female"
    }, {
      "id": 2,
      "firstName": "Torry",
      "lastName": "Edelheid",
      "email": "tedelheid1@marriott.com",
      "gender": "Polygender"
    }, {
      "id": 3,
      "firstName": "Raddy",
      "lastName": "Cottel",
      "email": "rcottel2@vk.com",
      "gender": "Male"
    }, {
      "id": 4,
      "firstName": "Tab",
      "lastName": "Warbey",
      "email": "twarbey3@google.de",
      "gender": "Male"
    }, {
      "id": 5,
      "firstName": "Gerick",
      "lastName": "Braybrook",
      "email": "gbraybrook4@issuu.com",
      "gender": "Male"
    }, {
      "id": 6,
      "firstName": "Yard",
      "lastName": "Durnan",
      "email": "ydurnan5@google.ca",
      "gender": "Male"
    }, {
      "id": 7,
      "firstName": "Skylar",
      "lastName": "Gratrix",
      "email": "sgratrix6@bing.com",
      "gender": "Male"
    }, {
      "id": 8,
      "firstName": "Laurena",
      "lastName": "Peile",
      "email": "lpeile7@devhub.com",
      "gender": "Female"
    }, {
      "id": 9,
      "firstName": "Allina",
      "lastName": "Chalcraft",
      "email": "achalcraft8@lycos.com",
      "gender": "Female"
    }, {
      "id": 10,
      "firstName": "Wilden",
      "lastName": "Bramer",
      "email": "wbramer9@ning.com",
      "gender": "Male"
    }];
  }

}
