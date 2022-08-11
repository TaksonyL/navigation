import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Response<T> {
  data: T
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler<T>): Observable<Response<T>> {
    return next.handle().pipe(
      map(data => {
        const ctx = context.switchToHttp()
        const response = ctx.getResponse()
        const request = ctx.getRequest()

        // const statusCode = response.statusCode
        const url = request.originalUrl;
        const method = request.method;
        const res = {
          code: 200,
          msg: '',
          success: true,
          data
        }

        console.log('请求地址 ===>', url, method)
        return res
      })
    );
  }
}
