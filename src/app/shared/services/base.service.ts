import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { authStorageKey } from "../../modules/auth/auth-storage";

const loginStorageKey = authStorageKey;
@Injectable()
export class BaseService {
  
  protected _lang: any
  protected _config: any
  protected es: any = null;
  protected _subject = new BehaviorSubject<object>({
    bismillah: { ar: '﷽', bn: 'বিসমিল্লাহির রাহমানির রাহীম', en: 'Bismillah Hir Rahman Nir Rahim' },
    alhamdulillah: { ar: 'ٱلْحَمْدُ لِلَّٰهِ', bn: 'আলহামদুলিল্লাহ', en: 'Alhamdulillah' }
  });
  get data() { return this._subject.asObservable(); }
  update(obj: object) { this._subject.next(obj); }
  get lang(): any {
    if (!this._lang) {
      this._lang = this._config['lang'];
    }
    return this._lang;
  }
  set lang(lang: any) {
    if (lang.id !== this._lang.id) {
      this._lang = lang;
      this.update(
        {
          lang: lang,
          switch_on: "lang-has-changed"
        });
    }
  }
  get config(): any {
    return this._config;
  }


  private _loginInfo: any;
  protected userList: any[] = [];
  protected userMessageList: any[] = [];
  constructor() {
    if (localStorage.getItem(loginStorageKey) != null) {

    }
   }
  
  loadLoginInfo() {
    if (localStorage.getItem(loginStorageKey) != null) {
        this._loginInfo = JSON.parse((localStorage.getItem(loginStorageKey)||"{}"));
    }else{
      this._loginInfo = JSON.parse("{}");
    }
  }
  setLoginInfo(loginInfo:any) {
    this._loginInfo = loginInfo;
    localStorage.setItem(loginStorageKey,JSON.stringify(loginInfo));
  }
  stringifyLoginInfo() {
    localStorage.setItem(loginStorageKey,JSON.stringify(this._loginInfo));
  }
 get loginInfo(): any {
   return this._loginInfo;
 }
 get UserId(): any {
  return this._loginInfo.id;
}
get UserName(): any {
 return this._loginInfo.name;
}
get RoleId(): any {
  return this._loginInfo.user_role;
}
get RoleName(): any {
  //Role..User
  return this._loginInfo.user_role;
}
 
 public get IsLoggedIn() {
   return localStorage.getItem(loginStorageKey) != null;
 }
 public get IsConnected() {
   return !(this.sseState>0);
 }
 Logout() {
   localStorage.removeItem(loginStorageKey);
   this._loginInfo = JSON.parse("{}");
   if(this.IsConnected){ this.sseStop();}
 }
 sseStop() { 
   let es =  this.es;
   if(es){
       es.close();
   }
 }
 get sseState(): number {
   if(this.es){
     return this.es.readyState;
   }
   return 2;
 }
 get sseUsers(): any[] {
   return this.userList.filter(it=>it.user_name != this.UserName);
 }
 get sseMessages(): any[] {
   return this.userMessageList
 }

}