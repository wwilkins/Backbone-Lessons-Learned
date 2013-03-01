ConfirmModal = Support.CompositeView.extend({
 /**
  * Creates a modal for confirming user actions. Configure the options to suite
  * your needs.
  * Use this objects promise property to attach behavior to the users
  * decision via .done() and .fail().
  * @param options Configuration options for the alert.
  * @param options.title The modal title.
  * @param options.message The modal message.
  * @param options.yes_text Text for the yes button.
  * @param options.no_text Text for the no button.
  */
  initialize: function (options) {
    _.extend(this, options);
    _.bindAll(this);
    this.deferred = new $.Deferred();
    this.promise = this.deferred.promise();
    this.render();
    return this;
  },
  events: {
    'click a': 'handleUserResponse'
  },
  template: '', // Bit of a hack to get this ball rolling.
 
  render: function () {
    var messageHtml = _.template($("#modal-template").html(), {
      title: this.title,
      message: this.message,
      yes_text: this.yes_text,
      no_text: this.no_text,
    });

    this.setElement($(messageHtml));
    $('body').append(this.el);
    this.$el.modal({
      "static": true
    });
    return this;
  },
  handleUserResponse: function (e) {
    if (e !== undefined) {
      e.stopPropagation();
      e.preventDefault();
    }
    var buttonClicked = $(e.target).attr('id');
    switch (buttonClicked) {
      case "confirm":
        this.deferred.resolve();
        break;
      case "cancel":
        this.deferred.reject();
        break;
    }
    $.when(this.$el.modal('hide')).then(_.bind(function () {this.remove(); this.leave();}, this));
  }
});