//Responsavel por fazer rodar o import do meu app module
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';

//const pois ele sempre será desse jeito não sofre alteração
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);