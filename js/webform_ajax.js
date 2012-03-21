(function ($) {

Drupal.behaviors.webform_ajax = {
  attach: function (context, settings) {

    // Bind Ajax behaviors to all items showing the class.
    $('.links a:not(.ajax-processed)', context).addClass('ajax-processed').each(function () {
      // Fully fill element_settings, as Drupal's ajax.js seems not to merge default correctly.
      wrapper_id = $(this).parents('[id^=webform-ajax-wrapper]').attr('id');
      setting = settings.webform_ajax.wrappers[wrapper_id];
      var element_settings = {
        url: settings.webform_ajax.url + '/' + setting.nid + '/' + setting.html_id,
        event: 'mousedown',
        prevent: 'click',
        keypress: false,
        selector: '#' + setting.html_id,
        effect: 'none',
        speed: 'none',
        method: 'replaceWith',
        wrapper: setting.html_id,
        progress: {
          type: 'throbber',
          message: ''
        },
        submit: {
          'js': true
        }
      };

      Drupal.ajax[setting.html_id] = new Drupal.ajax(setting.html_id, this, element_settings);
    });
  }

};

}(jQuery));
