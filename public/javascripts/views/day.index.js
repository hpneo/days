var DayIndex = Backbone.View.extend({
	el: '<ul id="days"></ul>',
	initialize: function(){
		this.collection = this.options.collection;
		this.render();
	},
	render: function(){
		$('#app').html(this.el);
		this.collection.each(function(item){
			var item_template = $(JST['days/index']({model: item}));
			item_template.hide();
			$('#days').append(item_template);
			item_template.delay(item.get('number')*500).fadeIn('slow');
		});
	}
});
