import { Component } from "@angular/core";
import { RootState } from "src/app/store";
import { Store } from "@ngrx/store";
import * as UserActions from "src/app/store/user/user.actions";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(private store: Store<RootState>) {}

  public logout(): void {
    this.store.dispatch(UserActions.logout());
  }
}
