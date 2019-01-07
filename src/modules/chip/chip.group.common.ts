import {View} from 'tns-core-modules/ui/page/page';
import {CustomLayoutView} from 'tns-core-modules/ui/page/page';
import {GridLayout} from 'tns-core-modules/ui/layouts/grid-layout';
import {StackLayout} from 'tns-core-modules/ui/layouts/stack-layout';
import {LayoutBase} from 'tns-core-modules/ui/layouts/layout-base';

export class ChipGroupCommon extends LayoutBase {

    static readonly MatChipGroup = "mat-chip-group";
    static readonly TabEvent = "tap";

    constructor() {
        super();
        console.log("chip group common");
    }

}
