var DayIndex = Backbone.View.extend({
	el: '<ul id="days"></ul>',
	initialize: function(){
		this.collection = this.options.collection;
		this.render();
	},
	render: function(){
		$('#app').html(this.el);
		this.collection.each(function(item){
			var item_template = $('<li><h3><a href="#!/day/'+item.get('number')+'">('+item.get('number')+')</a></h3></li>');
			item_template.hide();
			$('#days').append(item_template);
			item_template.delay(item.get('number')*500).fadeIn('slow');
		});
	}
});
