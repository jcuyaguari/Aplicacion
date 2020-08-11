import { Respuesta } from './../model/respuesta';
import { BancarestService } from 'src/app/servicios/bancarest.service';
import { Persona } from 'src/app/model/persona';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { MicuentaPage } from '../pages/micuenta/micuenta.page';

//es como si fuera el manager bean
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  persona: Persona = new Persona();
  respuesta: Respuesta = new Respuesta();
  json ="";
  cad: any;
  

  constructor(private activatedRoute: ActivatedRoute, private login: BancarestService, private router: Router) {
    // this.login.sendContacto(this.persona).subscribe(dato =>{
    //   this.json=JSON.stringify(dato);
    // } )
   }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  
  loginApp(cedula: string, contrasenia: string) {
    this.login.sendContacto(this.persona).subscribe(data => { 
      this.json = JSON.stringify(data);
      this.cad = JSON.parse(this.json);
      console.log("variable ANY ",this.cad.message, this.cad.code);
      if(this.cad.code == 1){
        console.log("cedula enviada ", this.persona.getCedula);
        //this.sendParametros(this.persona.getCedula);
        this.router.navigate(['/micuenta']);
        window.localStorage.setItem("idCedula",this.persona.getCedula);
        window.localStorage.setItem("idContrasenia", this.persona.getContrasenia);
      }else{
        console.log("llega msj del if NO>>", this.cad.code); //  Programar MSJ usesuario
       }

    });
 }
 // Paso de Parametros entre Paginas
 // Se pasa parametros pagina << MicuentaPage.page.ts >>
sendParametros(parameter: any) {
  let navigationExtras: NavigationExtras = {
    state: {
      cedulaParametro: parameter
    }
  };
  this.router.navigate(['/micuenta'], navigationExtras);
}


}
