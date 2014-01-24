
function json_tb(json_path) {
	this.head_str = '';
	this.body_str = '';
	var that = this;

	if(!json_path){
		console.error('You have to pass a path to your json file or API!');
	}

	var whole = this._fetch(json_path, function(err, whole) {
		that._show(id, whole);
	});

}

// fetch data from file
json_tb.prototype._fetch = function(path, cb) {
	this.data = '';
	var that = this;

}

// take out the key in json and make it as head.
json_tb.prototype._mkhead = function(obj, callback) {
	
	var first = obj[0];
	var that = this;
	var head_str = that.head_str;
	this.keys = Object.keys(first);

	async.each(this.keys, function(val, cb) {
		
		head_str += '<td>'
			 +  val
			 +  '</td>'
		cb();

	},function(err) {
		if(err) {
			console.error(err);
		} else {
			head_str = '<tr>' + head_str + '</tr>';
			callback(null, head_str);
		}
	})
}

// make json data into table.
json_tb.prototype._mkbody = function(obj, callback) {
	var that = this;
	var body_str = that.body_str;

	async.each(obj, function(val, cb) {

		body_str = body_str + '<tr>';	
	
		$.each(val, function(per_key, per_value){
			body_str += '<td>'
				 +  per_value 
				 +  '</td>'
		});

		body_str = body_str + '</tr>';
		cb();

	}, function(err) {
		if(err) {
			console.error(err);
		}else {
			callback(null, body_str);
		}
	})

}

// append head and data to div
json_tb.prototype._show = function(id, whole) {
	console.log(whole);

	if(!id) {
		console.error('Sorry you miss a id parameter!');
	}

	$(id).append(whole);


}
