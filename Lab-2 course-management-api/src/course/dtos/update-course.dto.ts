import { PartialType } from "@nestjs/mapped-types";
import { CreatCourseDto} from "./create-course.dto";

export class UpdateCourseDto extends PartialType(CreatCourseDto){

}
