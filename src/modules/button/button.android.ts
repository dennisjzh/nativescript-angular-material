import {Color} from 'tns-core-modules/color';
import {backgroundColorProperty} from 'tns-core-modules/ui/core/view';
import * as ImageSource from 'tns-core-modules/image-source';
import {ButtonCommon, ButtonType, iconProperty} from './button.common';

declare var android: any;

export class Button extends ButtonCommon {

    get android(): any {
        return this.nativeView;
    }

    public createNativeView() {
        let view = this.createNativeViewByType();
        this.setOnClickListener(view);
        return view;
    }

    [iconProperty.setNative](value: any) {
        let iconDrawable = null;
        if (ImageSource.isFileOrResourcePath(value)) {
            iconDrawable = ImageSource.fromFileOrResource(value);
            if (iconDrawable) {
                this.android.setScaleType(android.widget.ImageView.ScaleType.CENTER);
                this.android.setImageBitmap(iconDrawable.android);
            }
        } else {
            const resources = android.content.res.Resources.getSystem();
            const drawableId = resources.getIdentifier(value, 'drawable', 'android');
            iconDrawable = resources.getDrawable(drawableId);
            if (iconDrawable) {
                this.android.setImageDrawable(iconDrawable);
            }
        }
    }

    [backgroundColorProperty.getDefault](): android.content.res.ColorStateList {
        return this.android.getBackgroundTintList();
    }

    [backgroundColorProperty.setNative](value: Color | android.content.res.ColorStateList) {
        let theValue = value instanceof Color ? android.content.res.ColorStateList.valueOf(value.android) : value;
        this.android.setBackgroundTintList(theValue);
    }

    private setOnClickListener(view) {
        const self = new WeakRef(this);
        view.setOnClickListener(
            new android.view.View.OnClickListener({
                get owner() {
                    return self.get();
                },
                onClick: function (v) {
                    if (this.owner) {
                        this.owner._emit(Button.TabEvent);
                    }
                }
            })
        );
    }

    private createNativeViewByType() {
        return this[Button.Type] === ButtonType.Fab ?
            new android.support.design.widget.FloatingActionButton(this._context) :
            new android.support.design.button.MaterialButton(this._context); // , null, android.R.style.Widget.MaterialComponents.Button.UnelevatedButton);
    }

}
