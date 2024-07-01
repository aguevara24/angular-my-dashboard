import { Component, computed, inject, signal } from '@angular/core';
import { TitleComponent } from "@shared/title/title.component";
import { ActivatedRoute } from "@angular/router";
import { User } from "@interfaces/req-response";
import { toSignal } from "@angular/core/rxjs-interop";
import { switchMap } from "rxjs";
import { UserService } from "@services/user.service";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    TitleComponent
  ],
  templateUrl: './user.component.html',
  styles: ``
})
export class UserComponent {

  private route = inject( ActivatedRoute );
  private userService = inject( UserService );

  public titleLabel = computed( () => {
    if ( this.user() ) {
      return `Información del usuario: ${ this.user()?.first_name } ${ this.user()?.last_name }`;
    }

    return 'Información del usuario';
  });

  // public user = signal<User | undefined>(undefined);
  public user = toSignal(
    this.route.params.pipe(
      switchMap( ({ id }) => this.userService.getUserById( id ))
    )
  );

  // constructor() {
  //   this.route.params.subscribe( params => {
  //     console.log({ params })
  //   })
  //
  // }
}
