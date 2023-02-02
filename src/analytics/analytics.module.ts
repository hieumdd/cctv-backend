import { Module } from '@nestjs/common';

import { GoogleCloudModule } from '../google-cloud/google-cloud.module';
import { AnalyticsService } from './analytics.service';

import { DimensionController } from './dimension/dimension.controller';
import { Top24Controller } from './top-24/top-24.controller';
import { CompanyProfileController } from './company-profile/company-profile.controller';

@Module({
    imports: [GoogleCloudModule],
    providers: [AnalyticsService],
    controllers: [DimensionController, Top24Controller, CompanyProfileController],
})
export class AnalyticsModule {}
