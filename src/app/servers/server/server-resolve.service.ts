import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { IServer } from '../modal/server.interface';
import { ServersService } from '../servers.service';

// interface Server {
//   id: number;
//   name: string;
//   status: string;
// }

@Injectable()
export class ServerResolver implements Resolve<IServer> {
  constructor(private serversService: ServersService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IServer> | Promise<IServer> | IServer {
    return this.serversService.getServer(+route.params['id']) as IServer;
  }
}
