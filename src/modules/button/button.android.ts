import {ButtonCommon} from './button.common';

declare var android: any;

export class Button extends ButtonCommon {

    private _androidViewId: number;
    private _android: any;

    get android(): any {
        return this.nativeView;
    }

    public createNativeView() {
        this._android = new android.support.design.widget.FloatingActionButton(
            this._context
        );
        // const self = new WeakRef(this);
        // this._android.setOnClickListener(
        //     new android.view.View.OnClickListener({
        //         get owner() {
        //             return self.get();
        //         },

        //         onClick: function (v) {
        //             if (this.owner) {
        //                 this.owner._emit('tap');
        //             }
        //         }
        //     })
        // );

        return this._android;
    }

    public initNativeView() {
        this._androidViewId = android.view.View.generateViewId();
        this.nativeView.setId(this._androidViewId);
    }

}