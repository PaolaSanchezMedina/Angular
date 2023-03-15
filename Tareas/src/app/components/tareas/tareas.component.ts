import { Component } from '@angular/core';
import { Tarea } from 'src/app/components/models/Tareas';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
listTareas: Tarea [] = [];
nombreTarea='';
keyStorage :string= 'todos';

constructor()
{

}
ngOnInit(): void {
  const localStorageItem = localStorage.getItem(this.keyStorage);
  if(!localStorageItem){
  localStorage.setItem(this.keyStorage,JSON.stringify([]));
  }
  else {
  this.listTareas = JSON.parse(localStorageItem);
  }
}
agregarTarea()
  {
    localStorage.setItem(this.keyStorage, JSON.stringify(this.listTareas));
  //console.log(this.nombreTarea);
  //creamos el objeto de tipo tareas
  const tarea: Tarea={
    nombre: this.nombreTarea,
    estado: false
  }
  //agregar el objeto tarea al arreglo
  this.listTareas.push(tarea);
  //reset
  this.nombreTarea="";
}
eliminarTarea(index:number):void
{
  localStorage.setItem(this.keyStorage, JSON.stringify(this.listTareas));
  this.listTareas.splice(index,1);
}

actualizarTarea(tarea: Tarea, index:number){
  localStorage.setItem(this.keyStorage, JSON.stringify(this.listTareas));
this.listTareas[index].estado =! tarea.estado
}
  }