import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.scss']
})
export class EmpleadoListComponent {
  listEmpleados: Empleado[] = 
  [
    {
      No: 18141044,
      RFC: 'test',
      Nombre: 'Paola Guadalupe',
      Primer_apellido: 'Sánchez',
      Segundo_apellido: 'Medina',
      Sexo: 'femenino',
      Salario: 10000
    },
    {
      No: 19141120,
      RFC: 'test',
      Nombre: 'Kevin Daniel',
      Primer_apellido: 'Avellaneda',
      Segundo_apellido: 'Trejo',
      Sexo: 'masculino',
      Salario: 8000
    },
    {
      No: 19141129,
      RFC: 'test',
      Nombre: 'Yazmín Alejandra',
      Primer_apellido: 'Castillo',
      Segundo_apellido: 'Martínez',
      Sexo: 'femenino',
      Salario: 9000
    },
    {
      No: 19141127,
      RFC: 'test',
      Nombre: 'Sergio Leonardo',
      Primer_apellido: 'Campos',
      Segundo_apellido: 'Rangel',
      Sexo: 'masculino',
      Salario: 10000
    },
    {
      No: 19141141,
      RFC: 'test',
      Nombre: 'Vanesa',
      Primer_apellido: 'Fernandez',
      Segundo_apellido: 'Fernandez',
      Sexo: 'femenino',
      Salario: 10500
    },
    {
      No: 21141395,
      RFC: 'test',
      Nombre: 'Itzel Guadalupe',
      Primer_apellido: 'Andrade',
      Segundo_apellido: 'Gutierrez',
      Sexo: 'femenino',
      Salario: 9500
    },{
      No: 18141044,
      RFC: 'test',
      Nombre: 'Jesús',
      Primer_apellido: 'Chávez',
      Segundo_apellido: 'Arias',
      Sexo: 'masculino',
      Salario: 10000
    },
    {
      No: 18141044,
      RFC: 'test',
      Nombre: 'César Adán',
      Primer_apellido: 'Cuevas',
      Segundo_apellido: 'Téllez',
      Sexo: 'masculino',
      Salario: 8000
    },
    {
      No: 18141044,
      RFC: 'test',
      Nombre: 'Paola Valeria',
      Primer_apellido: 'Fuertes',
      Segundo_apellido: 'Gómez',
      Sexo: 'femenino',
      Salario: 9000
    },
    {
      No: 18141044,
      RFC: 'test',
      Nombre: 'Froylan',
      Primer_apellido: 'Galvan',
      Segundo_apellido: 'Téllez',
      Sexo: 'masculino',
      Salario: 10000
    },
    {
      No: 18141044,
      RFC: 'test',
      Nombre: 'Luz Zayetzy',
      Primer_apellido: 'Garay',
      Segundo_apellido: 'Quintero',
      Sexo: 'femenino',
      Salario: 10500
    },
    {
      No: 18141044,
      RFC: 'test',
      Nombre: 'Dalia Elizabeth',
      Primer_apellido: 'García',
      Segundo_apellido: 'Sánchez',
      Sexo: 'femenino',
      Salario: 9500
    },{
      No: 18141044,
      RFC: 'test',
      Nombre: 'Issac',
      Primer_apellido: 'Hernández',
      Segundo_apellido: 'Reséndiz',
      Sexo: 'masculino',
      Salario: 10000
    },
    {
      No: 18141044,
      RFC: 'test',
      Nombre: 'Daniel',
      Primer_apellido: 'Jiménez',
      Segundo_apellido: 'Galván',
      Sexo: 'masculino',
      Salario: 8000
    },
    {
      No: 18141044,
      RFC: 'test',
      Nombre: 'Jessica Mariana',
      Primer_apellido: 'Martínez',
      Segundo_apellido: 'Coronilla',
      Sexo: 'femenino',
      Salario: 9000
    },
    {
      No: 18141044,
      RFC: 'test',
      Nombre: 'Emmanuel Abif',
      Primer_apellido: 'Mejia',
      Segundo_apellido: 'Ochoa',
      Sexo: 'masculino',
      Salario: 10000
    },
    {
      No: 18141044,
      RFC: 'test',
      Nombre: 'Jesús Fernando',
      Primer_apellido: 'Miranda',
      Segundo_apellido: 'Trejo',
      Sexo: 'masculino',
      Salario: 10500
    },
    {
      No: 18141044,
      RFC: 'test',
      Nombre: 'Marco Ulyses',
      Primer_apellido: 'Mora',
      Segundo_apellido: 'Duran',
      Sexo: 'masculino',
      Salario: 9500
    },{
      No: 18141044,
      RFC: 'test',
      Nombre: 'Eduardo',
      Primer_apellido: 'Morales',
      Segundo_apellido: 'Flores',
      Sexo: 'masculino',
      Salario: 10000
    },
    {
      No: 18141044,
      RFC: 'test',
      Nombre: 'David',
      Primer_apellido: 'Moreno',
      Segundo_apellido: 'Martínez',
      Sexo: 'masculino',
      Salario: 8000
    },
    {
      No: 18141044,
      RFC: 'test',
      Nombre: 'Monica Valeria',
      Primer_apellido: 'Nieves',
      Segundo_apellido: 'Trejo',
      Sexo: 'femenino',
      Salario: 9000
    },
    {
      No: 18141044,
      RFC: 'test',
      Nombre: 'Mauricio',
      Primer_apellido: 'Ortega',
      Segundo_apellido: 'Malagón',
      Sexo: 'masculino',
      Salario: 10000
    },
    {
      No: 18141044,
      RFC: 'test',
      Nombre: 'Christian Josue',
      Primer_apellido: 'Ramírez',
      Segundo_apellido: 'Martínez',
      Sexo: 'masculino',
      Salario: 10500
    },
    {
      No: 18141044,
      RFC: 'test',
      Nombre: 'Veronica',
      Primer_apellido: 'Resendiz',
      Segundo_apellido: 'Castro',
      Sexo: 'masculino',
      Salario: 9500
    }
  ]; 
  constructor(){

  }
  ngOnInit(): void{

  }
  obtenerEmpleados(sex: string): number
  {
    if(sex=='femenino'){
      return this.listEmpleados.filter(list => list.Sexo==='femenino').length;
    }
    if(sex=='masculino'){
      return this.listEmpleados.filter(list => list.Sexo==='masculino').length;
    }
    return this.listEmpleados.length;
  }
  radioBottonSeleccionado: string = 'empleados';
  genero: any = [
    'femenino',
    'masculino',
    'empleados'
  ];
  radioChangeHandler (event:any){
    this.genero=event.target.value;
  }
}