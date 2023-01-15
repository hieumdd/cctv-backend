import { Module } from '@nestjs/common';

import { GoogleCloudModule } from '../google-cloud/google-cloud.module';
import { AnalyticsService } from './analytics.service';

import { DimensionController } from './dimension/dimension.controller';
import { Top24Controller } from './top-24/top-24.controller';

@Module({
    imports: [GoogleCloudModule],
    providers: [AnalyticsService],
    controllers: [DimensionController, Top24Controller],
})
export class AnalyticsModule {}
