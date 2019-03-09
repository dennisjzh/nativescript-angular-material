import {Property, View} from 'tns-core-modules/ui/page/page';

export enum ButtonType {
    Basic = "basic",
    Raised = "raised",
    Stroked = "stroked",
    Flat = "flat",
    Fab = "fab",
}

export class ButtonCommon extends View {

    static readonly MatButton = "mat-button";
    static readonly Type = "type";
    static readonly ClickEvent = "click";

}

export const iconProperty = new Property<ButtonCommon, string>({
    name: 'icon',
    affectsLayout: true
});
iconProperty.register(ButtonCommon);

export const textProperty = new Property<ButtonCommon, string>({
    name: 'text',
    affectsLayout: true
});
textProperty.register(ButtonCommon);

