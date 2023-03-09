import { Component} from '@angular/core';

export class ToDo{
  title: string;
  status: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  toDoList: ToDo[] = [];
  ToDo: ToDo;

  addToDo(title){
    let toDo = new ToDo()
    toDo.title = title.value
    toDo.status = false

    this.toDoList.push(toDo)
  }
  
  removeToDo(index: number){
    this.toDoList.splice(index, 1)
  }

  checked(index: number) {
    this.toDoList[index].status = !this.toDoList[index].status;
  }

}