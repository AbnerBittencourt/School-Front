import { Component, Input, OnInit } from "@angular/core";
import { IModule } from "app/interfaces/module.interface";
import { ModulesService } from "app/services/module.service";

@Component({
    selector: "sidenav",
    templateUrl: "./sidenav.component.html",
    styleUrls: ["./sidenav.component.scss"],
})
export class SidenavComponent implements OnInit {
    modules: IModule[];

    @Input() class: string = "";

    constructor(private _modules: ModulesService) {}

    ngOnInit() {
        this._modules.find().subscribe((module) => {
            this.modules = module;
        });
    }
}
