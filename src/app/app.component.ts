import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  Renderer2, ViewChild, ElementRef } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  

  title:String = 'Escuela Hogwarts';

  estudiantes = [

    { 
      'name': 'Harry Potter',
      'dateOfBirth' : '31-07-1980',
      'ancestry': 'half-blood'
    }

    
  ];

  model:any = {};

  addStudent():void{

    
    this.estudiantes.push(this.model);

  }

  showStudents(){


  }

  constructor(
    private builder :FormBuilder
  ){

    this.sigupForm = this.builder.group({

      nombre: [ '', Validators.required ],
      f_nacimiento: [ '', Validators.required ],
      ascendencia : [ '', Validators.required ]

      }

    )

    

    console.log(JSON.parse(localStorage.getItem("student") || '{}'));

    

  }

  enviar(values:any){

    //console.log(values);
  }

  sigupForm: FormGroup;

  

  getStudentLocal(){

    
    let studentsLocale = JSON.parse(localStorage.getItem("studentsLocale") || '{}');

    
  }

  htmlToAdd = "";



  addStudentLocal(){


    let student = {

      nombre: this.model.name,
      dateB:  this.model.dateOfBirth,
      asc:    this.model.ancestry
      
    }
    
  }


  

}
