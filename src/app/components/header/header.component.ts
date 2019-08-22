import { Component, OnInit } from "@angular/core";

@Component({
  selector: "header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  title = "You're travel mate";
  subtitle = "Book Hotels & Flights at Best price";
  constructor() {}
  ngOnInit() {}
}
