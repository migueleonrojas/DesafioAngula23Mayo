import { Component, OnInit, Input } from '@angular/core';
import { Registro} from '../../models/task';
import { DataService} from '../../services/data.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  //@Input('registro') registro : Registro;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

}
