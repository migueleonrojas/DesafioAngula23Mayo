import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Registro } from '../../models/task';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  name = "";
  DateBirth = "";
  ancestry = "";

  @Output() registrosAdd = new EventEmitter<Registro>();

  constructor() { }

  ngOnInit(): void {
  }

  addRegistro(){

    this.registrosAdd.emit({

      name: this.name,
      DateBirth: this.DateBirth,
      ancestry: this.ancestry,
      hide:true

    });

    this.name = '';
    this.DateBirth = '';
    this.ancestry = '';
  }

}
