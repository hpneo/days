var DayShow = Backbone.View.extend({
	el: '<div id="day"></div>',
	initialize: function(){
		this.collection = this.options.collection;
		this.render();
	},
	render: function(){
		var self = this;
		$('#app').html(this.el);
		var day_template = $('<h2 id="day_number">'+this.collection.day+'</h2>');
		day_template.hide();
		$('#day').append(day_template);
		day_template.delay(500).fadeIn(700);
		$('#day').append('<div id="day_contents"></div>');
		$('#day_contents').delay(1500).fadeIn('slow', function(){
			self.collection.each(function(model, index){
				var model_template = $(JST['content_image']({model: model}));
				model_template.hide();
				$('#day_contents').delay(500*index).append(model_template);
				model_template.fadeTo('slow', 0.9);
			});
		});
	}
});
