import { Component } from "@angular/core";
import { Options } from "ng5-slider";

@Component({
  selector: "app-range-slider",
  templateUrl: "./range-slider.component.html",
  styleUrls: ["./range-slider.component.scss"]
})
export class RangeSliderComponent {
  value: number = 378;
  highValue: number = 14148;
  currency: string = "AED";
  options: Options = {
    floor: 378,
    ceil: 14148
  };
}
