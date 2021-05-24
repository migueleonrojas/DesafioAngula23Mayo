import { Component, OnInit } from '@angular/core';
import { Registro } from '../../models/task';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  registros = {};//en el video se puso []

  constructor(public dataService:DataService) { }

  ngOnInit(): void {

    this.registros = this.dataService.getRegistro();

  }

  addRegistro(registros: Registro){

    this.dataService.addRegistro(registros);
  } 

}
