import { forwardRef, Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { EnrollmentModule } from 'src/enrollment/enrollment.module';

@Module({
  controllers: [NotificationController],
  providers: [NotificationService],
  imports:[forwardRef(()=>EnrollmentModule)],
  exports:[NotificationService]

})
export class NotificationModule {}
