(function(window, angular, undefined) {
'use strict';

angular.scaffold = function (root, dependencies, modules) {

  if (!angular.isArray(dependencies)) {
    return angular.scaffold(root, [], dependencies);
  }

  angular.forEach(modules, function (children, module) {
    var moduleName = root + '.' + module;

    if (angular.isArray(children)) {
      angular.module(moduleName, children);
      dependencies.push(moduleName);
    } else if (angular.isObject(children)) {
      angular.scaffold(moduleName, [], children);
      dependencies.push(moduleName);
    } else {
      dependencies.push(module);
    }
  });

  return angular.module(root, dependencies);
};

})(window, window.angular);
