import { Component, HostBinding, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-button",
    templateUrl: "./button.component.html",
    styleUrls: ["./button.component.scss"],
})
export class ButtonComponent implements OnInit {
    @Input() color: "primary" | "warn" | "default";
    @Input() icon: string = "";
    @Input() size: "small" | "normal";

    @HostBinding("class") get elementSize() {
        return [`btn-${this.size}`, `btn-${this.color}`];
    }

    constructor() {}

    ngOnInit(): void {}
}
