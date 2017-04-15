import {Connection, createConnection, ObjectLiteral, Repository} from 'typeorm';
import * as UserManager from './managers/UserManager';
import {User} from './entity/User';
/**
 * Created by Lukas on 14.04.2017.
 */

module SQLConnection {

    export async function doconnection(): Promise<Connection> {
        return createConnection({
            driver: {
                type: 'mysql',
                host: process.env.HOST,
                port: process.env.PORT,
                username: process.env.USERNAME,
                password: process.env.PASSWORD,
                database: process.env.DATABASE
            },
            entities: [
                __dirname + '/entity/*'
            ],
            autoSchemaSync: true,
        });
    }
}


export = SQLConnection;
