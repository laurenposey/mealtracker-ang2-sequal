import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import { CaloriePipe } from './calorie.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [CaloriePipe],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  template: `
  <select (change)="onChange($event.target.value)" class="pipe">
    <option selected="selected" value="all">Show All</option>
    <option value="low">Show low calorie foods</option>
    <option value="high" selected="selected">Show high calorie foods</option>
  </select>
  <meal-display *ngFor="#currentMeal of mealList | calorie:selectedCalories"
    (click)="mealClicked(currentMeal)"
    [class.selected]="currentMeal === selectedMeal"
    [meal]="currentMeal">
  </meal-display>
  <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal">
  </edit-meal-details>
  <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  `

})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public selectedCalories: string = "all";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
      console.log(clickedMeal);
      this.selectedMeal = clickedMeal;
      this.onMealSelect.emit(clickedMeal);
    }
  createMeal(newMeal: string[]): void {
    console.log(newMeal);
    this.mealList.push(
      new Meal(newMeal[0], parseInt(newMeal[1]), newMeal[2])
    )
  }
  onChange(optionFromMenu){
    this.selectedCalories = optionFromMenu;
  }
}
