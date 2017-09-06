
services.factory('userService', function($http) {
	
	return {
        login:function(user, successCallBack, failureCallBack) {
            $http.post("http://localhost:3000/api/v1/authenticate", user)
                .success(function (data, status, headers, config) {
                    successCallBack(data, status, headers, config);
                })
                .error(function (data, status, headers, config) {
                    failureCallBack(data, status, headers, config);
                })
        },
        logout:function(successCallBack, failureCallBack) {
            $http.get("http://localhost:3000/api/v1/logout", {})
                .success(function (data, status, headers, config) {
                    successCallBack(data, status, headers, config);
                })
                .error(function (data, status, headers, config) {
                    failureCallBack(data, status, headers, config);
                })
        },
        get:function(successCallBack, failureCallBack) {
            $http.get("http://localhost:3000/api/v1/users/current")
                .success(function (data, status, headers, config) {
                    successCallBack(data, status, headers, config);
                })
                .error(function (data, status, headers, config) {
                    failureCallBack(data, status, headers, config);
                })
        },
        getAll:function(successCallBack, failureCallBack) {
            $http.get("http://localhost:3000/api/v1/users/")
                .success(function (data, status, headers, config) {
                    successCallBack(data, status, headers, config);
                })
                .error(function (data, status, headers, config) {
                    failureCallBack(data, status, headers, config);
                })
        },
		getProfils:function(successCallBack, failureCallBack) {
			$http.get("http://localhost:3000/api/v1/users/profiles")
			.success(function (data, status, headers, config) {
				successCallBack(data, status, headers, config);
			})
			.error(function (data, status, headers, config) {
				failureCallBack(data, status, headers, config);
			})
		},
		// add function
		add:function(user, successCallBack, failureCallBack) {
			$http.post("http://localhost:3000/api/v1/users/", user)
			.success(function (data, status, headers, config) {
				successCallBack(data, status, headers, config);
			})
			.error(function (data, status, headers, config) {
				failureCallBack(data, status, headers, config);
			})
		},

		// Update function
		edit:function(user, successCallBack, failureCallBack) {
			$http.put("http://localhost:3000/api/v1/users/"+ user.id, user)
			.success(function (data, status, headers, config) {
				successCallBack(data, status, headers, config);
			})
			.error(function (data, status, headers, config) {
				failureCallBack(data, status, headers, config);
			})
		},

		// Update function
		delete:function(id, successCallBack, failureCallBack) {
			$http.put("http://localhost:3000/api/v1/users/delete/" + id )
			.success(function (data, status, headers, config) {
				successCallBack(data, status, headers, config);
			})
			.error(function (data, status, headers, config) {
				failureCallBack(data, status, headers, config);
			})
		},

    // Update function
    destroy:function(id, successCallBack, failureCallBack) {
      $http.delete("http://localhost:3000/api/v1/users/" + id )
          .success(function (data, status, headers, config) {
            successCallBack(data, status, headers, config);
          })
          .error(function (data, status, headers, config) {
            failureCallBack(data, status, headers, config);
          })
    },
		//restore
		restore:function(id, successCallBack, failureCallBack) {
		$http.get("http://localhost:3000/api/v1/users/restore/" + id , {
		})
			.success(function (data, status, headers, config) {
				successCallBack(data, status, headers, config);
			})
			.error(function (data, status, headers, config) {
				failureCallBack(data, status, headers, config);
			})
		},
		/* recherche */
		findAllBy:function(firstname,lastname, abv, phone, login, profil, successCallBack, failureCallBack) {
			$http.post("http://localhost:3000/api/v1/users/search", {
				firstname: firstname,
				lastname: lastname,
				abv: abv,
				phone: phone,
				login: login,
				profil: profil
			})
				.success(function (data, status, headers, config) {
					successCallBack(data, status, headers, config);
				})
				.error(function (data, status, headers, config) {
					failureCallBack(data, status, headers, config);
				})
		}
	}
	
});