import { Component, OnInit } from '@angular/core';
import { ImagenesGuest} from '../imagenesguest';
import { PaginaprincipalService} from '../paginaprincipal.service';

 
@Component({
  selector: 'pagina-guest',
  templateUrl: './pagina-guest.component.html',
  styleUrls: ['./pagina-guest.component.css']
})
export class PaginaGuestComponent implements OnInit {

  constructor(
    private paginaprincipalServicio: PaginaprincipalService
  ) { this.imagenesCarouselGuest = []}


  imagenesCarouselGuest : ImagenesGuest[];

  getImagenesCarousel() : void 
  {

    console.log(this.imagenesCarouselGuest, 'comprobando algo perrrooooos ----------------ANTES-------------')
    this.paginaprincipalServicio.getImagenes().subscribe( loquellega => {
      this.imagenesCarouselGuest = loquellega;

      
    });
    console.log(this.imagenesCarouselGuest, 'comprobando algo perrrooooos-----------------DESPUÉS---------------')
  
    
  }

  ngOnInit() {
    console.log(this.imagenesCarouselGuest, 'comprobando algo perrrooooos ----------------ANTES-------------')
    this.paginaprincipalServicio.getImagenes().subscribe(loquellega => this.imagenesCarouselGuest = loquellega);
    console.log(this.imagenesCarouselGuest, 'comprobando algo perrrooooos-----------------DESPUÉS---------------')
  }

}