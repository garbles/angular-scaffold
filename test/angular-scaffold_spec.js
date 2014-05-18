describe('angular-scaffold', function () {
  describe('#scaffold', function () {
    it('registers modules', function () {
      angular.scaffold('app', {
        user: {
          services: {
            api: []
          }
        },
        account: {
          controllers: {
            index: [],
            show: []
          },
          directives: {
            foo: [],
            bar: []
          }
        }
      });

      var moduleLookup = function () {
        angular.module('app');
        angular.module('app.account');
        angular.module('app.account.controllers');
        angular.module('app.account.controllers.index');
        angular.module('app.account.directives.foo');
      }

      expect(moduleLookup).not.toThrow();
    });


    it('properly requires plugins', function () {
      angular.module('pluginOne', [])
      .value('pluginValueOne', 1);

      angular.module('pluginTwo', [])
      .value('pluginValueTwo', 2);

      angular.scaffold('app', {
        pluginOne: true,
        account: ['pluginTwo']
      })
      .run(function (pluginValueOne, pluginValueTwo) {});

      var bootstrapApp = function () {
        angular.bootstrap(document, ['app']);
      }

      expect(bootstrapApp).not.toThrow();
    });
  });
});
