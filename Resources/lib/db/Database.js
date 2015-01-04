
/**
 * Database wraper 
 */
var Database = function(){
    /**
     * @var Titanium.Database.DB
     */
    var self = this;
    var resultSet = []; 
	var db = Ti.Database.install("db/othaimmarkets.sqlite", 'othaim');
	//db.file.remoteBackup = false;
	var DB_NAME = 'othaim';
	var getDb = function(){
		db =  Ti.Database.open(DB_NAME);
	};
	
	this.salem = function(){
	    
	};
	
};

Database.prototype.execute = function(query){
    
};
Database.prototype.fetchAll = function(result){
    
};
Database.prototype.fetchRow = function(result){
    
};
Database.prototype.fetchOne = function(result){
    
};
Database.prototype.insert = function(data){
    
};
Database.prototype.update = function(data, where){
    
};
exports.Database = Database;


