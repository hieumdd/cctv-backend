import { Test, TestingModule } from '@nestjs/testing';

import { AnalyticsModule } from './analytics.module';
import { AnalyticsService } from './analytics.service';

jest.setTimeout(60_000);

describe('analytics.service', () => {
    let moduleRef: TestingModule;
    let analyticsService: AnalyticsService;

    beforeAll(async () => {
        moduleRef = await Test.createTestingModule({
            imports: [AnalyticsModule],
        }).compile();

        analyticsService = moduleRef.get(AnalyticsService);
    });

    afterAll(async () => {
        await moduleRef.close();
    });

    describe('top-24', () => {
        it.each(['top-24/top-3-ccr'])('%p', async (route) => {
            console.log(route);
            return analyticsService.query(route, {}).then((res) => {
                console.log(JSON.stringify(res.data.slice(0, 5)));
                expect(res).toBeTruthy();
            });
        });
    });
})
