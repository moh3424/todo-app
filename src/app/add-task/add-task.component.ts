import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task} from '../../shared/models/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  /**
   *
   * La tâche à créer.
   * @type {Task}
   */
  task: Task = new Task();

  /**
   * permet s'emettre un évenement
   * lors de la création d'une tâche.
   * @type {EventEmitter<any>}
   */

  @Output() newTaskEvent = new EventEmitter();


  addTask() {
    /**
     * Lorsque l'utilisateur soumet le formulair,
     * j'émet un évenement avec la nouvelle tâche.
     */
    this.newTaskEvent.emit(this.task);
    /**
     * dF
    */
    this.task = new Task ();
  }
  constructor() { }

  ngOnInit() {
  }

}
