import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
    <h2>Edit Meal: </h2>
    <h3>{{ meal.name }}</h3>
    <h3>{{ meal.calories }}</h3>
    <h3>{{ meal.details }}</h3>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
