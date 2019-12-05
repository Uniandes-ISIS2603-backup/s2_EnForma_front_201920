import { Cliente } from "../cliente/cliente";
import { Domicilio } from "../domicilio/domicilio";

export class QuejaReclamo 
{
  id:number;
  asunto: string;
  descripcion: string;
  fecha: Date;
  cliente: Cliente;
  domicilio: Domicilio;
}