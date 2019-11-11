import {Dieta} from '../dietas/dieta'
import {ComidaTipo} from '../comidatipo/comida'
import {Administrador} from "./administrador";

export class AdministradorDetail extends Administrador {

  dietas: Dieta[];
  comidas: ComidaTipo[];

}