import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AnalyticsService } from '../analytics.service';
import { CompanyFilterQuery, GlobalFilterQuery, DateFilterQuery } from '../analytics.dto';

const route = 'company-profile';

@ApiTags('Analytics / Company Profile')
@Controller(route)
export class CompanyProfileController {
    constructor(private readonly analyticsService: AnalyticsService) {}

    @Get('main-metric')
    async mainMetric(@Query() companyFilter: CompanyFilterQuery, @Query() globalFilter: GlobalFilterQuery) {
        return this.analyticsService.query(`${route}/main-metric`, { ...companyFilter, ...globalFilter });
    }

    @Get('trend')
    async trend(
        @Query() companyFilter: CompanyFilterQuery,
        @Query() dateFilter: DateFilterQuery,
        @Query() globalFilter: GlobalFilterQuery,
    ) {
        return this.analyticsService.query(`${route}/trend`, {
            ...companyFilter,
            ...dateFilter,
            ...globalFilter,
        });
    }
}
