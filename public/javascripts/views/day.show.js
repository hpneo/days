var DayShow = Backbone.View.extend({
	el: '<div id="day"></div>',
	initialize: function(){
		this.model = this.options.model;
		this.render();
	},
	render: function(){
		$('#app').html(this.el);
		var day_template = $('<h2 id="day_number">'+this.model.get('number')+'</h2>');
		day_template.hide();
		$('#day').append(day_template);
		day_template.delay(500).fadeIn(700);
	}
});
