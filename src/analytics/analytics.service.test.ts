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
        it('top-24/top-3-ccr', async () => {
            return analyticsService.query('top-24/top-3-ccr', {}).then((res) => {
                expect(res).toBeTruthy();
            });
        });
        it('top-24/side-table', async () => {
            return analyticsService
                .query('top-24/side-table', {
                    companyName: 'PCL CONSTRUCTION ENTERPRISES, INC.',
                })
                .then((res) => {
                    expect(res).toBeTruthy();
                });
        });
        it('top-24/trend', async () => {
            const options = {
                level: 'week',
                start: '2022-01-01',
                end: '2022-02-01',
            };
            return analyticsService.query('top-24/trend', options).then((res) => {
                expect(res).toBeTruthy();
            });
        });
        it('top-24/ticker-query', async () => {
            return analyticsService.query('top-24/ticker-query').then((res) => {
                expect(res).toBeTruthy();
            });
        });
        it('top-24/main-table', async () => {
            return analyticsService.query('top-24/main-table', { div: 'ESC' }).then((res) => {
                expect(res).toBeTruthy();
            });
        });
    });

    describe('company-profile', () => {
        it('company-profile/main-metric', async () => {
            return analyticsService.query('company-profile/main-metric', {}).then((res) => {
                expect(res).toBeTruthy();
            });
        });

        it('company-profile/trend', async () => {
            const options = {
                start: '2022-01-01',
                end: '2022-02-01',
            };

            return analyticsService.query('company-profile/trend', options).then((res) => {
                expect(res).toBeTruthy();
            });
        });
    });
});
