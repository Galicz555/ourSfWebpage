import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SessionComponent } from "./components/session/session.component";
import { TopOneLinersComponent } from './components/top-one-liners/top-one-liners.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SessionComponent,
    routingComponents,
    TopOneLinersComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
