import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString, Max, Min } from "class-validator";

export class UpdateCvDto {
    @IsString()
    @IsOptional()
    lastname: string;

    @IsOptional()
    @IsString()
    firstname: string;

    @IsOptional()
    @Type(() => Number )
    @IsNumber()
    @Min(15)
    @Max(65)
    age: number;

    @IsOptional()
    @Type(() => Number )
    @IsNumber()
    cin: number;

    @IsOptional()
    @IsString()
    job: string;

    @IsOptional()
    @IsString()
    path: string;
 }