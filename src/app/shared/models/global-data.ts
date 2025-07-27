import { Injectable } from "@angular/core";

@Injectable()
export class GlobalData {
  title = 'masiceiu'
  isOffline: boolean = false;
  cache: any = {};
  offlineStore: any = { };
}