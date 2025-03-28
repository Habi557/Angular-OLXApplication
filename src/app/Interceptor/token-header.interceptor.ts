import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenHeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      // List of URLs to exclude
      const excludedUrls = ['/postadvertise','/logout'];

      // Check if the request URL matches an excluded URL
      const isExcluded = excludedUrls.some(url => req.url.includes(url));
  
      if (isExcluded) {
        // Pass the request without modifying it
        console.log("request not modified");
        return next.handle(req);
      }else{
        console.log("request modified");
      }
    const modifiedReq = req.clone({
      setHeaders: {
        Authorization: `${localStorage.getItem("token")}`, // Example: Authorization header
        'Content-Type': 'application/json',     // Example: Default content type
      },
    });
    return next.handle(modifiedReq);
  }
}
