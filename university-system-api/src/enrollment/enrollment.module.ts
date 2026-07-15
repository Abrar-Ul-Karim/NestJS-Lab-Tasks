import { forwardRef, Module } from '@nestjs/common';
import { EnrollmentController } from './enrollment.controller';
import { EnrollmentService } from './enrollment.service';
import { CourseModule } from 'src/course/course.module';
import { NotificationModule } from 'src/notification/notification.module';

@Module({
  controllers: [EnrollmentController],
  providers: [EnrollmentService],
  imports:[CourseModule,forwardRef(()=>NotificationModule)],
  exports:[EnrollmentService],

})
export class EnrollmentModule {}
