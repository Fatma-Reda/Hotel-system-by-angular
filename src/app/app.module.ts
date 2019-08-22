import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HotelService } from "./services/hotel.service";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { HeaderComponent } from "./components/header/header.component";
import { PageNotFoundComponent } from "./page-not-found.component";
import { SearchComponent } from "./components/search/search.component";
import { HotelCardComponent } from "./components/hotel/hotel-card/hotel-card.component";
import { HotelListingComponent } from "./components/hotel/hotel-listing/hotel-listing.component";
import { NgbdButtonsRadioreactive } from "./components/shared/radio-button/radio-button.component";
import { NgbdRatingEvents } from "./components/shared/rating/rating.component";
import { FilterComponent } from "./components/filter/filterbysearch.component";
import { SideBarComponent } from "./components/side-bar/side-bar.component";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgbdCollapseBasic } from "./components/shared/collapse/collapse.component";
import { Ng5SliderModule } from "ng5-slider";
import { RangeSliderComponent } from "./components/shared/range-slider/range-slider.component";
import { NgbdDatepickerRange } from "./components/shared/date-picker/date-picker.component";
import { NgbdDropdownBasic } from "./components/shared/dropdown/dropdown.component";
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    PageNotFoundComponent,
    SearchComponent,
    HotelCardComponent,
    HotelListingComponent,
    NgbdButtonsRadioreactive,
    NgbdRatingEvents,
    FilterComponent,
    SideBarComponent,
    NgbdCollapseBasic,
    RangeSliderComponent,
    NgbdDatepickerRange,
    NgbdDropdownBasic
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng5SliderModule,
    NgxSpinnerModule
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule {}
