import { MigrationInterface, QueryRunner } from "typeorm";

export class AtualizadedMigration1671585348125 implements MigrationInterface {
  name = "AtualizadedMigration1671585348125";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "properties" DROP CONSTRAINT "FK_ce81f574ce994f8963eafae0a3f"`
    );
    await queryRunner.query(
      `ALTER TABLE "properties" DROP COLUMN "scheduleUserPropertyId"`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "properties" ADD "scheduleUserPropertyId" uuid`
    );
    await queryRunner.query(
      `ALTER TABLE "properties" ADD CONSTRAINT "FK_ce81f574ce994f8963eafae0a3f" FOREIGN KEY ("scheduleUserPropertyId") REFERENCES "schedules_users_properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }
}
