import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    Aos.init();
  }

  Java="assets/images/java.png";
  CandC="assets/images/c.png";
  python="assets/images/python.png";
  git="assets/images/git.png";
  github="assets/images/github.png";
  angular="assets/images/angular.png";
  react="assets/images/react.png";
  html="assets/images/html.png";
  css="assets/images/css.png";
  javascript="assets/images/javascript.png";
  typescript="assets/images/typescript.png";
  nodejs="assets/images/nodejs.png";
  php="assets/images/php.png";
  mysql="assets/images/mysql.png";
  mongodb="assets/images/mongodb.png";

}
