import {Component, OnInit} from '@angular/core';

import {Recipe} from '../recipe';
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import * as fromApp from "../../store/app.reducer";
import * as RecipesActions from '../store/recipe.actions';
import * as ShoppingListAction from '../../shopping-list/store/shopping-list.actions';
import {map, switchMap} from "rxjs";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipe: Recipe;
  recipe: Recipe;
  id: number;

  constructor(private router: Router,
              private route: ActivatedRoute, private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    this.route.params
      .pipe(
        map(params => {
          return +params['id'];
        }),
        switchMap(id => {
          this.id = id;
          return this.store.select('recipes');
        }),
        map(recipesState => {
          return recipesState.recipes.find((recipe, index) => {
            return index === this.id;
          });
        })
      )
      .subscribe(recipe => {
        this.recipe = recipe;
      });
  }

  onAddToShoppingList() {
    this.store.dispatch(new ShoppingListAction.AddIngredients(this.recipe.ingredients));
  }

  onEditRecipe() {
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route})
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

  onDeleteRecipe() {
    // this.recipeService.deleteRecipe(this.id);
    this.store.dispatch(new RecipesActions.DeleteRecipe(this.id))
    this.router.navigate(['recipes']);
  }
}
