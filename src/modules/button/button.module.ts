import { NgModule } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";

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

registerElement("MatButton", () => require("./button").Button);