import { Injectable, Injector } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { AuthServiceExtended } from '@zyazilim/online-ihale-data';

@Injectable()
export class NotifyInterceptor implements HttpInterceptor {
    constructor(public inj: Injector) { }
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {
        const toastr = this.inj.get(NbToastrService);
        if (req.method === 'GET') {
            return next.handle(req);
        }
        if (req.method === 'POST') {
            return next.handle(req).pipe(
                tap((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse && event.status === 201) {
                        toastr.success('Ekleme başarılı.', 'Başarılı', { preventDuplicates: true, duplicatesBehaviour: 'all', limit: 3 });
                    }
                }),
            );
        }
        if (req.method === 'PUT') {
            return next.handle(req).pipe(
                tap((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse && event.status === 200) {
                        toastr.success('Güncelleme başarılı.', 'Başarılı', { preventDuplicates: true, duplicatesBehaviour: 'all', limit: 3 });
                    }
                }),
            );
        }
        if (req.method === 'DELETE') {
            return next.handle(req).pipe(
                tap((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse && event.status === 200) {
                        toastr.success('Silme başarılı.', 'Başarılı', { preventDuplicates: true, duplicatesBehaviour: 'all', limit: 3 });
                    }
                }),
            );
        }
    }
}

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(public inj: Injector) { }
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {
        const toastr = this.inj.get(NbToastrService);
        const auth = this.inj.get(AuthServiceExtended);
        const router = this.inj.get(Router);
        // if (!req.url.includes(paths.error)) {
        //   return next.handle(req);
        // }
        // console.warn("ErrorInterceptor");
        return next.handle(req).pipe(
            retry(1),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 400) {
                    console.log(error)
                    this.blobToText(error.error)
                        .subscribe(d => {
                            toastr.danger(d.message, 'Error',
                                {
                                    preventDuplicates: true,
                                    duplicatesBehaviour: 'all',
                                    duration: 5000,
                                    destroyByClick: true,
                                });
                        });

                } else if (error.status === 401) {
                    if (auth.isAuthenticated()) {
                        toastr.danger('Unauthorized Access', 'Error: ',
                            {
                                duration: 5000,
                                destroyByClick: true,
                                preventDuplicates: true,
                                duplicatesBehaviour: 'all',
                            });
                    } else {
                        router.navigate(['/auth', 'login']);
                    }

                } else if (error.status === 403) {
                    toastr.danger('Unauthorized Access', 'Error: ',
                        { duration: 5000, destroyByClick: true, preventDuplicates: true, duplicatesBehaviour: 'all' });
                } else if (error.status === 500) {
                    // unhandled exceptions
                    toastr
                        .danger(error.error.Mesaj, 'Error',
                            {
                                duration: 5000,
                                destroyByClick: true,
                                preventDuplicates: true,
                                duplicatesBehaviour: 'all',
                            });
                } else if (error.status === 404) {
                    // unhandled exceptions
                    toastr
                        .danger(error.message, 'Error',
                            {
                                duration: 5000,
                                destroyByClick: true,
                                preventDuplicates: true,
                                duplicatesBehaviour: 'all',
                            });
                } else {

                    // Object.keys(error.error).forEach(key => {
                    toastr
                        .danger(error.message, 'Error',
                            {
                                preventDuplicates: true,
                                duplicatesBehaviour: 'all',
                                duration: 5000,
                                destroyByClick: true,
                            });
                    // });
                }
                return throwError(error);
            }),
        );
    }
    blobToText(blob: any): Observable<any> {
        return new Observable<any>((observer: any) => {
            if (!blob) {
                observer.next('');
                observer.complete();
            } else {
                const reader = new FileReader();
                reader.onload = (event: ProgressEvent) => {
                    observer.next(JSON.parse(reader.result.toString()));
                    observer.complete();
                };
                reader.readAsText(blob);
            }
        });
    }
}
