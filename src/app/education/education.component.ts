import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Aos.init();
  }

  Collage="assets/images/collage.png";
  School="assets/images/school.png";
  Graduate="assets/images/graduation.png";

}
