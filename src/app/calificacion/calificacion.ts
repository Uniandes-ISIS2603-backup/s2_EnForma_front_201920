import { Dieta } from '../dietas/dieta';


export class Calificacion 
{
  id: number;
  puntaje: number;
  comentario: string;
  fecha: Date;
  dieta: Dieta;
}