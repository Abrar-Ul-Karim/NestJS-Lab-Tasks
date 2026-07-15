import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CourseService } from 'src/course/course.service';
import { NotificationService } from 'src/notification/notification.service';

@Injectable()
export class EnrollmentService {
    constructor(private readonly courseService:CourseService,
        @Inject(forwardRef(()=>NotificationService)) 
        private notificationService:NotificationService){}


    enroleStudent(studentName:string,courseId: string){
        const course=this.courseService.getCourseByID(courseId);

        return {
            message:"Student enrolled successfully",
            student:studentName,
            course
        }
    }

    getEnrollments() {

    return { 
        message: 'All enrollments fetched', 
        data: [] };
    }
  
}
