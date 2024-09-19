import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableItems1726712512161 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'items',
            columns: [
              {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'uuid',
              },
              {
                name: 'name',
                type: 'varchar',
              },
              {
                name: 'quantity',
                type: 'float',
              },
              {
                name: 'quantityUnits',
                type: 'enum',
                enum: ['USER_REGULAR', 'USER_ADMINISTRATOR'],
                isNullable: true,
              },
              {
                name: 'created_at',
                type: 'timestamp',
                default: 'CURRENT_TIMESTAMP',
              },
              {
                name: 'updated_at',
                type: 'timestamp',
                default: 'CURRENT_TIMESTAMP',
                onUpdate: 'CURRENT_TIMESTAMP',
              },
            ],
          }),
        );
      }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
