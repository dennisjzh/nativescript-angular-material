import {View} from 'tns-core-modules/ui/page/page';

export enum ChipType {
    Action = "action",
    Choice = "choice",
    Entry = "entry",
    Filter = "filter",
}

export class ChipCommon extends View {

    static readonly MatChip = "mat-chip";
    static readonly Text = "text";
    static readonly TabEvent = "tap";
    static readonly Type = "type";
}
