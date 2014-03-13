Ember Page Titles
=================

Hey there! Remember the days of static pages where every page had a unique title
and search engines learned to understand that? You probably do! Ever want to
keep that sort of functionality with Ember? Well here's one really simple way to
do just that. It's really simple. Don't use this if it doesn't suit you needs,
but remember: Web pages have titles. It's totally a thing.

Extracted from [houseofetiquette.com](https://houseofetiquette.com).

Usage
=====

1. include `ember-page-titles.js` in your project.
2. Mix it in to Ember.route:
```
Ember.Route.reopen(Ember.PageTitles);
```
3. Give your app a name.
```
App.NAME = "My Super Sexy Website";
```
4. Set a page title somewhere in your route. `afterModel` is a good place to do
   this.
```
MyRoute = Ember.Route.extend({

  ...

  afterModel: function(model, transition) {
    this.set('pageTitle', model.get('title'));
  }

  ...

});
```
5. That's it! You're done! Awesome!

Advanced Usage
==============

The magic really happens in the route's `buildTitle` method. It looks at the
`App.NAME`, and `App.TITLE_FORMAT` keys. The default format is defined as
```
"%@ | %@".fmt(pageTitle, App.NAME);
```
If no `pageTitle` attribute is available, `App.NAME` is set as the page title.

If you need any sort of funky behaviour override `Ember.Route.buildTitle`.

Kick ass!
