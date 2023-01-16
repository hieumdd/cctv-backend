import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AnalyticsService } from '../analytics.service';
import { GlobalFilterQueryDto, DateFilterQueryDto, DateLevelQueryDto } from '../analytics.dto';

const route = 'top-24';

@ApiTags('Analytics / Top 24')
@Controller(route)
export class Top24Controller {
    constructor(private readonly analyticsService: AnalyticsService) {}

    @Get('top-3-ccr')
    async top3CCR(@Query() dto: GlobalFilterQueryDto) {
        return this.analyticsService.query(`${route}/top-3-ccr`, dto);
    }

    @Get('side-table')
    async sideTable(@Query() dto: GlobalFilterQueryDto) {
        return this.analyticsService.query(`${route}/side-table`, dto);
    }

    @Get('trend')
    async trend(
        @Query() dateLevelDto: DateLevelQueryDto,
        @Query() dateFilterDto: DateFilterQueryDto,
        @Query() globalFilterDto: GlobalFilterQueryDto,
    ) {
        return this.analyticsService.query(`${route}/trend`, {
            ...dateLevelDto,
            ...dateFilterDto,
            ...globalFilterDto,
        });
    }
}
