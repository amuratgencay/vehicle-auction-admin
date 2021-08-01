import { Injectable, Injector } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler,
    HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthServiceExtended } from '@zyazilim/online-ihale-data';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(public inj: Injector) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const auth = this.inj.get(AuthServiceExtended);
        const token = auth.getToken() && auth.getToken().accessToken;
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
        return next.handle(request);
    }
}
