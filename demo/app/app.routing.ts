import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import {MainComponent} from "./components/main.component";
import {ChipComponent} from "./components/chip/chip.component";

const routes: Routes = [
    { path: "", redirectTo: "/chip", pathMatch: "full" },
    { path: "main", component: MainComponent },
    { path: "chip", component: ChipComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }