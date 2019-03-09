import {View, Property} from 'tns-core-modules/ui/page/page';

export enum ChipType {
    Action = "action",
    Choice = "choice",
    Entry = "entry",
    Filter = "filter",
}

export abstract class ChipCommon extends View {

    static readonly MatChip = "mat-chip";
    static readonly Text = "text";
    static readonly ClickEvent = "click";
    static readonly CloseEvent = "close";
    static readonly CheckEvent = "check";
    static readonly Type = "type";

    abstract isChecked(): boolean;

}

export const textProperty = new Property<ChipCommon, string>({
    name: ChipCommon.Text,
    affectsLayout: true
});
textProperty.register(ChipCommon);

