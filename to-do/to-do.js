const fs = require('fs');

let listToDo = [];

const saveDB = () => {

    let data = JSON.stringify(listToDo);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw err;
    });
};


const loadDB = () => {

    try {
        listToDo = require('../db/data.json');
    } catch (error) {
        listToDo = [];
    }
};


const crear = (description) => {
    
    loadDB();
    let toDo = {
        description,
        complete: false
    };

    listToDo.push(toDo);

    saveDB();

    return toDo;
};

const getList = () => {
   
    loadDB();
    return listToDo;
};

const update = (description, complete) => {
   
    loadDB();
    let index = listToDo.findIndex(task => {
        return task.description === description;
    });
    if(index >=0){
        listToDo[index].complete = complete;
        saveDB();
        return true;
    } else {
        return false;
    }
};

const deleteDB = (description) => {
    loadDB();
    let index = listToDo.findIndex(task => {
        return task.description === description;
    });
    listToDo.splice(index,1);
    saveDB();
    return listToDo;
};

module.exports = {
    crear,
    getList,
    update,
    deleteDB
}