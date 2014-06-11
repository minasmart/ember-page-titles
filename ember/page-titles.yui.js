YUI.add("ember/page-titles", function(Y, NAME, __imports__, __exports__) {
    "use strict";
    var get = Ember.get, $ = Ember.$;

    var PageTitles = Ember.Mixin.create({

      buildTitle: function(){
        var env = window.ENV, suffix, title, format;


        // Page title suffix, or default title
        suffix = env.NAME;

        // Default title format is "page-title | App.NAME"
        format = Ember.isNone(env.TITLE_FORMAT) ? "%@ | %@" : env.TITLE_FORMAT;

        // pageTitle attribute from the route
        title = get(this, 'pageTitle');

        // If there is no title, just use the app name. Otherwise,
        // format the title the format specified by App.TITLE_FORMAT
        if (Ember.isEmpty(title)) {
          return suffix;
        } else {
          return format.fmt(title, suffix);
        }
      },

      setPageTitle: function() {
        var title = this.buildTitle();

        $('title').html(title);
      },

      // Override the routes enter method and ensure that   
      enter: function(){
        Ember.run.schedule('routerTransitions', this, 'setPageTitle');
        this._super.apply(this, arguments);
      }

    });

    __exports__["default"] = PageTitles;
    return __exports__;
}, "@VERSION@", {"es":true,"requires":[]});