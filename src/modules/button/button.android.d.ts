import { ButtonCommon } from './button.common';
export declare class Button extends ButtonCommon {
    private _androidViewId;
    private _android;
    readonly android: any;
    createNativeView(): any;
    initNativeView(): void;
}
