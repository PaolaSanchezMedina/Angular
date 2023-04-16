import { EmpleadoListComponent } from "../components/empleado-list/empleado-list.component";
export class Empleado{
    No: number=0;
    RFC: string='';
    Nombre: string='';
    Primer_apellido: string='';
    Segundo_apellido: string='';
    Sexo: string='';
    Salario: number=0;

    constructor(
        No: number, 
        RFC: string, 
        Nombre: string, 
        Primer_apellido: string, 
        Segundo_apellido: string,
        Sexo: string,
        Salario: number
    )
    {
        this.No=No;
        this.Nombre=Nombre;
        this.Primer_apellido=Primer_apellido;
        this.Segundo_apellido=Segundo_apellido;
        this.Sexo=Sexo;
        this.Salario=Salario;
    }
}