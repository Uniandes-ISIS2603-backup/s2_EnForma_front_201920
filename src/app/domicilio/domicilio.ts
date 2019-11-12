import {Cliente} from '../cliente/cliente';
import {ComidaTipo } from '../comidatipo/comida';
export class Domicilio 
{
  id: number;
  fecha: Date;
  lugarEntrega: string;
  costo: number;
  cliente: Cliente;
  comidaTipo: ComidaTipo;
}