import { Dieta } from '../dietas/dieta';
import { Cliente } from '../cliente/cliente';


export class Calificacion 
{
  id: number;
  puntaje: number;
  comentario: string;
  fecha: string;
  dieta: Dieta;
  cliente: Cliente;
}