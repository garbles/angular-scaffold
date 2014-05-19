(function(window, angular, undefined) {
'use strict';

angular.scaffold = function (root, modules) {
  var rootDependencies = [];

  angular.forEach(modules, function (children, module) {
    var moduleName = root + '.' + module;

    if (angular.isArray(children)) {
      angular.module(moduleName, children);
      rootDependencies.push(moduleName);
    } else if (angular.isObject(children)) {
      angular.scaffold(moduleName, children);
      rootDependencies.push(moduleName);
    } else {
      rootDependencies.push(module);
    }
  });

  return angular.module(root, rootDependencies);
};

})(window, window.angular);
