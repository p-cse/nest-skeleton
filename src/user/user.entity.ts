import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('character varying', { length: 255 })
    name: string;

    @Column('character varying', { length: 255 })
    email: string;

    @Column('character varying', { length: 255 })
    password: string;

    @Column('timestamp without time zone')
    created_at: Date;

    @Column('timestamp without time zone')
    updated_at: Date;

    @BeforeInsert()
    updateDates() {
        this.created_at = new Date();
        this.updated_at = new Date();
    }
}
