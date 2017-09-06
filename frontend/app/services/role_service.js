services.factory('roleService', function ($http, $rootScope) {

  return {

    getAll: function (successCallBack, failureCallBack) {
      $http.get("http://localhost:3000/api/v1/roles/")
          .success(function (data, status, headers, config) {
            successCallBack(data, status, headers, config);
          })
          .error(function (data, status, headers, config) {
            failureCallBack(data, status, headers, config);
          })
    },
    // add roles
    add: function (label, successCallBack, failureCallBack) {
      $http.post("http://localhost:3000/api/v1/roles/", {
        label: label
      })
          .success(function (data, status, headers, config) {
            successCallBack(data, status, headers, config);
          })
          .error(function (data, status, headers, config) {
            failureCallBack(data, status, headers, config);
          })
    },
    // Update function
    edit: function (id, label, successCallBack, failureCallBack) {
      $http.put("http://localhost:3000/api/v1/roles/" + id + "", {
        label: label
      })
          .success(function (data, status, headers, config) {
            successCallBack(data, status, headers, config);
          })
          .error(function (data, status, headers, config) {
            failureCallBack(data, status, headers, config);
          })
    },
    // Delete function
    delete: function (id, successCallBack, failureCallBack) {
      $http.delete("http://localhost:3000/api/v1/roles/" + id, {})
          .success(function (data, status, headers, config) {
            successCallBack(data, status, headers, config);
          })
          .error(function (data, status, headers, config) {
            failureCallBack(data, status, headers, config);
          })
    },
    // Restore function
    restore: function (id, successCallBack, failureCallBack) {
      $http.get("http://localhost:3000/api/v1/roles/restore/" + id, {})
          .success(function (data, status, headers, config) {
            successCallBack(data, status, headers, config);
          })
          .error(function (data, status, headers, config) {
            failureCallBack(data, status, headers, config);
          })
    }, search: function (label, successCallBack, failureCallBack) {
      $http.get("http://localhost:3000/api/v1/roles/search?=" + label + "")
          .success(function (data, status, headers, config) {
            successCallBack(data, status, headers, config);
          })
          .error(function (data, status, headers, config) {
            failureCallBack(data, status, headers, config);
          })
    }

  }
});