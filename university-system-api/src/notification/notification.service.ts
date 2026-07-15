import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { EnrollmentService } from 'src/enrollment/enrollment.service';

@Injectable()
export class NotificationService {

    constructor(
    @Inject(forwardRef(()=>EnrollmentService)) 
    private  enrollMentService:EnrollmentService){}

    sendNotification(studentName:string,message:string){
        return{
            message:message,
            name:studentName,
        }

    }

    checkEnrollmentAndNotify(studentName: string, courseId: string){
        const result= this.enrollMentService.getEnrollments();

        return{
            student:studentName,
            courseId:courseId,
            result
        }
         
    }
    
  
}
