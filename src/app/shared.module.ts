import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRippleModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSortModule } from "@angular/material/sort";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatTreeModule } from "@angular/material/tree";
import { RouterModule } from "@angular/router";
import { UIModule } from "./core/ui/ui.module";
import { ModulesService } from "./services/module.service";

const modules = [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FlexLayoutModule,
    UIModule,

    /* Material imports */
    MatExpansionModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDatepickerModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatIconModule,
    MatSelectModule,
    MatSnackBarModule,
    MatGridListModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatTableModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatBadgeModule,
    MatTabsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatTreeModule,
    MatRippleModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatSortModule,
];

const providers = [ModulesService];

@NgModule({
    declarations: [],
    imports: [CommonModule, modules],
    exports: [...modules],
    providers: [...providers],
})
export class SharedModule {}
