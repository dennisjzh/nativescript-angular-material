import {Color} from 'tns-core-modules/color';
import {backgroundColorProperty, EventData} from 'tns-core-modules/ui/core/view';
import {ChipCommon, ChipType, textProperty} from './chip.common';


declare var android: any;
declare var com: any;

export class Chip extends ChipCommon {

    get android(): any {
        return this.nativeView;
    }

    isChecked(): boolean {
        return this.android && this.android.isChecked();
    }

    createNativeView() {
        let view = this.createNativeViewByType();
        this.setUpListeners(view);
        this.setType(view, this[Chip.Type] || this.parent[Chip.Type]);
        return view;
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

    [textProperty.setNative](value: any) {
        this.android.setText && this.android.setText(value);
    }

    [backgroundColorProperty.getDefault](): android.content.res.ColorStateList {
        return this.android.getBackgroundTintList();
    }

    [backgroundColorProperty.setNative](value: Color | android.content.res.ColorStateList) {
        let theValue = value instanceof Color ? android.content.res.ColorStateList.valueOf(value.android) : value;
        this.android.setBackgroundTintList(theValue);
    }

    private createNativeViewByType() {
        return new android.support.design.chip.Chip(this._context);
    }

    private setUpListeners(view) {
        const self = new WeakRef(this);
        const on = (event: string) =>
            (v) => {
                const owner = self.get();
                if (owner) {
                    const eventData: EventData = {
                        eventName: event,
                        object: owner,
                    };
                    owner.notify(eventData);
                    owner.parent && owner.parent.notify(eventData);
                }

            };
        view.setOnClickListener(
            new android.view.View.OnClickListener({
                onClick: on(Chip.ClickEvent)
            }));
        view.setOnCloseIconClickListener(
            new android.view.View.OnClickListener({
                onClick: on(Chip.CloseEvent)
            }));
        view.setOnCheckedChangeListener(
            new android.widget.CompoundButton.OnCheckedChangeListener({
                onCheckedChanged: on(Chip.CheckEvent)
            }));
    }
}