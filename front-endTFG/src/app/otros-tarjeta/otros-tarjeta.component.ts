import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-otros-tarjeta',
  templateUrl: './otros-tarjeta.component.html',
  styleUrls: ['./otros-tarjeta.component.css']
})
export class OtrosTarjetaComponent implements OnInit {

  constructor() { }
  @Input() otros:any
  ngOnInit(): void {
  }

}
