import {Component} from '@angular/core';
import {Task} from '../shared/models/task';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  set tasks(value: Task[]) {
    this._tasks = value;
  }
  get tasks(): Task[] {
    return this._tasks;
  }

  title = 'Mes tâches à faire !';
  /**Creation d'un tableau tâches
   * il contiendra toutes les tâches de notre application
   *@type {any[]
   */
  private _tasks: Task[] = [
    {
      id: 1,
      name: 'promener le chien',
      status: false
    },
    {
      id: 2,
      name: 'sortir les poubelles',
      status: false
    },
    {
      id: 3,
      name: 'préparer une tarte',
      status: true
    },
    {
      id: 4,
      name: 'Faire la vaisselle',
      status: false
    }
  ];
  /**
   *L'utilisateur viens de
   * terminer une tâche
   * @param
   */

  taskIsDone(task: Task) {
    task.status = true;
  }

  removeTask(task: Task){
    _.pullAllWith(this.tasks, [task], _.isEqual);
  }
/*
* cette fonction se déclanche dans
* L'application lorsque 'une nouvelle tâche est créer par l'utilisateur
* dans le composant app-add-task
* @param {task: Task} task
* */
  newTask(task: Task) {
    this.tasks.push(task);

  }
}
