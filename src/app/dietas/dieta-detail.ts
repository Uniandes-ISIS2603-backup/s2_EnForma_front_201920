import { Calificacion } from "../calificacion/calificacion";
import { ComidaTipo } from "../comidatipo/comida";
import { Cliente } from "../cliente/cliente";
import { Dieta } from "./dieta";

export class DietaDetail extends Dieta{

calificaciones: Calificacion[];
comidas: ComidaTipo[];
clientes: Cliente[];

    
  

}