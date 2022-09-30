import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PageNotFooundComponent } from './page-not-foound/page-not-foound.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolve.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    HomeComponent,
    ServersComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFooundComponent,
    ErrorPageComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [
    ServersService,
    AuthService,
    AuthGuard,
    CanDeactivateGuard,
    ServerResolver,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
