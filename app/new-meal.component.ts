import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div class="meal-form">
      <h3>New Meal:</h3>
      <input placeholder="Name" class="col-sm-8 input-lg" #newName>
      <input placeholder="Calories" class="col-sm-8 input-lg" #newCalories>
      <input placeholder="Details" class="col-sm-8 input-lg" #newDetails>
      <button (click)="addMeal(newName, newCalories, newDetails)" class="btn-success btn-lg add-button">Add</button>
    </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<String[]>;
  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userName: HTMLInputElement, userCalories: HTMLInputElement, userDetails: HTMLInputElement) {
    var newMeal: String[] = [userName.value, userCalories.value, userDetails.value];
    this.onSubmitNewMeal.emit(newMeal)
    console.log(userName);
    userName.value = '';
    userCalories.value = '';
    userDetails.value = '';
  }
}
