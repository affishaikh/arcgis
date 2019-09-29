import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { LoadMap } from "./services/map.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [LoadMap],
  bootstrap: [AppComponent]
})
export class AppModule {}
