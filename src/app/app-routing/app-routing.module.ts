import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {ShoppingListComponent} from "../shopping-list/shopping-list.component";
import {AuthComponent} from "../auth/auth.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes',
    loadChildren: () => import('../recipes/recipes.module').then(m => m.RecipesModule)
  },
  {path: 'shopping-list',
    loadChildren: () => import('../shopping-list/shopping-list.module').then(m => m.ShoppingListModule)
  },
  {path: 'auth',
    loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabledBlocking' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
