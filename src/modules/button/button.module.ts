import { NgModule } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
import {DIRECTIVES} from "./button.directives"; 

@NgModule({
    imports: [
    ],
    declarations: [
        DIRECTIVES,
    ],
    exports: [
        DIRECTIVES,
    ],
    providers: [
    ],
})

export class MatButtonModule { }

registerElement("MatButton", () => require("./button").Button);