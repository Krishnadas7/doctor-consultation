import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailModule } from './modules/mail/mail.module';
import { MongooseConfigModule } from './dbconfig/mongoose.config';
import { LoggerMiddleware } from './common/middlewares/logger/logger.middleware';
import { BookingsModule } from './modules/bookings/bookings.module';
import { SlotsModule } from './modules/slots/slots.module';
import { PrescriptionModule } from './modules/prescription/prescription.module';
import { ReviewModule } from './modules/review/review.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseConfigModule,
    UsersModule,
    AuthModule,
    MailModule,
    BookingsModule,
    SlotsModule,
    PrescriptionModule,
    ReviewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
  
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
