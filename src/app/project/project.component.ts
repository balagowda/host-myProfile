import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  Portfolio="assets/images/profile.jpg";
  Weather="assets/images/Weather.jpg";
  Table="assets/images/table.png";
  Youtube="assets/images/youtube.png";
  Todo="assets/images/todo.png";
  Student="assets/images/student.jpg";
  Amezon="assets/images/Amazon.jpg";
  Map="assets/images/map.png";
  Chat="assets/images/chat.jpg";
  Call="assets/images/calling.png";

}
