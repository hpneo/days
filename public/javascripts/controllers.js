var AppController = Backbone.Controller.extend({
	routes: {
		'':			'home',
		'!':			'home',
		'!/':			'home',
		'!/day/:number':	'day'
	},
	home: function(){
		var days = new Days();
		days.fetch({
			success: function(){
				new DayIndex({collection: days});
			}
		});
	},
	day: function(number){
		var contents = new Contents({day: number});
		contents.fetch({
			success: function(){
				new DayShow({collection: contents});
			}
		});
	}
});
