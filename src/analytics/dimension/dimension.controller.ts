import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AnalyticsService } from '../analytics.service';

const route = 'dimension';

@ApiTags('Analytics / Dimension')
@Controller(route)
export class DimensionController {
    constructor(private readonly analyticsService: AnalyticsService) {}

    @Get('company-name')
    async companyName() {
        return this.analyticsService.query(`${route}/company-name`);
    }

    @Get('div')
    async div() {
        return this.analyticsService.query(`${route}/div`);
    }

    @Get('hq')
    async hq() {
        return this.analyticsService.query(`${route}/hq`);
    }

    @Get('reg')
    async reg() {
        return this.analyticsService.query(`${route}/reg`);
    }

    @Get('st')
    async st() {
        return this.analyticsService.query(`${route}/st`);
    }

    @Get('symbol')
    async symbol() {
        return this.analyticsService.query(`${route}/symbol`);
    }

    @Get('type')
    async type() {
        return this.analyticsService.query(`${route}/type`);
    }
}
