import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtService } from '../jwt.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private jwtService: JwtService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.jwtService.getToken();
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.jwtService.getToken()}`,
        }
      });
    }
    return next.handle(req);
  }
}
