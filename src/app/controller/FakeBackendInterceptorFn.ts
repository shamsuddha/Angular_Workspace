import {HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpResponse} from '@angular/common/http';
import {delay, dematerialize, materialize, mergeMap, of, throwError} from "rxjs";

let userList: Array<any> = [];

export const fakeHttpInterceptorFn: HttpInterceptorFn = (request: HttpRequest<unknown>, next: HttpHandlerFn) => {

  let cloneRequest = request.clone({
    setHeaders: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer fake-jwt-token'
    }
  });

  return of(null).pipe(mergeMap(() => {

    if (request.url.endsWith('/login') && request.method === 'POST') {
      console.log(request.body)
      if ((request.body as any).username ==='user1' &&
        (request.body as any).password ==='password1') {
        return of(new HttpResponse({status: 200, body: null}));
      } else {
        return throwError({error: {message: 'Username or password is incorrect'}});
      }
    } else if (request.url.endsWith('/users') && request.method === 'GET') {
      if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
        return of(new HttpResponse({status: 200, body: userList}));
      } else {
        return throwError({status: 401, error: {message: 'Unauthorised'}});
      }
    } else if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
      if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
        const urlParts = request.url.split('/');
        const id = parseInt(urlParts[urlParts.length - 1]);
        const matchedUsers = userList.filter(user => user.id === id);
        const user = matchedUsers.length ? matchedUsers[0] : null;
        return of(new HttpResponse({status: 200, body: user}));
      } else {
        return throwError({status: 401, error: {message: 'Unauthorised'}});
      }
    } else if (request.url.endsWith('/users/register') && request.method === 'POST') {
      console.log(request.body);
      localStorage.setItem('users', JSON.stringify([]));
      return of(new HttpResponse({status: 200}));
    } else if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
      if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
        return of(new HttpResponse({status: 200, body: []}));
      } else {
        return throwError({status: 401, error: {message: 'Unauthorised'}});
      }
    }else{
      return next(cloneRequest);
    }
  }))
    .pipe(materialize())
    .pipe(delay(1000))
    .pipe(dematerialize());

}
