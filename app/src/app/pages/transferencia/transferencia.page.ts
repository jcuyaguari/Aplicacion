import { BancarestService } from 'src/app/servicios/bancarest.service';
import { Transferencia } from './../../model/transferencias';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.page.html',
  styleUrls: ['./transferencia.page.scss'],
})
export class TransferenciaPage implements OnInit {

  persona: Persona = new Persona();
  transferencia: Transferencia = new Transferencia();
  json ="";
  cad: any;

  // constructor(private activatedRoute: ActivatedRoute, private bancarestService: BancarestService, private router: Router) {
    constructor(private bancarestService: BancarestService, private route: ActivatedRoute, private router: Router) {}
  //constructor(private bancarestService: BancarestService) { }

  ngOnInit() {
  }

  realizarTransferencia() {
    // this.transferencia.setCedula= window.localStorage.getItem("idCedula");
    // this.transferencia.setMonto=125;
    console.log("datos TRANSFERNECIA ", this.transferencia.getOrigen, this.transferencia.getDestino,this.transferencia.getMonto);
    this.bancarestService.transferencias(this.transferencia).subscribe(datosRespuesta => {
      this.json = JSON.stringify(datosRespuesta);
      this.cad = JSON.parse(this.json);
      console.log("variable EMAIL ", this.cad.message, this.cad.code);
      if (this.cad.code == 1) {
        console.log("Transferencia Realizada: ", this.cad.message);
      } else {
        console.log(" ERROR WS de Transferencia: >>", this.cad.message); //  Programar MSJ usesuario
      }

   });
  }

}
