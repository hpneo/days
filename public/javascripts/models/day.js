var Day = Backbone.Model.extend({
	initialize: function(options){
		this.url = 'days/'+options.number
	}
});

var Days = Backbone.Collection.extend({
	model: Day,
	url: 'days'
});
