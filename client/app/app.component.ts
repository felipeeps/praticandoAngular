//Transformando minha classe em component com meu import
import { Component } from '@angular/core';

@Component({
    //Defindo qual vai ser o nome (Apelido) que eu vou acessar meu component
    selector: 'app', //Desta forma para usar meu componente uso <app></app>
    //Definindo onde eu vou procurar meu template
    templateUrl: './app/app.component.html'
})

//Export para tornar minha class importavel em no meu modulo
export class AppComponent { }