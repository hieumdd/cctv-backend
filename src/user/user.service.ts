import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/core';
import { EntityManager } from '@mikro-orm/postgresql';

import { User } from './user.entity';
import { SignUpDto } from './user.dto';

@Injectable()
export class UserService {
    constructor(
        readonly em: EntityManager,

        @InjectRepository(User)
        private userRepository: EntityRepository<User>,
    ) {}

    async findOneByEmail(email: string) {
        return this.userRepository.findOne({ email });
    }

    findOne(id: number) {
        return this.userRepository.findOneOrFail({ id });
    }

    async create(authDto: SignUpDto) {
        const user = this.userRepository.create(authDto);
        await this.userRepository.persistAndFlush(user);
        return user;
    }
}
