var fs = require('fs');
var async = require('async');
var Table = require('cli-table');

module.exports = JsonTb;

function JsonTb(json_path) {
	var that = this;

	if(!json_path){
		console.error('You have to pass a path to your json file or API!');
		process.exit(1);
	}

	var load_json = this.load(json_path);
	var parse = JSON.parse(load_json);
	this.mkhead(parse);
	this.mkbody(parse, function(err, result) {
		that.whole(function(err_whole, table) {
			that.show(table);
		})
	});

}

// fetch data from file
JsonTb.prototype.load = function(path) {
	return fs.readFileSync(path, {encoding: 'UTF8'})
}

// take out the key in json and make it as head.
JsonTb.prototype.mkhead = function(obj) {
	
	var first = obj[0];
	this.head = Object.keys(first);
	return this.head

}

// make json data into table.
JsonTb.prototype.mkbody = function(obj, callback) {
	this.body = [];
	var that = this;

	async.each(obj, function(val, cb) {
		
		var each_arr = [];

		Object.keys(val).forEach(function(key) {
			each_arr.push(val[key]);
		})

		that.body.push(each_arr);

		cb();

	}, function(err) {
		if(err) {
			console.error(err);
		}else {
			callback(null, that.body);
		}
	})

}


// make a whole table
JsonTb.prototype.whole = function(callback) {
	var that = this;
	
	var table = new Table({
		head: that.head
	});

	async.each(that.body, function(item, cb) {
		table.push(item);
		cb();
	}, function(err) {
		if(err) {
			console.error(err);
		}else {
			callback(null, table)
		}
	})


}

JsonTb.prototype.show = function(table) {
	console.log(table.toString());
}
