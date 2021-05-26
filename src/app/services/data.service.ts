import { Injectable } from '@angular/core';
import { Registro } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  registro: Registro[];

  constructor() { 

    this.registro = [];

   }


   getRegistro():Registro[]{

    if(localStorage.getItem('registro') === null){

      this.registro = [];

    }

    else{

      this.registro = JSON.parse( localStorage.getItem('registro') || '{}' );

    }

    return this.registro;

   }

   addRegistro(registro:Registro):void{

    this.registro.unshift(registro);
    let registros;

    if(localStorage.getItem('registro') === null){

      registros= [];
      registros.unshift(registro);
      localStorage.setItem('registro', JSON.stringify(registros));
    }

    else{

      registros = JSON.parse(localStorage.getItem('registro') || '{}' );
      registros.unshift(registro);
      localStorage.setItem('registro', JSON.stringify(registros));

    }

   }

   removeTask(registro: Registro){

    for(let i=0; this.registro.length; i++ ){
       
      if(registro == this.registro[i]){
        this.registro.splice(i, 1);
        localStorage.setItem('registros', JSON.stringify(this.registro));
      }
    }

   }

}
