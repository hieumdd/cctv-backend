import { Type } from 'class-transformer';
import { IsDateString, IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

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

enum RankColumn {
    rank = 'rank',
    rank_li = 'rank_li',
    rank_ig = 'rank_ig',
    rank_yt = 'rank_yt',
    rank_tw = 'rank_tw',
    rank_fb = 'rank_fb',
    rank_total_followers = 'rank_total_followers',
    rank_ccs = 'rank_ccs',
}

export class RankFilterQuery {
    @IsEnum(RankColumn)
    rankColumn: RankColumn;

    @IsNumber()
    @Type(() => Number)
    rankThreshold: number;
}
