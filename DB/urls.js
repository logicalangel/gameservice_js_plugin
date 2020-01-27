const Consts = require('../Utils/Consts');

module.exports = {
    "getObjects": (BucketID, Sort, Sortby, Limit, Skip, Owner) => Consts.endPoint + "/api/v1/bucket/" + BucketID + "/?" + (Sort ? "&sort=" + Sort : "") + (Sortby ? "&sortby=" + Sortby : "") + (Limit ? "&limit=" + Limit : "") + (Skip ? "&skip=" + Skip : "") + (Owner ? "&owner=" + Owner : ""),
    "getObject": (BucketID, ObjectID) => Consts.endPoint + "/api/v1/bucket/" + BucketID + "/" + ObjectID,
    "addObject": (BucketID) => Consts.endPoint + "/api/v1/bucket/" + BucketID,
    "editObject": (BucketID, ObjectID) => Consts.endPoint + "/api/v1/bucket/" + BucketID + "/" + ObjectID,
    "deleteObject": (BucketID, ObjectID) => Consts.endPoint + "/api/v1/bucket/" + BucketID + "/" + ObjectID,
    "deleteObjects": (BucketID) => Consts.endPoint + "/api/v1/bucket/" + BucketID
}