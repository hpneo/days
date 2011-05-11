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
		day_template.delay(500).fadeIn(800);
		$('#day').append('<div id="day_contents"><div id="content_wrapper"></div></div>');
		$('#day_contents').delay(1500).fadeIn('slow', function(){
			self.collection.each(function(model, index){
				var model_template = $(JST['contents/content_image']({model: model}));
				model_template.hide();
				$('#content_wrapper').append(model_template);
				model_template.delay(500*index).fadeTo(100*self.collection.length-100*index, 0.9);
			});
			$('a.day_content').fancybox();
			$('body').waitForImages(function(){
				$('#content_wrapper').masonry({
					singleMode: true,
					columnWidth: 200,
					animate: true
				});
			});
		});
	}
});
