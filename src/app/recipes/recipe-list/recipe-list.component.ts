import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Basil Steak',
      'Just a test recipe',
      'https://www.thepierhotellimerick.com/wp-content/uploads/2016/11/55735460-steak-wallpapers.jpg'
    ),
    new Recipe(
      'Peter Luger Steak',
      'Just a test recipe',
      'https://www.thepierhotellimerick.com/wp-content/uploads/2016/11/55735460-steak-wallpapers.jpg'
    ),
    new Recipe(
      'Mamou\'s Ribeye',
      'Just a test recipe',
      'https://www.thepierhotellimerick.com/wp-content/uploads/2016/11/55735460-steak-wallpapers.jpg'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
