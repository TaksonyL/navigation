import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { TransformInterceptor } from '@/interceptors/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new TransformInterceptor()); // 响应值格式

  await app.listen(3000);
}
bootstrap();
