import {Cliente} from '../cliente/cliente';
import {ComidaTipo } from '../comidatipo/comida';
import {Pago} from '../pago/pago';

export class Domicilio 
{
  id: number;
  fecha: Date;
  lugarEntrega: string;
  costo: number;
  cliente: Cliente;
  comidaTipo: ComidaTipo;
  pago: Pago;
}