import {View} from 'tns-core-modules/ui/page/page';

export enum ChipType {
    Action = "action",
    Choice = "choice",
    Entry = "entry",
    Filter = "filter",
}

export abstract class ChipCommon extends View {

    static readonly MatChip = "mat-chip";
    static readonly Text = "text";
    static readonly TapEvent = "tap";
    static readonly CloseEvent = "close";
    static readonly CheckEvent = "check";
    static readonly Type = "type";

    abstract isChecked(): boolean;
}
