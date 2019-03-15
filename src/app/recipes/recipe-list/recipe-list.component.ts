import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'Just a test recipe',
      'https://www.thepierhotellimerick.com/wp-content/uploads/2016/11/55735460-steak-wallpapers.jpg'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
