import {Component} from '@angular/core';
import {Task} from '../shared/models/task';

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
}
