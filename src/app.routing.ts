import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GraducaoComponent } from "./app/graducao/graducao.component";
import { HomeComponent } from "./app/home/home.component";
import { PosgraducaoComponent } from "./app/posgraducao/posgraducao.component";

const ROTAS: Routes = [
    {path: '', component: HomeComponent},
    {path: 'graduacao', component: GraducaoComponent},
    {path: 'pos-graduacao', component: PosgraducaoComponent}
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(ROTAS);