import {NgModule} from "@angular/core";
import {registerElement} from "nativescript-angular/element-registry";
import {CollapsingToolbarCommon} from "./collapsing-toolbar.common";

@NgModule({
    imports: [
    ],
    declarations: [
    ],
    exports: [
    ],
    providers: [
    ],
})
export class CollapsingToolbarModule {}

registerElement(CollapsingToolbarCommon.CollapsingToolbar, () => require("./collapsing-toolbar").CollapsingToolbar);