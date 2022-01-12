'use strict';
const mockDBCalls = require('../database/index.js');

const getListOfAgesOfUsersWithHandler = async (request, response) => {
    try {
        /*
         * Remove itemToLookup hardcoded and handle dynamic
         */
        // console.log("itemToLookup " + itemToLookup);
        // const itemToLookup = 'carrot';
        const itemToLookup = request.params.item;
        const data = await mockDBCalls.getListOfAgesOfUsersWith(itemToLookup);
        return response.status(200).send(JSON.stringify(data));
    } catch (error) {
        return response.status(500).send(error);
    }
};

module.exports = (app) => {
    app.get('/users/age/:item', getListOfAgesOfUsersWithHandler);
};
