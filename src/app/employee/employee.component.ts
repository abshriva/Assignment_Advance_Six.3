import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  firstName:string;
  lastName:string;
  title:string;

  constructor() { }

  ngOnInit() {
    this.firstName='Abhishek';
    this.lastName='Shrivastava'
  }

  display(fName, lName) {
    this.title = `${fName.value} ${lName.value}`;
}
}
