import { Directive } from "@angular/core";

@Directive({
    selector: "button"
})
export class MatButtonDirective { }

export const DIRECTIVES = [MatButtonDirective];
