import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Title, Meta } from '@angular/platform-browser';
import { BaseService } from './shared/services/base.service';
import { environment } from '../environments/environment';

//interface Config { [key: string]: any }
@Injectable()
export class AppService extends BaseService {

  constructor(
    private zone: NgZone,
    private http: HttpClient,
    private metaService:Meta,
    private titleService:Title) {
      super();
      //this.titleService.setTitle('মুসলিম জীবন');
      this.metaService.addTags([  
        { name: 'author', content: 'Mr Abdus Sobahn' },
        { name: 'description', content: '✸ Allah | আল্লাহ | الله নামের বিস্তারিত ব্যাখ্যা, Free largest source for Al-Quran with tafsir, Muslim life and Islamic Books, Bangla (বাংলা), English and Arabic with personal account for Favorite & Tag.' },
        { name: 'keywords', content: 'muslim life database, muslim life software, hadis software, muslim life app download, bangla muslim life app, muslim life website, english muslim life website, bangla muslim life website, bangla islamic content' },  
        { name: 'robots', content: 'index, follow' },  
        { name: 'writer', content: 'Abdus Sobahn' },  
        { name: 'image', content: './assets/blog-image.png' },  
        { charset: 'UTF-8' }  
      ]); 
      this.metaService.addTags([
        { property: 'og:type', content: 'article'},
        { property: 'og:url', content: 'https://masiceiu.com/'},
        { property: 'og:title', content: 'মুসলিম জীবন | search read and share authentic quran, tafsir, ebooks read online, free,আল্লাহ | الله নামের অর্থ ও ব্যাখ্যা'},
        { property: 'og:description', content: 'Free largest source in for Quran, Muslim life and Islamic Books, Bangla (বাংলা), English and Arabic.'},
        { property: 'og:image', content: 'https://docs.google.com/uc?export=open&id=1-WpKm7liWmvXYSoDF4P2l2vYNkDbvikT'},
        { property: 'og:image:alt', content: 'https://masiceiu.com/favicon.ico'},
        { property: 'og:image:width', content:'1200'},
        { property: 'og:image:height', content:'630'},
        { property: 'og:video', content: '?' },
        { property: 'fb:app_id', content: '?' }
      ]);
      
      this.data.subscribe((payload: any) => {
        //console.log(payload);
      });
  }
  load() {
    const url = `/assets/json/config.json`
    return new Promise<void>((resolve, reject) => {
      this.http
        .get(url)
        .subscribe({ 
          next:(value:any)=>{
            this._config = value;
            if (!environment.production) {
              resolve();
              return;
            }
            let baseUrl = value.apiBaseUrl          
            const url2 = `${baseUrl}api/files/config`;
            this.http
            .get(url2)
            .subscribe({ 
              next:(res:any)=>{           
                this._config['sid'] = res.sid
                this._config['json'] = res.json
                resolve();      
              },
              error:(err:any)=> {
                resolve();
              }
          })},
          error:(err:any)=> {
            reject(`Could not load app configuration file '${url}': ${JSON.stringify(err)}`)
          },
        });
    })
  }
  
  loadNext() {
    return new Promise<void>((resolve, reject) => {
    });
  }
  public set Title(value: string) {
    let val = value +"-MyDiary";
    this.titleService.setTitle(val);
  }
  get httpClient(): HttpClient {
    return this.http;
  }

  get(url: string): any {
    return this.http.get(url).subscribe((res:any) => { return res; });
  }
  post_user_log(req: any): any {
    let url = `${this.config.apiBaseUrl}api/account/user_log`;
    this.httpClient.post(url, req).subscribe((res: any) => {
    });
  }
 
  ipInfo(): Promise<string> {
    const url = 'https://jsonip.com';
    return new Promise<string>((resolve, reject) => {
      this.http.get<any>(url)
        .subscribe({ 
          next:(data: any) => resolve(data.ip), 
          error:(err: any) => reject(`Fail to find ip from '${url}'`)
        });
    });
  }

  fileLoad(fileJson: any) {
    return new Promise(function (resolve, reject) {
      var request = new XMLHttpRequest();
      request.open('GET', fileJson.url);
      request.responseType = 'blob';
      request.onload = function () {
        if (request.status == 200) {
          var res = [];
          res[0] = request.response;
          res[1] = fileJson;
          resolve(res);
        } else {
          reject(Error('Url didn\'t load successfully; error code:' + request.statusText));
        }
      };
      request.onerror = function () {
        reject(Error('There was a network error.'));
      };
      request.send();
    });
  }

  private startListen(user: string, ev: any): void {
    let baseUrl = this.config.apiBaseUrl
    let sseUrl = `${baseUrl}sse.php?from=${user}&ev=${ev}`;
    new Observable<any>(obs => {
       this.es = new EventSource(sseUrl);
       this.es.addEventListener('message', (evt: any) => {
            let res = { ev: 'message', data: evt.data };
            obs.next(res);
            //console.log(res);
        });
        this.es.addEventListener('ping', (evt: any) => {
            //console.log('es',evt);
            let res = { ev: 'ping', data: evt.data, id:evt.lastEventId };
            obs.next(res);
        }, false);
        this.es.addEventListener(user, (evt: any) => {
            let res = { ev: user, data: evt.data };
            obs.next(res);
            //console.log(res);
        });
        this.es.addEventListener('error', (evt:any) => { 
        }); 
        return () => this.es.close();
    }).subscribe({next:(res: any) => {
        //console.log(res.ev);
        switch (res.ev) {
            case 'ping':
                let data = JSON.parse(res.data);
                let ulist1 = data.users;
                let ulist2 = this.userList;
                let ulist3: any[] = [];
                ulist1.forEach((el1: any) => {
                    let has = ulist2.some(function (el2) {
                        return el1.user_name === el2.user_name;
                    });
                    if (has) {
                      let it = this.userList.find(it=>it.id === el1.id);
                      it.online = el1.ping_second>0;
                      it.ping_second = el1.ping_second;
                      //console.log(it.name, it.ping_second, el1.ping_second, it.online);
                    } else {
                        el1.online = el1.ping_second>0;
                        ulist3.push(el1);
                    }
                });
                ulist3.forEach((el: any) => {
                    this.userList.push(el);
                });
                //console.log("ot:", data.msg,data.ping,data.ping_time);
                //console.log("users:", this.userList);
                break;
            case 'seen':
                console.log("res:", res);
                break;
            case 'error':
                //console.log("error:", res);
                break;
            case 'message':
                console.log("message:", res);
                break;
            default://for login user
                let mlist = JSON.parse(res.data);
                let mlist1 = mlist;
                let mlist2 = this.userMessageList;
                let mlist3: any[] = [];
                mlist1.forEach((el1: any) => {
                    let has = mlist2.some(function (el2:any) {
                        return el1.id === el2.id;
                    });
                    if (has) {

                    } else {
                        mlist3.push(el1);
                    }
                });
                mlist3.forEach((el: any) => {
                    this.userMessageList.push(el);
                });
                //console.log("Messages:",this.userMessageList);
                break;
        }
    },
    error:(err: any)=>{}});
  }
  
  sseStartSession() { 
    if(this.sseState){
        let name = this.loginInfo.name;
        if(name){          
          this.startListen(name,'reg');
        }
    }
  }

  sseGet(from: any, to: any, message: any, ev: any): Observable<any> {
    let baseUrl = this.config.apiBaseUrl
    let sseUrl = `${baseUrl}sse.php?from=${from}&to=${to}&msg=${message}&ev=${ev}`;
    return new Observable<any>(obs => {
        const es = new EventSource(sseUrl);
        es.addEventListener(ev, (evt: any) => {
            let res = { ev: ev, data: evt.data };
            obs.next(res);
            es.close();
        });
        return () => es.close();
    })
  }
  
  send(message:string, toUser:string):void {
      let sseStream = this.sseGet(this.UserName, toUser, message, 'send').subscribe((res: any) => {
        let item = JSON.parse(res.data);
          sseStream.unsubscribe();
      })
  }
  seen(id: string) {
    let sseStream = this.sseGet(this.UserName, '', id, 'seen').subscribe((res: any) => {
      let item = JSON.parse(res.data);
      let index = this.userMessageList.findIndex(it=>it.id === item.id);
      this.userMessageList.splice(index,1);
      //console.log("seen->", res,item,index,this.userMessageList.length);
      sseStream.unsubscribe();
    })
  }
}