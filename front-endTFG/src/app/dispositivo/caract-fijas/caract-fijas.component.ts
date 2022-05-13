import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-caract-fijas',
  templateUrl: './caract-fijas.component.html',
  styleUrls: ['./caract-fijas.component.css']
})
export class CaractFijasComponent implements OnInit {
  @Input() caracteristicaf: any;
  respuesta: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
