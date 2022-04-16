import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenador-tarjeta',
  templateUrl: './ordenador-tarjeta.component.html',
  styleUrls: ['./ordenador-tarjeta.component.css']
})
export class OrdenadorTarjetaComponent implements OnInit {

  constructor() { }
  @Input() ordenador:any
  ngOnInit(): void {
  }

}
