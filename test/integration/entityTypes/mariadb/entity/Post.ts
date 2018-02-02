import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("Post")
export class Post {

    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column("int")
    int: number;

    @Column("tinyint")
    tinyint: number;

    @Column("smallint")
    smallint: number;

    @Column("mediumint")
    mediumint: number;

    @Column("bigint")
    bigint: number;

    @Column("float")
    float: number;

    @Column("double")
    double: number;

    @Column("decimal")
    decimal: number;

    @Column("date")
    date: string;

    @Column("datetime")
    datetime: Date;

    @Column("timestamp")
    timestamp: Date;

    @Column("time")
    time: string;

    @Column("year")
    year: number;

    @Column("char")
    char: string;

    @Column("varchar")
    varchar: string;

    @Column("blob")
    blob: Buffer;

    @Column("text")
    text: string;

    @Column("tinyblob")
    tinyblob: Buffer;

    @Column("tinytext")
    tinytext: string;

    @Column("mediumblob")
    mediumblob: Buffer;

    @Column("mediumtext")
    mediumtext: string;

    @Column("longblob")
    longblob: Buffer;

    @Column("longtext")
    longtext: string;

    @Column("enum", { enum: ["A", "B", "C"] })
    enum: string;

    // @Column("enum", { enum: FruitEnum })
    // classEnum1: FruitEnum;

    //MariaDb type for Json - LONGTEXT
    // @Column("json")
    // json: Object;

    // @Column("simple-array")
    // simpleArray: string[];

}
