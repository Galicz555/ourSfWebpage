import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { ShipPageComponent } from "./components/ship-page/ship-page.component";
import { TeamPageComponent } from "./components/team-page/team-page.component";
import { ContactsPageComponent } from "./components/contacts-page/contacts-page.component";
import { OneLinersPageComponent } from "./components/one-liners-page/one-liners-page.component";
import { PicturesPageComponent } from "./components/pictures-page/pictures-page.component";

const routes: Routes = [
  { path: "home", component: HomePageComponent },
  { path: "team", component: TeamPageComponent },
  { path: "ship", component: ShipPageComponent },
  { path: "one-liners", component: OneLinersPageComponent },
  { path: "pictures", component: PicturesPageComponent },
  { path: "contacts", component: ContactsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  HomePageComponent,
  OneLinersPageComponent,
  ShipPageComponent,
  TeamPageComponent,
  PicturesPageComponent,
  ContactsPageComponent
];
