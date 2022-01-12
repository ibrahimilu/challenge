'use strict';
const _ = require('lodash');
const db = require('./db.js');


// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataAccessMethod());
        }, 500);
    });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
    const dataAccessMethod = () => _.map(db.usersById, userInfo => userInfo)
    return mockDBCall(dataAccessMethod);
};

const getItems = () => {
    const dataAccessMethod = () => db.allItems;
    return mockDBCall(dataAccessMethod);
}

const getListOfAgesOfUsersWith = (item) => {
    const dataAccessMethod = () => {
        // console.log("item received is " + item);
        /*
         * Find item value in itemsOfUserByUsername.
         * Iterate items over itemsOfUserByUsername and get value.
         * If item exists push the key (name) to a new array
         */
        const userNames = [];
        const resultObj = {};
        /*
         * Set to default if no item.
         */
        if(!item) {
            return resultObj;
        }
        const allUsers = db.itemsOfUserByUsername;
        for(const name in allUsers) {
            if(allUsers.hasOwnProperty(name)
                && allUsers[name].includes(item)) {
                userNames.push(name);
            }
        }

        // console.log("users with item " + userNames);
        /*
         * Loop through userNames and get userInfo
         */
        const userInfo = _.map(db.usersById, userInfo => userInfo);

        userNames.forEach(name => {
            userInfo.forEach(user => {
                // If key exists increment the count else set to 1
                if(user.username === name) {
                    if(resultObj[user.age]) {
                        resultObj[user.age] += 1;
                    } else{
                        resultObj[user.age] = 1;
                    }
                }
            })
        })

        return resultObj;
    }
    return mockDBCall(dataAccessMethod);
}

module.exports = {
    getUsers,
    getListOfAgesOfUsersWith,
    getItems
};
