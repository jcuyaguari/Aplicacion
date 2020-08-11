import { Respuesta } from 'src/app/model/respuesta';
import { Persona } from 'src/app/model/persona';
import { Transferencia } from './../model/transferencias';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
//import {Headers, Http, RequestOptions} from "@angular/http";

//Web services
@Injectable({
  providedIn: 'root'
})
export class BancarestService {

  private envio: string = 'http://localhost:8080/BancaMovil/srv/movil/usuario';
  private cambiopws: string = 'http://localhost:8080/BancaMovil/srv/movil/actualizarContra';
  private linktransferencia: string = 'http://localhost:8080/BancaMovil/srv/movil/transferenciamovil';

  // headers = new HttpHeaders().append('Content-Type' , 'application/json');
  headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
  //options = new RequestOptions({headers: Headers});

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };
  


  items: any;
  loading: any;
  // headers: Headers = new Headers({ 'Content-Type': 'application/json' });

constructor(private http: HttpClient) { }


sendContacto(contacto: Persona): Observable<any> {
 // console.log("llego al WS la cedula >> ", contacto.cedula);
  return this.http.post<Respuesta>(this.envio, contacto);
}


// getUsuarioLogin(cedula, contrasenia): Observable<any>{
//   return this.http.post<Persona>('http://localhost:8080/BancaMovil/srv/movil/usuario?cedula=' + cedula + '&contrasenia=' + contrasenia,cedula);
//   }

getContacto(cedula: string): Observable<any[]>{
  console.log("llga al WS la cedula >> xxxx >> ", cedula);
  return this.http.get<Transferencia[]>('http://localhost:8080/BancaMovil/srv/movil/listar?cedula='+ cedula);
  }

cambioContrasena(persona: Persona): Observable<any>{
  return this.http.post<Respuesta>(this.cambiopws, persona);
}

transferencias(transfer: Transferencia){
  console.log("datos TRANSFERNECIA en el WS ",transfer.getOrigen, transfer.getDestino, transfer.getMonto, transfer.getConcepto);
  return this.http.post<Respuesta>(this.linktransferencia, transfer, this.httpOptions);
   // this.http.post(this.transferencia, transfer, {headers: this.headers});
}

getPartners(transfer: Transferencia) {
  return new Promise(resolve => {
    this.http.post(this.linktransferencia, transfer)
      .subscribe(data => {
        this.items = JSON.parse(data['message']).results;
        resolve(this.items);
      });
  });
}

getTransferencias(transfer: Transferencia): Observable<any> {
  return this.http.post(this.linktransferencia, transfer, this.httpOptions);
 }


}

