import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <h3>New Meal:</h3>
    <form>
      <div class="form-group">
        <input placeholder="Name" class="col-sm-8 input-lg" #newName>
      </div>
      <div class= "form-group">
        <input placeholder="Calories" class="col-sm-8 input-lg" #newCalories>
      </div>
      <div class="form-group">
        <input placeholder="Details" class="col-sm-8 input-lg" #newDetails>
      </div>
      <button (click)="addMeal(newName, newCalories, newDetails)" class="btn-success btn-lg add-button">Add</button>
    </form>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<string[]>;
  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(mealName: HTMLInputElement, mealCalories: HTMLInputElement, mealDetails: HTMLInputElement) {
    var newMeal: string[] = [mealName.value, mealCalories.value, mealDetails.value];
    console.log('addMeal', newMeal);
    this.onSubmitNewMeal.emit(newMeal);
    console.log(mealName);
    mealName.value = '';
    mealCalories.value = '';
    mealDetails.value = '';
  }
}
