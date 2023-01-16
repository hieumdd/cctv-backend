import { IsDateString } from 'class-validator';

export class GlobalFilterQueryDto {
    companyName?: string;
    div?: string;
    hq?: string;
    reg?: string;
    st?: string;
    symbol?: string;
    type?: string;
}

export class DateFilterQueryDto {
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

export class DateLevelQueryDto {
    level: DateLevel;
}
