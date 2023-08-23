import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  name: string = 'Prakhar Agrawal';
  color: string = 'skyblue';
  nestedMessage: string = 'Hello from Promact!'; // Define a nestedMessage property

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(): void {
    // Generate a random color using hexadecimal values
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    this.color = randomColor;
  }

}
