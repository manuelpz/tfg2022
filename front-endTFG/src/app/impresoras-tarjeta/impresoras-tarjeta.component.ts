import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-impresoras-tarjeta',
  templateUrl: './impresoras-tarjeta.component.html',
  styleUrls: ['./impresoras-tarjeta.component.css']
})
export class ImpresorasTarjetaComponent implements OnInit {
  @Input() impresora:any
  constructor() { }

  ngOnInit(): void {
  }

}
