// Generated by CoffeeScript 1.7.1
(function() {
  var $;

  $ = jQuery;

  $.fn.extend({
    typetype: function(text) {
      var deferreds, interval, t;
      interval = function() {
        return 200 * Math.random();
      };
      deferreds = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = this.length; _i < _len; _i++) {
          t = this[_i];
          _results.push((function(t) {
            return $.Deferred(function(deferred) {
              var updateChar;
              updateChar = function(limit) {
                $(t).html(text.substr(0, limit));
                if (limit < text.length) {
                  return setTimeout(function() {
                    return updateChar(limit + 1);
                  }, interval());
                } else {
                  return deferred.resolve();
                }
              };
              return updateChar(1);
            });
          })(t));
        }
        return _results;
      }).call(this);
      return $.when.apply($, deferreds);
    }
  });

}).call(this);
