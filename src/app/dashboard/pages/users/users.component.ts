import { Component, inject } from '@angular/core';
import { UserService } from "@services/user.service";
import { TitleComponent } from "@shared/title/title.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    TitleComponent,
    RouterLink
  ],
  templateUrl: './users.component.html',
  styles: ``
})
export class UsersComponent {

  public usersService = inject( UserService );

}
