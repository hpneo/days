var Content = Backbone.Model.extend({});

var Contents = Backbone.Collection.extend({
	model: Content,
	initialize: function(options){
		this.url = 'days/'+options.day;
		this.day = options.day;
	}
});
