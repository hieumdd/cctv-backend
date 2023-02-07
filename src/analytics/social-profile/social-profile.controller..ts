import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AnalyticsService } from '../analytics.service';
import { CompanyFilterQuery, GlobalFilterQuery } from '../analytics.dto';

const route = 'social-profile';

@ApiTags('Analytics / Social Profile')
@Controller(route)
export class SocialProfileController {
    constructor(private readonly analyticsService: AnalyticsService) {}

    @Get('gainer-and-loser')
    async mainMetric(@Query() companyFilter: CompanyFilterQuery, @Query() globalFilter: GlobalFilterQuery) {
        return this.analyticsService.query(`${route}/gainer-and-loser`, { ...companyFilter, ...globalFilter });
    }
}
