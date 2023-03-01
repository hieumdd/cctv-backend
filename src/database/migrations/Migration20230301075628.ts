import { Migration } from '@mikro-orm/migrations';

export class Migration20230301075628 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" add column "first_name" varchar(255) not null, add column "last_name" varchar(255) not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "user" drop column "first_name";');
    this.addSql('alter table "user" drop column "last_name";');
  }

}
