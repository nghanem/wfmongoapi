var express     =   require("express");
var app         =   express();
var bodyParser  =   require("body-parser");
var router      =   express.Router();
var port = process.env.PORT || 7000;

var mongoose    =   require("mongoose");

var mongoSchema =   mongoose.Schema;

var workflowSchema  = mongoose.Schema(
    {
        "workflow_requester" : String,
        "workflow_id" : Number,
        "app_name" : String,
        "master" : {
            "workflow_completed" : Boolean
        },
        "service_account" : {
            "status_code" : Number,
            "message" : String,
            "workflow_completed" : Boolean
        },
        "apigee" : {
            "valid_org": String,
            "workflow_completed": Boolean,
            "admin_added_success":[{
            }],
            "user_added_success":[

            ],
        },
        "pcf" : {
            "workflow_completed": Boolean,
            "dev": {
                "phx" : {
                    "ping_token_success": Number,
                    "org":{
                        "existing_org":{
                            "org_name": String,
                            "message": {
                                "total_results": Number,
                                "total_pages": Number,
                                "prev_url": String,
                                "next_url": String,
                                "resources": [
                                    {
                                        "metadata": {
                                            "guid": String,
                                            "url": String,
                                            "created_at": String,
                                            "updated_at": String
                                        },
                                        "entity": {
                                            "name": String,
                                            "billing_enabled":Boolean,
                                            "quota_definition_guid": String,
                                            "status": String,
                                            "quota_definition_url": String,
                                            "spaces_url": String,
                                            "domains_url": String,
                                            "private_domains_url": String,
                                            "users_url": String,
                                            "managers_url": String,
                                            "billing_managers_url": String,
                                            "auditors_url": String,
                                            "app_events_url": String,
                                            "space_quota_definitions_url": String
                                        }
                                    }
                                ]
                            }
                        },
                        "user_added_success":[
                            {"user":String,
                                "body":{
                                    "metadata": {
                                        "guid": String,
                                        "url": String,
                                        "created_at": String,
                                        "updated_at":String
                                    },
                                    "entity": {
                                        "name": String,
                                        "billing_enabled":Boolean,
                                        "quota_definition_guid": String,
                                        "status": String,
                                        "quota_definition_url": String,
                                        "spaces_url": String,
                                        "domains_url": String,
                                        "private_domains_url": String,
                                        "users_url": String,
                                        "managers_url": String,
                                        "billing_managers_url": String,
                                        "auditors_url": String,
                                        "app_events_url": String,
                                        "space_quota_definitions_url": String
                                    }

                                }}
                        ]
                    },
                    "space" :{
                        "new_space":[
                            {"space_name": String,
                                "message":
                                {
                                    "metadata": {
                                        "guid": String,
                                        "url": String,
                                        "created_at": String,
                                        "updated_at":String
                                    },
                                    "entity": {
                                        "name": String,
                                        "organization_guid": String,
                                        "space_quota_definition_guid": String,
                                        "allow_ssh": Boolean,
                                        "organization_url": String,
                                        "developers_url": String,
                                        "managers_url": String,
                                        "auditors_url": String,
                                        "apps_url": String,
                                        "routes_url": String,
                                        "domains_url": String,
                                        "service_instances_url": String,
                                        "app_events_url": String,
                                        "events_url": String,
                                        "security_groups_url": String
                                    }
                                }
                            }],
                        "space_user_added_success":{

                        }
                    }

                }
            },
            "prod":{
                "phx" : {
                    "ping_token_success": Number,
                    "org":{
                        "existing_org":{
                            "org_name": String,
                            "message": {
                                "total_results": Number,
                                "total_pages": Number,
                                "prev_url": String,
                                "next_url": String,
                                "resources": [
                                    {
                                        "metadata": {
                                            "guid": String,
                                            "url": String,
                                            "created_at": String,
                                            "updated_at": String
                                        },
                                        "entity": {
                                            "name": String,
                                            "billing_enabled":Boolean,
                                            "quota_definition_guid": String,
                                            "status": String,
                                            "quota_definition_url": String,
                                            "spaces_url": String,
                                            "domains_url": String,
                                            "private_domains_url": String,
                                            "users_url": String,
                                            "managers_url": String,
                                            "billing_managers_url": String,
                                            "auditors_url": String,
                                            "app_events_url": String,
                                            "space_quota_definitions_url": String
                                        }
                                    }
                                ]
                            }
                        },
                        "user_added_success":[
                            {"user":String,
                                "body":{
                                    "metadata": {
                                        "guid": String,
                                        "url": String,
                                        "created_at": String,
                                        "updated_at":String
                                    },
                                    "entity": {
                                        "name": String,
                                        "billing_enabled":Boolean,
                                        "quota_definition_guid": String,
                                        "status": String,
                                        "quota_definition_url": String,
                                        "spaces_url": String,
                                        "domains_url": String,
                                        "private_domains_url": String,
                                        "users_url": String,
                                        "managers_url": String,
                                        "billing_managers_url": String,
                                        "auditors_url": String,
                                        "app_events_url": String,
                                        "space_quota_definitions_url": String
                                    }

                                }}
                        ]
                    },
                    "space" :{
                        "new_space":[
                            {"space_name": String,
                                "message":
                                {
                                    "metadata": {
                                        "guid": String,
                                        "url": String,
                                        "created_at": String,
                                        "updated_at":String
                                    },
                                    "entity": {
                                        "name": String,
                                        "organization_guid": String,
                                        "space_quota_definition_guid": String,
                                        "allow_ssh": Boolean,
                                        "organization_url": String,
                                        "developers_url": String,
                                        "managers_url": String,
                                        "auditors_url": String,
                                        "apps_url": String,
                                        "routes_url": String,
                                        "domains_url": String,
                                        "service_instances_url": String,
                                        "app_events_url": String,
                                        "events_url": String,
                                        "security_groups_url": String
                                    }
                                }
                            }],
                        "space_user_added_success":{

                        }
                    }

                }
            }
        },
    }
);

var connectToMongo = function(req, res, query1, query2) {
    var url_path = req.body.url_path;
    var collection = req.body.collection_name;


    if (url_path== null || url_path.length == 0){
        throw "url_path is empty";
    }

    if (collection == null || collection.length == 0){
        throw "collection_name is empty";
    }
    var response = {};
    mongoose.connect('mongodb://' + url_path, function(err) {

        if (err) throw err;
    });
    workflowSchema.set('collection', collection, function(err) {
        if (err) throw err;
    });

    var mongoOp = mongoose.model(collection ,workflowSchema);

    mongoOp.find(query1, query2,function(err,data){

        if(err) {
            response = {"error" : true,"message" : "Error fetching data"};
        } else {

            response = data;
        }
        mongoose.connection.close(function () {});
        res.json(response);

    });
}

var connectToMongoOne = function(req, res, query) {
    var url_path = req.body.url_path;
    var collection = req.body.collection_name;

    if (url_path == null || url_path.length == 0){
        throw "url_path is empty";
    }
    if (collection == null || collection.length == 0){
        throw "collection_name is empty";
    }
    var response = {};
    mongoose.connect('mongodb://'+url_path,function(err) {
        if (err) throw err;
    });
    workflowSchema.set('collection', collection ,function(err) {
        if (err) throw err;
    });

    var mongoOp = mongoose.model(collection ,workflowSchema);

    mongoOp.findOne(query,function(err,data){

        if(err) {
            response = {"error" : true,"message" : "Error fetching data"};
        } else {

            response = data;
        }
        mongoose.connection.close(function () {});
        res.json(response);

    });
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));

router.get("/",function(req,res){
    res.json({"error" : false,"message" : "Hello mongoDB API"});
});

router.route("/workflow/workflows")
    .post(function(req,res){
        console.log("/workflow/workflows");
        var query1 = {};
        var query2 = {"workflow_id":1,"app_name":1, "workflow_requester": 1, "_id":0};

        connectToMongo(req, res, query1, query2);
    });

router.route("/workflow/appsnames")
    .post(function(req,res){
        console.log("/workflow/appsnames");
        var query1 = {};
        var query2 = {"app_name":1, "_id":0};

        connectToMongo(req, res, query1, query2);
    });

router.route("/workflow/:id/completed")
    .post(function(req,res){
        console.log("/workflow/"+req.params.id+"/completed");
        var query1 = {"workflow_id":req.params.id};
        var query2 ={"app_name":1, "_id":0 ,"master.workflow_completed": 1, "service_account.workflow_completed":1 , "apigee.workflow_completed":1 ,"pcf.workflow_completed":1};

        connectToMongo(req, res, query1, query2);
    });

router.route("/workflow/workflowid/:id")
    .post(function(req,res){
        console.log("/workflow/workflowid/"+req.params.id);
        var query = { "workflow_id" : req.params.id};
        connectToMongoOne(req,res, query);
    });

router.route("/workflow/appname/:id")
    .post(function(req,res){
        console.log("/workflow/appname/"+req.params.id);
        var query = { "app_name" : req.params.id};

        connectToMongoOne(req,res, query);
    });

app.use('/',router);

app.listen(port);
console.log("Listening to PORT "+port);
