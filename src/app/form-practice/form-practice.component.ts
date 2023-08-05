import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-form-practice',
  templateUrl: './form-practice.component.html',
  styleUrls: ['./form-practice.component.css']
})
export class FormPracticeComponent {

  genders=["Male", "Female", "Polygender"]

  model = new Hero(0, "", "", "", "");
  submitted = false;

  onSubmit() { this.submitted = true; }
}
