import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  template: `
  <meal-display *ngFor="#currentMeal of mealList">
  </meal-display>
  `

})
export class MealListComponent {
  public mealList: Meal[];
  constructor(){

  }
}
