import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested',
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.css']
})
export class NestedComponent implements OnInit {

  @Input() nestedMessage: string | undefined; // Define an input property

  constructor() { }

  ngOnInit(): void {
  }

}
