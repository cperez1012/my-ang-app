import { Component } from '@angular/core';
//import Hero class to hero-form
import { Hero } from '../hero';

@Component({
  //you can drop this form in a parent template using the <app-hero-form> tag
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  powers=['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model= new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

}
