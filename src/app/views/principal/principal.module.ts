import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "app/shared.module";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";

import { PrincipalRoutingModule } from "./principal-routing.module";
import { PrincipalComponent } from "./principal.component";

const components = [PrincipalComponent, SidenavComponent, NavbarComponent];

@NgModule({
    declarations: [...components],
    imports: [CommonModule, PrincipalRoutingModule, SharedModule],
    exports: [PrincipalRoutingModule, ...components],
})
export class PrincipalModule {}
