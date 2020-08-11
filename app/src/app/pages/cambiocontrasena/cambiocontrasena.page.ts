import { Component, OnInit } from '@angular/core';
import { BancarestService } from 'src/app/servicios/bancarest.service';
import { ActionSheetController } from '@ionic/angular';
import { Persona } from 'src/app/model/persona';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cambiocontrasena',
  templateUrl: './cambiocontrasena.page.html',
  styleUrls: ['./cambiocontrasena.page.scss'],
})
export class CambiocontrasenaPage implements OnInit {
  persona: Persona = new Persona();
  aux: string;
  json ="";
  cad: any;
  data: any;
  constructor(private bancarestService: BancarestService, private route: ActivatedRoute, private router: Router) { 
  this.route.queryParams.subscribe(params => {
    if (this.router.getCurrentNavigation().extras.state) {
      this.data = this.router.getCurrentNavigation().extras.state.cedulaParametro;
      }
  });
  }


  ngOnInit() {
 }

  cambioContrasenia(){
  this.persona.setCedula= window.localStorage.getItem("idCedula");
  console.log("objeto persona ",this.persona.getMail, this.persona.getCedula);
  this.bancarestService.cambioContrasena(this.persona).subscribe(datosRespuesta => { 
    this.json = JSON.stringify(datosRespuesta);
    this.cad = JSON.parse(this.json);
    console.log("variable EMAIL ",this.cad.message, this.cad.code);
    if(this.cad.code == 1){
      console.log("EMAIL Capturado: ", this.persona.getMail);
    }else{
      console.log(" ERROR WS >>", this.cad.code); //  Programar MSJ usesuario
     }

  });
}

 
}
