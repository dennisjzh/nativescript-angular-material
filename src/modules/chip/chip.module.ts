import {NgModule} from "@angular/core";
import {registerElement} from "nativescript-angular/element-registry";
import {ChipCommon} from "./chip.common";
import {ChipGroupCommon} from "./chip.group.common";

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
export class MatChipModule {}

registerElement(ChipCommon.MatChip, () => require("./chip").Chip);
registerElement(ChipGroupCommon.MatChipGroup, () => require("./chip.group").ChipGroup);