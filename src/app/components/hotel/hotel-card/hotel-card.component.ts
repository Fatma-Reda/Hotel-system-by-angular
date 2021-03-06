import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "hotel-card",
  templateUrl: "./hotel-card.component.html",
  styleUrls: ["./hotel-card.component.scss"]
})
export class HotelCardComponent implements OnInit {
  @Input() public name;
  @Input() public city;

  constructor() {}

  ngOnInit() {}
}
