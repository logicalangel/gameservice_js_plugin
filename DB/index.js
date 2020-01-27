const axios = require('axios');
const urls = require('./urls');
const GateMan = require('../Utils/GateMan');
const Consts = require('../Utils/Consts');

module.exports = {
    getObject: async function (TableID, ObjectID) {
        if (!GateMan.isInGame()) return false;
        try {
            let db_r = await axios.get(urls.getObject(TableID, ObjectID), {
                headers: {
                    'x-access-token': Consts.gameToken
                }
            });
            return db_r.data;
        } catch (e) {
            console.error("onGetObject: " + e);
        }
    },
    getObjects: async function (TableID, Sort, Sortby, Limit, Skip, Owner) {
        if (!GateMan.isInGame()) return false;
        try {
            let db_r = await axios.get(urls.getObjects(TableID, Sort, Sortby, Limit, Skip, Owner), {
                headers: {
                    'x-access-token': Consts.gameToken
                }
            });
            return db_r.data;
        } catch (e) {
            console.error("onGetObjects: " + e);
        }
    },
    addObject: async function (TableID, Data) {
        if (!GateMan.isInGame()) return false;
        try {
            let db_r = await axios.post(urls.addObject(TableID), Data, {
                headers: {
                    'x-access-token': Consts.gameToken
                }
            });
            return db_r.data;
        } catch (e) {
            console.error("onAddObject: " + e);
        }
    },
    editObject: async function (TableID, ObjectID, Data) {
        if (!GateMan.isInGame()) return false;
        try {
            let db_r = await axios.put(urls.editObject(TableID, ObjectID), Data, {
                headers: {
                    'x-access-token': Consts.gameToken
                }
            });
            return db_r.data;
        } catch (e) {
            console.error("onEditObject: " + e);
        }
    },
    deleteObject: async function (TableID, ObjectID) {
        if (!GateMan.isInGame()) return false;
        try {
            let db_r = await axios.delete(urls.deleteObject(TableID, ObjectID), {
                headers: {
                    'x-access-token': Consts.gameToken
                }
            });
            return db_r.data;
        } catch (e) {
            console.error("onDeleteObject: " + e);
        }
    },
    deleteObjects: async function (TableID) {
        if (!GateMan.isInGame()) return false;
        try {
            let db_r = await axios.delete(urls.deleteObjects(TableID), {
                headers: {
                    'x-access-token': Consts.gameToken
                }
            });
            return db_r.data;
        } catch (e) {
            console.error("onDeleteObjects: " + e);
        }
    }
}