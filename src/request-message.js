import {join, buildQueryString} from 'aurelia-path';
import {Headers} from './headers';

export class RequestMessage {
  constructor(method : string, url : string, content, headers?: Headers) {
    this.method = method;
    this.url = url;
    this.content = content;
    this.headers = headers || new Headers();
    this.baseUrl = '';
  }

  buildFullUrl() : string {
    var url = join(this.baseUrl, this.url);

    if(this.params){
      var qs = buildQueryString(this.params);
      url = qs ? `${url}?${qs}` : url;
    }

    return url;
  }
}
