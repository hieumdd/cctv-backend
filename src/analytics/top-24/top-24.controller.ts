import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AnalyticsService } from '../analytics.service';
import { CompanyFilterQuery, GlobalFilterQuery, DateFilterQuery, DateLevelQuery } from '../analytics.dto';

const route = 'top-24';

@ApiTags('Analytics / Top 24')
@Controller(route)
export class Top24Controller {
    constructor(private readonly analyticsService: AnalyticsService) {}

    @Get('top-3-ccr')
    async top3CCR(@Query() globalFilter: GlobalFilterQuery) {
        return this.analyticsService.query(`${route}/top-3-ccr`, globalFilter);
    }

    @Get('side-table')
    async sideTable(@Query() companyFilter: CompanyFilterQuery, @Query() globalFilter: GlobalFilterQuery) {
        return this.analyticsService.query(`${route}/side-table`, { ...companyFilter, ...globalFilter });
    }

    @Get('trend')
    async trend(
        @Query() dateLevel: DateLevelQuery,
        @Query() dateFilter: DateFilterQuery,
        @Query() globalFilter: GlobalFilterQuery,
    ) {
        return this.analyticsService.query(`${route}/trend`, {
            ...dateLevel,
            ...dateFilter,
            ...globalFilter,
        });
    }

    @Get('ticker-query')
    async tickerQuery() {
        return this.analyticsService.query(`${route}/ticker-query`);
    }

    @Get('main-table')
    async mainTable(@Query() globalFilter: GlobalFilterQuery) {
        return this.analyticsService.query(`${route}/main-table`, globalFilter);
    }
}
