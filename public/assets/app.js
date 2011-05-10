// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
$(document).ready(function(){
	new AppController();
	Backbone.history.start();
});

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

var Content = Backbone.Model.extend({});

var Contents = Backbone.Collection.extend({
	model: Content,
	initialize: function(options){
		this.url = 'days/'+options.day;
		this.day = options.day;
	}
});

var Day = Backbone.Model.extend({
	initialize: function(options){
		this.url = 'days/'+options.number;
	}
});

var Days = Backbone.Collection.extend({
	model: Day,
	url: 'days'
});

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
		$('#day').append('<div id="day_contents"></div>');
		$('#day_contents').delay(1500).fadeIn('slow', function(){
			self.collection.each(function(model, index){
				var model_template = $(JST['content_image']({model: model}));
				model_template.hide();
				$('#day_contents').append(model_template);
				model_template.delay(500*index).fadeTo('slow', 0.9);
			});
			$('a.day_content').fancybox();
		});
	}
});
(function(){
window.JST = window.JST || {};
var template = function(str){var fn = new Function('obj', 'var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push(\''+str.replace(/[\r\t\n]/g, " ").replace(/'(?=[^%]*%>)/g,"\t").split("'").join("\\'").split("\t").join("'").replace(/<%=(.+?)%>/g,"',$1,'").split("<%").join("');").split("%>").join("p.push('")+"');}return p.join('');"); return fn;};
window.JST['content_image'] = template('<a href="<%= model.get(\'content\') %>" class="day_content"><img src="<%= model.get(\'content\') %>" height="100" /></a>');
})();