import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'my-app',
  // directives: [MealListComponent],
  template: `
    <div class="container">
      <h1>Meal Tracker</h1>
      <meal-list *ngFor="#meal of meals" [mealList]="meals" (click)="mealWasSelected(meal)">
        <hr>
        <h3>{{ meal.name }}</h3>
        <h4>Calories: {{ meal.calories }}</h4>
        <h4>Details: {{ meal.details }}</h4>
        <hr>
      </meal-list>
    </div>
  `
})
export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
    new Meal("Bistro Box", 450, "Carrots, Snap Peas, Hummas, Cheese, Crackers"),
    new Meal("Salad", 360, "Arugula, Spinach, Feta, Olives, Cucumber, Tomatoes, Pepperoncinis, and Tahini Dressing"),
    new Meal("Mediterranean Parfait", 500, "Greek Yogurt, Cashews, Orange Slices, and Honey")
  ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log(clickedMeal)
  }
}
