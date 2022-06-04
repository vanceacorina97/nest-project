import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { instanceToPlain } from 'class-transformer';
import { map } from 'rxjs';

@Injectable()
export class TransformIntereptor implements NestInterceptor {
  //ajuta ca daca dai obiectul de user sa nu il scrie tot ci sa il scrie ca si id in JSON
  intercept(context: ExecutionContext, next: CallHandler<any>) {
    return next.handle().pipe(map((data) => instanceToPlain(data)));
  }
}
