import {Color} from 'tns-core-modules/color';
import {backgroundColorProperty} from 'tns-core-modules/ui/core/view';
import {ChipCommon, ChipType} from './chip.common';

declare var android: any;
declare var com: any;

export class Chip extends ChipCommon {
    
    isChecked(): boolean {
        return this.nativeView.isChecked();
    }

    get android(): any {
        return this.nativeView;
    }

    public createNativeView() {
        let view = this.createNativeViewByType();
        this.setOnClickListener(view);
        view.setText(this[Chip.Text]);
        this.setType(view, this[Chip.Type] || this.parent[Chip.Type]);
        return view;
    }

    private createNativeViewByType() {
        return new android.support.design.chip.Chip(this._context);
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
                        this.owner._emit(Chip.TabEvent);
                    }
                }
            })
        );
        view.setOnCloseIconClickListener(
            new android.view.View.OnClickListener({
                get owner() {
                    return self.get();
                },
                onClick: function (v) {
                    if (this.owner) {
                        this.owner._emit(Chip.CloseEvent);
                    }
                }
            })
        );
        view.setOnCheckedChangeListener(
            new android.widget.CompoundButton.OnCheckedChangeListener({
                get owner() {
                    return self.get();
                },
                onCheckedChanged: function (v, isChecked) {
                    if (this.owner) {
                        this.owner._emit(Chip.CheckEvent);
                    }
                }
            })
        );
    }

    public setType(nativeView, type: string) {

        switch (type) {
            case ChipType.Action:
                break;
            case ChipType.Choice:
                nativeView.setCheckable(true);
                nativeView.setCheckedIcon(null);
            break;
            case ChipType.Entry:
                nativeView.setCloseIconVisible(true);
                break;
            case ChipType.Filter:
                nativeView.setCheckable(true);
                break;
        }
    }

    [backgroundColorProperty.getDefault](): android.content.res.ColorStateList {
        return this.nativeView.getBackgroundTintList();
    }

    [backgroundColorProperty.setNative](value: Color | android.content.res.ColorStateList) {
        let theValue = value instanceof Color ? android.content.res.ColorStateList.valueOf(value.android) : value;
        try {
            this.nativeView.setBackgroundTintList(theValue);
        } catch (err) {
            console.log(`Error setNative backgroundColorProperty: `, err);
        }
    }
}
