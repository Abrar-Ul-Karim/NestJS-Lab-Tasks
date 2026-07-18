import { Type } from "class-transformer";
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Min } from "class-validator";

export class CreateProductDto {


    @IsString()
    @IsNotEmpty()
    name: string;


    @IsString()
    @IsOptional()
    description?: string;


    @IsNumber()
    @Type(()=>Number)
    @IsPositive()
    price: number;


    @IsNumber()
    @IsOptional()
    @Min(0)
    @Type(()=>Number)
    stock?: number;

    @IsString()
    @IsNotEmpty()
    category: string;


    @IsBoolean()
    @IsOptional()
    isActive?: boolean;


}
