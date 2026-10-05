import {
  HttpErrorResponse,
  HttpInterceptorFn
} from '@angular/common/http';

import {
  catchError,
  throwError
} from 'rxjs';


export const errorInterceptor: HttpInterceptorFn =
  (req, next) => {

    return next(req).pipe(

      catchError(
        (error: HttpErrorResponse) => {

          let message =
            'An unexpected error occurred.';


          if (error.status === 0) {

            message =
              'Unable to connect to the server.';

          }
          else {

            switch (error.status) {

              case 400:

                message =
                  getBadRequestMessage(error);

                break;


              case 401:

                message =
                  'You are not authorized. Please login.';

                break;


              case 403:

                message =
                  'You do not have permission to perform this action.';

                break;


              case 404:

                message =
                  'The requested resource was not found.';

                break;


              case 500:

                message =
                  'A server error occurred. Please try again later.';

                break;

            }

          }


          console.error(
            `${req.method} ${req.urlWithParams}`,
            {
              status: error.status,
              message: message,
              error: error.error
            }
          );


          return throwError(() => ({
            originalError: error,
            message: message
          }));

        }
      )

    );

  };


function getBadRequestMessage(
  error: HttpErrorResponse
): string {

  if (error.error?.errors) {

    const validationErrors =
      Object.values(
        error.error.errors
      ).flat();

    return validationErrors
      .join(' ');

  }


  if (error.error?.detail) {

    return error.error.detail;

  }


  if (error.error?.title) {

    return error.error.title;

  }


  return 'Invalid request.';

}