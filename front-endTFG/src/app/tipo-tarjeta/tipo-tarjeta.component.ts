import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-tarjeta',
  templateUrl: './tipo-tarjeta.component.html',
  styleUrls: ['./tipo-tarjeta.component.css']
})
export class TipoTarjetaComponent implements OnInit {

  constructor() { }
  @Input() tipos:any
  ngOnInit(): void {
  }

}
