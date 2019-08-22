import { Component, OnInit } from "@angular/core";

@Component({
  selector: "side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.scss"]
})
export class SideBarComponent implements OnInit {
  constructor() {}
  public lstgroupitems = [
    { option: "Price" },
    { option: "Star Rating" },
    { option: "Chain" },
    { option: "Hotel Aminties" },
    { option: "Room Aminties" }
  ];
  ngOnInit() {}
}
