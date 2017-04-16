/**
 *
 * This file is part of the Amethyst Project. Modification is on your own risk.
 *
 */
'use strict';

import {Connection, createConnection} from 'typeorm';


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
