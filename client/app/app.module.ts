//Transformando o meu modulo do ES6 para um modulo do Angular
import {NgModule} from '@angular/core';
//Modulo responsavel por rodar o codigo no meu navegador
import { BrowserModule} from '@angular/platform-browser';
//Importando o APP Component
import { AppComponent } from './app.component';

//NGModule é o reponsavel de fato em transformar para a classe do angular
@NgModule({
    //Passando um array com todos os modulos que vou carregar na minha aplicação
    imports: [ BrowserModule ],
    //Declarando os componentes que vou carregar
    declarations: [ AppComponent ],
    //Component que eu quero iniciar
    bootstrap: [ AppComponent ]
})

//Export para tornar minha class importavel em no meu modulo
export class AppModule { }