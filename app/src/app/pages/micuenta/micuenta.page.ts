import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { ActivatedRoute, Router } from '@angular/router';
import { BancarestService } from 'src/app/servicios/bancarest.service';

//es como si fuera el manager bean
@Component({
  selector: 'app-micuenta',
  templateUrl: './micuenta.page.html',
  styleUrls: ['./micuenta.page.scss'],
})
export class MicuentaPage implements OnInit {
  public folder: string;
  cuentas: any;
  persona: Persona = new Persona();
  data: any;
  ced: any;
  constructor( private login: BancarestService, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
    if (this.router.getCurrentNavigation().extras.state) {
      this.data = this.router.getCurrentNavigation().extras.state.cedulaParametro;
      }
  });
  }

  ngOnInit() {
    this.cargarData();
  }

  cargarData(){
  this.ced = window.localStorage.getItem("idCedula");
  this.cuentas = this.login.getContacto(this.ced);
}


}
