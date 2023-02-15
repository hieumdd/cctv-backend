import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AnalyticsService } from '../analytics.service';
import { CompanyFilterQuery, CppFilterQuery, GlobalFilterQuery, RankFilterQuery } from '../analytics.dto';

const route = 'social-profile';

@ApiTags('Analytics / Social Profile')
@Controller(route)
export class SocialProfileController {
    constructor(private readonly analyticsService: AnalyticsService) {}

    @Get('gainer-and-loser')
    async gainerAndLoser(
        @Query() companyFilter: CompanyFilterQuery,
        @Query() globalFilter: GlobalFilterQuery,
        @Query() rankFilter: RankFilterQuery,
    ) {
        return this.analyticsService.query(`${route}/gainer-and-loser`, {
            ...companyFilter,
            ...globalFilter,
            ...rankFilter,
        });
    }

    @Get('loser-profile')
    async loserProfile(
        @Query() companyFilter: CompanyFilterQuery,
        @Query() cppFilter: CppFilterQuery,
        @Query() globalFilter: GlobalFilterQuery,
        @Query() rankFilter: RankFilterQuery,
    ) {
        return this.analyticsService.query(`${route}/loser-profile`, {
            ...companyFilter,
            ...cppFilter,
            ...globalFilter,
            ...rankFilter,
        });
    }
}
