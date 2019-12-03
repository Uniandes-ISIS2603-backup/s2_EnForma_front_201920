import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { AuthService } from '../auth.service';


import { User } from '../user';

import { ToastrService } from 'ngx-toastr';
import { ClienteService } from '../../cliente/cliente.service';
import { AdministradorService } from '../../administrador/administrador.service';
import { ClienteDetail } from '../../cliente/cliente-detail';

@Component({
    selector: 'app-auth-login',
    templateUrl: './auth-login.component.html',
    styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

    /**
    * Constructor for the component
    * @param authService Auth service provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private authService: AuthService,
        private toastrService: ToastrService,
        private clienteService: ClienteService,
        private adminService: AdministradorService

    ) { }

    user: User;

    roles: String[];

    clienteDetail: ClienteDetail;


    /**
    * Logs the user in with the selected role
    */
    login(): void {
       
        this.printName ();

        this.clienteService.getClienteUsername(this.user.name)
          .subscribe(clienteDetail => {
            this.clienteDetail = clienteDetail

            if(this.user.role === 'Client')
            { 
                if(this.user.password === this.clienteDetail.contrasenia)
                {
                    
                    this.authService.login(this.user.role);
                    this.toastrService.success('Logged in')
                    localStorage.setItem('id', clienteDetail.id.toString());
                    console.log(localStorage.getItem('id'));
                }
                else
                {
                    this.toastrService.error('No coincide')
                }
            }
            

          });

      
    }



    printName (): void {
        console.log(this.user.name);
        console.log(this.user.password);
        
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.user = new User();
        this.roles = ['Administrator', 'Client'];
        if (this.user.password){
            this.clienteDetail = new ClienteDetail();
    }

}
}
