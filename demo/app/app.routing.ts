import {NgModule} from "@angular/core";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {Routes} from "@angular/router";

import {MainComponent} from "./components/main.component";
import {ChipComponent} from "./components/chip/chip.component";
import {ButtonComponent} from "./components/button/button.component";
import {CollapsingToolbarComponent} from "./components/collapsing-toolbar/collapsing-toolbar.component";

const routes: Routes = [
    {path: "", redirectTo: "/main", pathMatch: "full"},
    {path: "main", component: MainComponent},
    {path: "button", component: ButtonComponent},
    {path: "chip", component: ChipComponent},
    {path: "collapsing-toolbar", component: CollapsingToolbarComponent},
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}