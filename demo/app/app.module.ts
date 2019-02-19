import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {MatButtonModule} from "nativescript-angular-material/modules/button";
import {MatChipModule} from "nativescript-angular-material/modules/chip";
import {AppRoutingModule} from "./app.routing";
import {AppComponent} from "./app.component";
import {MainComponent} from "./components/main.component";
import {ButtonComponent} from "./components/button/button.component";
import {ChipComponent} from "./components/chip/chip.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        MatButtonModule,
        MatChipModule,
    ],
    declarations: [
        AppComponent,
        MainComponent,
        ButtonComponent,
        ChipComponent,
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {}
