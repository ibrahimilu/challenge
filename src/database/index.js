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
        //Based on item value check items from itemsOfUserByUsername containing that item
        //Example for "tv" find all the names who have tv in the array

        //Get all the items from itemsOfUserByUsername and iterate over the properties
        //Get the value of each property which essentially the array and check if item is present in the array
        //If yes then push the key (name) to a new array

        const nameArray = [];
        const returnObject = {};
        //Checking if item is undefined and returning blank object in that case
        if (!item) {
            return returnObject;
        }
        const allUsersWithItems = db.itemsOfUserByUsername;
        for (const name in allUsersWithItems) {
            if (allUsersWithItems.hasOwnProperty(name)
                && allUsersWithItems[name].includes(item)) {
                nameArray.push(name);
            }
        }
        // console.log("users with item " + nameArray);
        //Iterate nameArray and create a object (map) of ages using userById object
        const userInfoArray = _.map(db.usersById, userInfo => userInfo);
        nameArray.forEach(name => {
            // console.log("Name in nameArray " + name);
            userInfoArray.forEach(userInfo => {
                //Check if the age key is present in the return object. if yes then increment the count by 1
                //If no then insert the age key to the object with initial count as 1
                if (userInfo.username === name) {
                    if (returnObject[userInfo.age]) {
                        returnObject[userInfo.age] = returnObject[userInfo.age] + 1;
                    } else {
                        returnObject[userInfo.age] = 1;
                    }
                }
            })
        })

        return returnObject;
    }
    return mockDBCall(dataAccessMethod);
}

module.exports = {
    getUsers,
    getListOfAgesOfUsersWith,
    getItems
};
