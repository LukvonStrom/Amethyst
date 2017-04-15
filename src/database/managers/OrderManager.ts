import {getEntityManager, Repository} from 'typeorm';
import {Order} from '../entity/Order';
import * as SQLConnection from '../SQLConnection';
/**
 * Created by Lukas on 14.04.2017.
 */

module OrderManager {

    function getOrderRepository(): Promise<Repository<Order>> {
        return new Promise((resolve, reject) => {
            SQLConnection.doconnection().then(connection => {
                resolve(getEntityManager().getRepository(Order));
            });
        });

    }
    export function insertOrder(order: Order): Promise<Order> {
        if (order.hasOwnProperty('user') && order.hasOwnProperty('product') && order.hasOwnProperty('status')) {
            return new Promise((resolve, reject) => {
                    getOrderRepository()
                        .then(repo => {
                            resolve(
                                repo
                                    .persist(order)
                            );
                        });

            });

        }
    }

    export function selectOrderbyId(id: number): Promise<Order> {
        return new Promise((resolve, reject) => {
            getOrderRepository()
                .then(repo => {
                    resolve(
                        repo
                            .findOneById(id)
                    );
                });
        });
    }

    export function selectOrders(): Promise<Order[]> {
        return new Promise((resolve, reject) => {
            getOrderRepository()
                .then(repo => {
                    resolve(
                        repo
                            .find({
                                alias: 'orders',
                                orderBy: {
                                    'orders.createdAt': 'DESC'
                                }
                            })
                    );
                });
        });
    }

    export function selectStatusbyOrderId(id: number) {
        return new Promise((resolve, reject) => {
            getOrderRepository()
                .then(repo => {
                    resolve(
                        repo
                            .findOneById(id, {
                                alias: 'order',
                                innerJoinAndSelect: {
                                    'status': 'order.status'
                                }
                            })
                    );
                });
        });
    }
}

export = OrderManager;
