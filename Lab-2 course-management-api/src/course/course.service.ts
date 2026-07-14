import { Injectable } from '@nestjs/common';
import { CreatCourseDto } from './dtos/create-course.dto';
import { UpdateCourseDto } from './dtos/update-course.dto';
import { Express } from 'express';

@Injectable()
export class CourseService {

    getAllCourses() {
        return {
            message:"All courses fetched successfully",
            data:[]
        };
    }

    getCourseByID(id: string) {
        return{
            message:"Course fetched successfully",
            id:id,
        };
    }

    createCourse(dto:CreatCourseDto) {
        return {
            message:"Course created successfully",
            data:dto
        };
    }

    updatePutCourse(id:string,dto:UpdateCourseDto) {
        return{
            message:"Updated Successfully",
            id:id,
            data:dto,
        };
    }

    patchCourse(id: string,dto:UpdateCourseDto) {
        return{
            message:"Course patched successfully",
            id:id,
            updatedFiled: Object.keys(dto)
        };
    }

    deleteCourse(id: string) {
        return {
            message:"delated",
            id:id,
        };
    }

    uploadCourseMaterial(id:string, file: Express.Multer.File){

        return{
            message:"Updated Metarial",
            courseID:id,
            fileName:file.filename,
            path:file.path,
        }

    }

}

