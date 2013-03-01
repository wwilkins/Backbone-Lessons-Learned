NoMemoryLeakView = Support.CompositeView.extend({
  initialize: function (options) {
    _.extend(this, options);
    _.bindAll(this);
    this.render();
    return this;
  },
  events: {
  	'click p': 'awesomeClickHandler'
  	, 'click p': 'awesomeClickHandler'
  	, 'click p': 'awesomeClickHandler'
  	, 'click p': 'awesomeClickHandler'
  	, 'click p': 'awesomeClickHandler'
  	, 'click p': 'awesomeClickHandler'
  },
  template: function () { return ['<p id=' + this.cid + '>Lorum Ipsum Sit Amet</p>'].join(''); }, 
  render: function () {
  	this.setElement(this.template());
  	return this;
  },
  awesomeClickHandler: function (e) {
  	this.$el.text('hahaha');
  }
});