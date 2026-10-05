import {
  HttpInterceptorFn
} from '@angular/common/http';

export const correlationIdInterceptor: HttpInterceptorFn =
  (req, next) => {

    const correlationId =
      crypto.randomUUID();

    const clonedRequest =
      req.clone({
        setHeaders: {
          'X-Correlation-ID':
            correlationId
        }
      });

    console.log(
      `[${req.method}] ${req.urlWithParams} | Correlation ID: ${correlationId}`
    );

    return next(clonedRequest);
  };