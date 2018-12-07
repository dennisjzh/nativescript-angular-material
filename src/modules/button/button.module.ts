import { NgModule } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
import {ButtonCommon} from "./button.common";

@NgModule({
    imports: [
    ],
    declarations: [
    ],
    exports: [
    ],
    providers: [
    ],
})
export class MatButtonModule { }

registerElement(ButtonCommon.matButton, () => require("./button").Button);