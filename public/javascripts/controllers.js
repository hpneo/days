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
		var day = new Day({number: number});
		day.fetch({
			success: function(){
				new DayShow({model: day});
				console.log(day);
			}
		});
	}
});
