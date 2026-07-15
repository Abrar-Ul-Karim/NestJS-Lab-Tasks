import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {
    constructor(private readonly courseService:CourseService){}

    @Get()
    getAllCourses() {
        
       return this.courseService.getAllCourses();
    }

    @Get(':id')
    getAllCourseByID(@Param('id') id:string){
       return  this.courseService.getCourseByID(id)
    }

    @Post()
    createCourse(@Body() courseInfo:{name:string,code:string} ){
        return this.courseService.createCourse(courseInfo.name,courseInfo.code);
    }

}
