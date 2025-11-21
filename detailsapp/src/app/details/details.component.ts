import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  people = [
    { name: "Vaibhav Nirmal", age: 21, city: "Pune" },
    { name: "Gauri Mhaske", age: 20, city: "Mumbai" },
    { name: "Abhishek Shinde", age: 22, city: "Nashik" },
    { name: "Aditya Khalekar", age: 23, city: "Solapur" }
  ];

}
