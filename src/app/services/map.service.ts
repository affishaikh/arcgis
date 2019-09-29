import { Injectable } from "@angular/core";
import { loadModules } from "esri-loader";

@Injectable({
  providedIn: "root"
})
export class LoadMap {
  constructor() {}

  loadMapModule() {
    return loadModules(["esri/Map", "esri/views/MapView"]).then(
      ([Map, MapView]) => {
        const map = new Map({
          basemap: "topo-vector"
        });

        const mapView = new MapView({
          map,
          container: "mapView"
        });
        return mapView;
      }
    );
  }
}
