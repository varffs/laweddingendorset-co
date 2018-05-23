/* jshint browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global jQuery, $, document, Site, Modernizr */

Site = {
  mobileThreshold: 601,
  init: function() {
    var _this = this;

    _this.$mainContent = $('#main-content');

    $(window).resize(function(){
      _this.onResize();
    });

    if (data) {
      _this.renderCopy();
    }

    _this.fixWidows();

  },

  onResize: function() {
    var _this = this;

  },

  renderCopy: function() {
    var _this = this;

    $(data).each(function(index, object) {
      var esInsert = '<p class="js-fix-widows">' + object[0] + '</p>';
      var enInsert = '<p class="font-serif font-italic js-fix-widows">' + object[1] + '</p>';

      _this.$mainContent.append(esInsert + enInsert + '<hr />');
    });
  },

  fixWidows: function() {
    // utility class mainly for use on headines to avoid widows [single words on a new line]
    $('.js-fix-widows').each(function(){
      var string = $(this).html();
      string = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
      $(this).html(string);
    });
  },
};

jQuery(document).ready(function () {
  'use strict';

  Site.init();

});