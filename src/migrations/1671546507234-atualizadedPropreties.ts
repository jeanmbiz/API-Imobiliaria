import { MigrationInterface, QueryRunner } from "typeorm";

export class atualizadedPropreties1671546507234 implements MigrationInterface {
  name = "atualizadedPropreties1671546507234";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "properties" DROP CONSTRAINT "FK_7ccdcbf4e4ffdc275fb1eb32957"`
    );
    await queryRunner.query(
      `ALTER TABLE "properties" RENAME COLUMN "adressIdId" TO "adressId"`
    );
    await queryRunner.query(
      `ALTER TABLE "properties" ADD CONSTRAINT "FK_e9058266ab1b092d636b1868956" FOREIGN KEY ("adressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "properties" DROP CONSTRAINT "FK_e9058266ab1b092d636b1868956"`
    );
    await queryRunner.query(
      `ALTER TABLE "properties" RENAME COLUMN "adressId" TO "adressIdId"`
    );
    await queryRunner.query(
      `ALTER TABLE "properties" ADD CONSTRAINT "FK_7ccdcbf4e4ffdc275fb1eb32957" FOREIGN KEY ("adressIdId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }
}
