import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.page.html',
  styleUrls: ['./exercise1.page.scss'],
})
export class Exercise1Page implements OnInit {
  isSmallScreen: boolean;

  constructor() {
    this.isSmallScreen = window.innerWidth <= 400;
   }

  ngOnInit() {
  }

}
