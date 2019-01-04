import { NgModule } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
import {ChipCommon} from "./chip.common";

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
export class MatChipModule { }

registerElement(ChipCommon.MatChip, () => require("./chip").Chip);