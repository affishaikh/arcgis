import { Component, OnInit } from "@angular/core";
import { LoadMap } from "./services/map.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent implements OnInit {
  constructor(private loadMap: LoadMap) {}

  ngOnInit() {
    this.loadMap.loadMapModule();
  }
}
