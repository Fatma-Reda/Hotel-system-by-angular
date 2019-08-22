import { Component, OnInit } from "@angular/core";
import { HotelService } from "../../../services/hotel.service";
import { Hotel } from "../../../models/hotel.model";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "hotel-listing",
  templateUrl: "./hotel-listing.component.html",
  styleUrls: ["./hotel-listing.component.scss"]
})
export class HotelListingComponent implements OnInit {
  constructor(
    private _hotelService: HotelService,
    private spinner: NgxSpinnerService
  ) {}
  lstHotels: Hotel[];
  message: string;
  ngOnInit() {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);

    this._hotelService.getHotels().subscribe(
      data => {
        var { hotels } = data;
        this.lstHotels = hotels;
      },
      error => console.error(error)
    );

    this._hotelService.currentMessage.subscribe(
      message => (this.message = message)
    );
  }
}
