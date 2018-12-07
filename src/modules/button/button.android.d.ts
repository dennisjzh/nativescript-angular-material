import { ButtonCommon } from './button.common';
export declare class Button extends ButtonCommon {
    readonly android: any;
    createNativeView(): any;
    private createNativeViewByType();
    private setOnClickListener(view);
}
