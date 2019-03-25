import * as ImageSource from 'tns-core-modules/image-source';
import {CollapsingToolbarCommon} from "./collapsing-toolbar.common";

declare var android: any;

export class CollapsingToolbar extends CollapsingToolbarCommon {


    get android(): any {
        return this.nativeView;
    }

    public createNativeView() {
        let view = this.createNativeViewByType();
        return view;
    }

    private createNativeViewByType() {
        const coordinatorLayout = new android.support.design.widget.CoordinatorLayout(this._context);
        const appBarLayout = new android.support.design.widget.AppBarLayout(this._context);
        const collapsingToolbarLayout = new android.support.design.widget.CollapsingToolbarLayout(this._context);
        const toolbar = new android.support.v7.widget.Toolbar(this._context);
        const imageView = new android.widget.ImageView(this._context);
        const iconDrawable = ImageSource.fromFileOrResource('res://logo');
        if (iconDrawable) {
            imageView.setImageBitmap(iconDrawable.android);
        }

        const toolbarLayoutParams = new android.support.design.widget.CollapsingToolbarLayout.LayoutParams(android.view.ViewGroup.LayoutParams.WRAP_CONTENT, android.view.ViewGroup.LayoutParams.WRAP_CONTENT);
        toolbarLayoutParams.setCollapseMode(android.support.design.widget.CollapsingToolbarLayout.LayoutParams.COLLAPSE_MODE_PIN);
        toolbar.setLayoutParams(toolbarLayoutParams);

        const imageLayoutParams = new android.support.design.widget.CollapsingToolbarLayout.LayoutParams(android.view.ViewGroup.LayoutParams.WRAP_CONTENT, android.view.ViewGroup.LayoutParams.WRAP_CONTENT);
        imageLayoutParams.setCollapseMode(android.support.design.widget.CollapsingToolbarLayout.LayoutParams.COLLAPSE_MODE_PARALLAX);
        imageView.setLayoutParams(imageLayoutParams);

        collapsingToolbarLayout.addView(imageView);
        collapsingToolbarLayout.addView(toolbar);
        appBarLayout.addView(collapsingToolbarLayout);
        coordinatorLayout.addView(appBarLayout);
        collapsingToolbarLayout.setTitle("Collapsing");
        toolbar.setTitle("Toolbar......................");
        return coordinatorLayout;
    }

}
