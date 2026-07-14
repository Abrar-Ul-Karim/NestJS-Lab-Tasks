import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreatCourseDto {

    @IsString()
    @IsNotEmpty()
    name: string;


    @IsString()
    @IsNotEmpty()
    code: string;

    @IsString()
    @IsNotEmpty()
    instructor: string;

    @IsNotEmpty()
    @IsNumber()
    @MinLength(1)
    @MaxLength(6)
    @Type(() => Number)
    credits: number;



    @IsString()
    @IsOptional()
    description?: string;
}

