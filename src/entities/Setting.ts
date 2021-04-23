import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from "typeorm"

// Gera numeros aleatorios (v4)
import { v4 as uuid } from "uuid"

@Entity("settings")

export class Setting {

    @PrimaryColumn()
    id: String;

    @Column()
    username: string;

    @Column()
    chat: boolean;

    @UpdateDateColumn()
    updated_at: Date;

    @CreateDateColumn()
    created_at: Date;

    //verifica se o id esta preenchido, senão cria
    constructor() {
        if (!this.id) {
            this.id = uuid()
        }

    }
}