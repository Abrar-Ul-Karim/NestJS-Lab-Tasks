import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UseInterceptors, UploadedFile, BadRequestException } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreatCourseDto } from './dtos/create-course.dto';
import { UpdateCourseDto } from './dtos/update-course.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('course')
export class CourseController {

    constructor(private readonly courseService: CourseService) { }

    @Get()
    getAllCourses() {
        return this.courseService.getAllCourses();
    }

    @Get(':id')
    getCourseByID(@Param('id') id: string) {
        return this.courseService.getCourseByID(id);
    }

    @Post()
    createCourse(@Body() dto: CreatCourseDto) {

        return this.courseService.createCourse(dto);

    }

    @Put(':id')
    updateCourse(@Param('id') id: string, @Body() dto: UpdateCourseDto) {

        return this.courseService.updatePutCourse(id, dto);

    }

    @Patch(':id')
    patchCourse(@Param('id') id: string, @Body() dto: UpdateCourseDto) {

        return this.courseService.patchCourse(id, dto);

    }



    @Delete(':id')
    deleteCourse(@Param('id') id: string) {

        return this.courseService.deleteCourse(id);

    }


    //file
    @Post(':id/upload')
    @UseInterceptors(FileInterceptor('file',
        {
            storage: diskStorage({
                destination: './uploads',
                filename: (req, file, cb) => {
                    const fileName = Date.now() + '-' + file.originalname;
                    cb(null, fileName);
                }
            }),

            fileFilter: (req, file, cb) => {
                if (file.originalname.match(/^.*\.(jpg|jpeg|png|pdf)$/)) {
                    cb(null, true);
                } else {
                    cb(
                        new BadRequestException('শুধু jpg, jpeg, png, pdf allowed'),
                        false
                    );
                }
            },

            limits: {
                fileSize: 2 * 1024 * 1024  
            }
        }
    ))
    uploadCourseMaterial(@Param('id') id: string, @UploadedFile() file: Express.Multer.File) {

        if (!file) {
            throw new BadRequestException('File not exits');
        }
        return this.courseService.uploadCourseMaterial(id, file);
    }

}
