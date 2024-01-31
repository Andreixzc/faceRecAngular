import { HttpClient, HttpInterceptorFn } from "@angular/common/http";

export const customInterceptor: HttpInterceptorFn  = (req, next) => {
  console.log("interceptor");
  return next(req);
}

