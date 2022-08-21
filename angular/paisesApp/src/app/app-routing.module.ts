import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
    {
        path: '', // por defecto sin ruta
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'region', // /region
        component: PorRegionComponent
    },
    {
        path: 'capital', // /capital
        component: PorCapitalComponent

    },
    {
        path: 'pais/:id', // id es el argumneto dinamico que representa el id del pais
        component: VerPaisComponent
    },
    {
        path: '**',  // en caso de que no sea ninguna ruta especificada, por defecto te regresa al home
        redirectTo: '' // podriamos crear un componente para mostrar un error personalizado
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes) // este modulo va hacer las configuracion de mis rutas, forRoot es para las rutas principale, forChild es para las rutas hijas
    ],
    exports:[
        RouterModule // sera necesario exportarlo para poder utilizarlo fuera
    ]

})
export class AppRoutingModule {}