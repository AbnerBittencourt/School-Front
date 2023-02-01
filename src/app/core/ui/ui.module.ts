import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { ButtonComponent } from "./button/button.component";
import { HeaderComponent } from "./header/header.component";

const modules = [MatIconModule];

const components = [ButtonComponent, HeaderComponent];

@NgModule({
    declarations: [...components],
    imports: [CommonModule, ...modules],
    exports: [...components],
})
export class UIModule {}
