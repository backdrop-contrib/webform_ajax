(function ($) {

Drupal.behaviors.webform_ajax = {
  attach: function (context,settings) {

    // Bind Ajax behaviors to all items showing the class.
    $.each(Drupal.settings.webform_ajax, function(id, setting) {
      $('#' + id + ' .links a:not(.ajax-processed)').addClass('ajax-processed').each(function () {
        // Fully fill element_settings, as Drupal's ajax.js seems not to merge default correctly.
        var element_settings = {
          url: 'webform_ajax/return_webform/' + setting.nid,
          event: 'mousedown',
          prevent: 'click',
          keypress: false,
          selector: '#' + id,
          effect: 'none',
          speed: 'none',
          method: 'replaceWith',
          wrapper: id,
          progress: {
            type: 'throbber',
            message: ''
          },
          submit: {
            'js': true
          }
        };

        Drupal.ajax[id] = new Drupal.ajax(id, this, element_settings);
      });
    });
  }

};

}(jQuery));