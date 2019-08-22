import { Component, OnInit } from "@angular/core";
import { HotelService } from "../../services/hotel.service";
@Component({
  selector: "filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"]
})
export class FilterComponent implements OnInit {
  constructor(private _hotelService: HotelService) {}
  searchText;
  ngOnInit() {}
  newMessage() {
    this._hotelService.changeMessage(this.searchText);
  }
}
