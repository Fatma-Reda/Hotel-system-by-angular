import { Component, Input } from "@angular/core";

@Component({
  selector: "ngbd-collapse-basic",
  templateUrl: "./collapse.component.html",
  styleUrls: ["./collapse.component.scss"]
})
export class NgbdCollapseBasic {
  public isCollapsed = true;
  @Input() public groupitem;
}
