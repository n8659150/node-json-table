var fs = require('fs');
var async = require('async');
var Table = require('cli-table');

module.exports = JsonTb;

function JsonTb(item, config, cb) {
	if(arguments.length == 2) {
		cb = config;
		config = null;
	}

	var that = this;
	config = config || {};

	if(!item){
		console.error('You have to pass a path to your json file or API or a json object!');
		process.exit(1);
	}

	if(item instanceof Object) {

		// making the head
		this.mkhead(item);

		// making the body
		this.mkbody(item, function(err, result) {
			if(err) throw new Error(err);
			that.whole(config, function(err_whole, table) {
				if(err) throw new Error(err_whole);
				that.table = table;
				cb(that)
			})
		});
	}else {
		var load_json = this.load(item);
		var parse = JSON.parse(load_json);
		this.mkhead(parse);
		this.mkbody(parse, function(err, result) {
			if(err) throw new Error(err);
			that.whole(config, function(err_whole, table) {
				if(err) throw new Error(err_whole);
				that.table = table
				cb(that)
			})
		});
	}

}

// fetch data from file
JsonTb.prototype.load = function(path) {
	return fs.readFileSync(path, {encoding: 'UTF8'})
}

// take out the key in json and make it as head.
JsonTb.prototype.mkhead = function(obj) {
	
	var first = obj[0] || obj;
	this.head = Object.keys(first);
	return this.head

}

// make json data into table.
JsonTb.prototype.mkbody = function(obj, callback) {
	this.body = [];
	var that = this;

	if (obj instanceof Array) {

		// an array
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
	} else {

		// an object
		var each_arr = [];

		Object.keys(obj).forEach(function(key) {
			each_arr.push(obj[key]);
		})

		that.body.push(each_arr);

		callback(null, that.body);
	}
}


// make a whole table
JsonTb.prototype.whole = function(config, callback) {
	var that = this;
	var table_obj = config
	table_obj.head = that.head;
	
	var table = new Table(table_obj);
	

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

JsonTb.prototype.show = function() {
	var table = this.table;
	console.log(table.toString());
}
