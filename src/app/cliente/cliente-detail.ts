import {Cliente} from "./cliente";
import {Dieta} from '../dietas/dieta';
//import {QuejasYReclamos} from '../quejasYReclamos/quejasYReclamos'
import {Domicilio} from '../domicilio/domicilio'
//import {TarjetaPrepago} from '../tarjetaPrepago/tarjetaPrepago

export class ClienteDetail extends Cliente
{
dieta : Dieta;
//quejas : QuejasYReclamos;
domicilios : Domicilio[];
//tarjeta : TarjetaPrepago;

}

