import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Meal Tracker</h1>
      <meal-list [mealList]="meals">
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
}
