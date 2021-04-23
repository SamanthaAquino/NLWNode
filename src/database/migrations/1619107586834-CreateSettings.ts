import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSettings1619107586834 implements MigrationInterface {

    //npm run typeorm migration:run
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "settings",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "username",
                        type: "varchar",
                    },
                    {
                        name: "chat",
                        type: "boolean",
                        default: true
                    },
                    {
                        // Quando atualiza um dado, a data é salva automaticamente
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        // Quando salva um dado, a data e salva automaticamente
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ]
            })
        )
    }

    //npm run typeorm migration:revert
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("settings");
    }

}
