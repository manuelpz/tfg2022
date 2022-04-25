import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pantallas-tarjeta',
  templateUrl: './pantallas-tarjeta.component.html',
  styleUrls: ['./pantallas-tarjeta.component.css']
})
export class PantallasTarjetaComponent implements OnInit {

  constructor() { }
 @Input() pantallas:any
  ngOnInit(): void {
  }

}
