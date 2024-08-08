import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShoppingListComponent} from "./shopping-list.component";
import {ShoppingEditComponent} from "./shopping-edit/shopping-edit.component";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {LoggingService} from "../logging.service";

const slRoutes: Routes = [
  {path: '', component: ShoppingListComponent},
]

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [
    // CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(slRoutes)
  ],
  // providers: [LoggingService],
  exports: [RouterModule]
})
export class ShoppingListModule { }
