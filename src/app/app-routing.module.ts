import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { PageNotFoundComponent } from "./page-not-found.component";
import { HotelListingComponent } from "./components/hotel/hotel-listing/hotel-listing.component";
const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HeaderComponent },
  { path: "hotels", component: HotelListingComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
