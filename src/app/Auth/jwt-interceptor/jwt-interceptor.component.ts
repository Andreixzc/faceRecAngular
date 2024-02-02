import { HttpClient, HttpInterceptorFn } from "@angular/common/http";

export const customInterceptor: HttpInterceptorFn  = (req, next) => {
  console.log("interceptor");
  //implementar validação na expiração do token, se expirado, redirecionar para login.
  return next(req);
}

