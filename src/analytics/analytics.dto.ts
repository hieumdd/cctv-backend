import { IsDateString, IsEnum, IsOptional, IsString } from 'class-validator';

export class GlobalFilterQuery {
    @IsString()
    @IsOptional()
    div?: string;

    @IsString()
    @IsOptional()
    reg?: string;

    @IsString()
    @IsOptional()
    st?: string;

    @IsString()
    @IsOptional()
    symbol?: string;
}

export class CompanyFilterQuery {
    @IsString()
    @IsOptional()
    companyName?: string;
}

export class DateFilterQuery {
    @IsDateString()
    start: string;

    @IsDateString()
    end: string;
}

enum DateLevel {
    day = 'day',
    week = 'week',
    month = 'month',
}

export class DateLevelQuery {
    @IsEnum(DateLevel)
    level: DateLevel;
}
