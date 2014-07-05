# Angular Scaffold

`angular-scaffold` is an AngularJS extension that allows you to define very small modules for your application without
a lot of boilerplate code.

## Installing

You can install this as a bower package with `bower install angular-scaffold`
or add it to your bower.json file.

## Example Use

The following two examples are equivalent.

```javascript
// Typical angular.js module registration

angular.module('app', ['ui.router', 'app.users', 'app.pages']);

angular.module('app.users', ['app.users.controllers', 'app.users.services']);
angular.module('app.pages', ['app.pages.controllers', 'app.pages.directives']);

angular.module('app.users.controllers', ['app.users.controllers.index']);
angular.module('app.users.controllers.index', []);

angular.module('app.users.services', ['app.users.services.api', 'app.users.services.derp']);
angular.module('app.users.services.api', ['ngResource']);
angular.module('app.users.services.derp', []);

angular.module('app.pages.controllers', ['app.pages.controllers.show']);
angular.module('app.pages.controllers.show', []);

angular.module('app.pages.directives', ['app.pages.directives.foo', 'app.pages.directives.bar']);
angular.module('app.pages.directives.foo', []);
angular.module('app.pages.directives.bar', []);
```

```javascript
// Module registration with angular-scaffold

angular.scaffold('app', ['ui.router'], {
  users: {
    controllers: {
      index: []
    },
    services: {
      api: ['ngResource'],
      derp: []
    }
  },
  pages: {
    controllers: {
      show: []
    },
    directives: {
      foo: [],
      bar: []
    }
  }
});
```

## License

MIT
