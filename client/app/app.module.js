"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Transformando o meu modulo do ES6 para um modulo do Angular
var core_1 = require('@angular/core');
//Modulo responsavel por rodar o codigo no meu navegador
var platform_browser_1 = require('@angular/platform-browser');
//Importando o APP Component
var app_component_1 = require('./app.component');
//NGModule é o reponsavel de fato em transformar para a classe do angular
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            //Passando um array com todos os modulos que vou carregar na minha aplicação
            imports: [platform_browser_1.BrowserModule],
            //Declarando os componentes que vou carregar
            declarations: [app_component_1.AppComponent],
            //Component que eu quero iniciar
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map