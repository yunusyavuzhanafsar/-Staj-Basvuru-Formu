import {Component, OnInit} from '@angular/core';
import {Service1Service} from "../../services/service1.service";

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrl: './c1.component.css'
})
export class C1Component implements OnInit {

  constructor() {
  }

  ngOnInit() {
    console.log("deneme");
  }

}
