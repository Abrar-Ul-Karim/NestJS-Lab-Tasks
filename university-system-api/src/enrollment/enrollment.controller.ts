import { Body, Controller, Get, Post } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';

@Controller('enrollment')
export class EnrollmentController {

    constructor(private readonly enrollmentService: EnrollmentService) { }

    @Get()
    getEnrollments() {
        return this.enrollmentService.getEnrollments();

    }

    @Post()
    enrollStudent(@Body() stuInfo:{studentName:string,courseID:string}){

        return this.enrollmentService.enroleStudent(stuInfo.studentName,stuInfo.courseID);

    }





}
