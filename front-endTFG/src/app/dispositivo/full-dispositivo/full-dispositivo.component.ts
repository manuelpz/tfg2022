import { Component, OnInit } from '@angular/core';
import { DispositivoService } from 'src/app/service/dispositivo.service';

@Component({
  selector: 'app-full-dispositivo',
  templateUrl: './full-dispositivo.component.html',
  styleUrls: ['./full-dispositivo.component.css']
})
export class FullDispositivoComponent implements OnInit {

  ultimoDispositivo: any;

  constructor(private dispositivoService: DispositivoService) { }

  ngOnInit(): void {

    this.dispositivoService.getUltimoDispositivo().subscribe(
      (response: any) =>{
        this.ultimoDispositivo = response;
      })
  }
}
