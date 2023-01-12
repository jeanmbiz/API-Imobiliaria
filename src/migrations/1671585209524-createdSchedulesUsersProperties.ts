import { MigrationInterface, QueryRunner } from "typeorm";

export class createdSchedulesUsersProperties1671585209524
  implements MigrationInterface
{
  name = "createdSchedulesUsersProperties1671585209524";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "schedules_users_properties" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" date NOT NULL, "hour" TIME NOT NULL, "userId" uuid, "propertyId" uuid, CONSTRAINT "PK_751450246dee9abc82a47dabc4c" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "properties" ADD "scheduleUserPropertyId" uuid`
    );
    await queryRunner.query(
      `ALTER TABLE "schedules_users_properties" ADD CONSTRAINT "FK_6b07764ec82685efb66e5629845" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "schedules_users_properties" ADD CONSTRAINT "FK_3193709d61be5a23d570547c964" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "properties" ADD CONSTRAINT "FK_ce81f574ce994f8963eafae0a3f" FOREIGN KEY ("scheduleUserPropertyId") REFERENCES "schedules_users_properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "properties" DROP CONSTRAINT "FK_ce81f574ce994f8963eafae0a3f"`
    );
    await queryRunner.query(
      `ALTER TABLE "schedules_users_properties" DROP CONSTRAINT "FK_3193709d61be5a23d570547c964"`
    );
    await queryRunner.query(
      `ALTER TABLE "schedules_users_properties" DROP CONSTRAINT "FK_6b07764ec82685efb66e5629845"`
    );
    await queryRunner.query(
      `ALTER TABLE "properties" DROP COLUMN "scheduleUserPropertyId"`
    );
    await queryRunner.query(`DROP TABLE "schedules_users_properties"`);
  }
}
