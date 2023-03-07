import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { LoginModule } from './login.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    LoginModule,
    {
      transport: Transport.TCP,
    },
  );
  await app.listen();
}
bootstrap();
