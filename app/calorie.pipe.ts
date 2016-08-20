import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calorie",
  pure: false
})
export class CaloriePipe implements PipeTransform {
  transform(input: Meal[], args){
    var desiredCalories = args[0];
    var output: Meal[] =[];
    if(desiredCalories === "low"){
      for (var i =0; i <input.length; i++){
        if (input[i].calories <= 500) {
          output.push(input[i]);
      }
    }
    return output;
  } else if (desiredCalories === "high"){
      for (var i =0; i <input.length; i++){
        if (input[i].calories > 500) {
          output.push(input[i]);
    }
  }
  return output;
  } else {
    return input;
    }
  }
}
