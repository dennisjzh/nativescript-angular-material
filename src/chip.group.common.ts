import {LayoutBase} from 'tns-core-modules/ui/layouts/layout-base';

export class ChipGroupCommon extends LayoutBase {

    static readonly MatChipGroup = "mat-chip-group";
    static readonly SingleLine = "single-line";
    static readonly Type = "type";

    constructor() {
        super();
        console.log("chip group common");
    }
}
