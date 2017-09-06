'use strict';

controllers.controller('userCtrl', ['$rootScope', '$scope', '$location', 'userService', 'profilService', 'paginationSize', 'bootstrapModal', function ($rootScope, $scope, $location, userService, profilService, paginationSize, bootstrapModal) {
    /* Function ERROUR Messages
     ---------------------------*/
    $scope.errorMessages = [];
    $scope.search = false;
    $scope.genders = [{label : "Femme",value : 0 }, {label : "Homme", value : 1 }];

    $scope.clearErrorMessages = function() {
        $scope.errorMessages = [];
    };

    $scope.clearSearch = function() {
        $scope.search = false
        loadAllUsers();
    };
    loadAllUsers();

    /**
     * Pagination
     */
    $scope.currentPage = 1; 
    $scope.itemsPerPage = paginationSize;

    $scope.pageChanged = function () {
        $scope.totalItems = $scope.users.length;
        var start = ($scope.currentPage - 1) * parseInt($scope.itemsPerPage);
        var end = (start + parseInt(paginationSize));
        console.log("users", $scope.users);
        $scope.usersFiltred = $scope.users.slice(start, end)
    };

    // load profils
    // function loadAllProfils() {
    //     profilService.getAll(function (profils) {
    //         $scope.profils = profils;
    //     }, function (error) {
    //         console.log(error);
    //     })
    // }

    // load all users
    function loadAllUsers() {
        $scope.search = false;

        userService.getAll(function (data) {
            console.log(data)
            $scope.users = data;
            $scope.totalItems = data.length;
            $scope.pageChanged()

        }, function (error) {
            console.log(error);
        })
    }

    function reloadData() {
        if ($scope.seach) {
            $scope.findUsers()
        }
        else {
            loadAllUsers()
        }
    }

    /*---------------------------*/
    //loadAllProfils();

    /*  nouveauModal: Create user object
     * ---------------------------------- */
    $scope.nouveauModal = function () {
        $scope.clearErrorMessages();
        $scope.user = {
            firstname: '',
            lastname: '',
            email: '',
            username: '',
            password: '',
            status : false,            
            phone: '',
            gender: null,
            createdAt: new Date().toMysqlFormat(),
            updatedAt: new Date().toMysqlFormat()
        };
        console.info("new user:", $scope.user);
        bootstrapModal.open('nouveauModal');
    };
    /*  modificationModal
     * ------------------------- */
    $scope.modificationModal = function (user) {
        $scope.clearErrorMessages();
        $scope.user = {
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            username: user.username,
            password: user.password,
            phone: user.phone,
            gender:user.gender,
            updated_at: new Date().toMysqlFormat()
        };
        bootstrapModal.open('modificationModal');
    };
    /*  detailsModal
     * ------------------------- */
    $scope.detailsModal = function (user) {
        $scope.clearErrorMessages()
        $scope.user = {
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            username: user.username,
            phone: user.phone,
            password: user.password,
            //profil: user.profil.label
        };
        bootstrapModal.open('detailsModal');
    };
    /*  rechercheModal: user
     * ---------------------------------- */
    $scope.rechercheModal = function () {
        if (!$scope.searchUser) {
            $scope.searchUser = {
                firstname: "",
                lastname: "",
                phone: "",
                email: "",
                username: "",
                password: ""
            }
        }
        bootstrapModal.open('rechercheModal');
    };

    // new user
    $scope.createNewUser = function () {
       userService.add($scope.user, function (data) {
            if (data.error != undefined) {
                $scope.clearErrorMessages();
                $scope.errorMessages.push(erroor(data.error))
            } else {
                bootstrapModal.close('nouveauModal');
                reloadData()
            }

        }, function (data) {
            console.log(data);
            // console.log('|error name: ' + data.name);
            // for (var i = data.errors.length - 1; i >= 0; i--) {
            //     console.log('|message: ' + data.errors[i].message + ' | type: ' + data.errors[i].type + ' | path: ' +data.errors[i].path);
            // };
        })
    };


    /*  Edit a User
     * ------------------------- */
    $scope.editUser = function (user) {
        userService.edit(user, function (data) {
            if (data.error != undefined) {
                $scope.clearErrorMessages();
                $scope.errorMessages.push(erroor(data.error))
            } else {
                bootstrapModal.close('modificationModal');
                reloadData()
            }

        }, function () {
            alert("Error ! Update user");
        });
    };
    /*  Delete a User
     * ------------------------- */
    $scope.deleteModal = function (user) {
        console.log("Delete user", user);
        $scope.clearErrorMessages();
        $scope.deleteUser = {
            id: user.id
        };

        bootstrapModal.open('deleteModal')
    };

    $scope.saveDeleteUser = function () {
       userService.delete($scope.deleteUser.id,
            function (user) {
                if (user.error != undefined) {
                    console.log("error when deleting user: ", user.error);
                    $scope.clearErrorMessages();
                    $scope.errorMessages.push(erroor(user.error))
                } else {
                    loadAllUsers()
                    bootstrapModal.close('deleteModal');

                }
            }, function () {
                console.log("Error deleting this user ...")
            })
    };
    /**
     * Restore User
     */

    $scope.openUserRestore = function(user) {
        console.log("Restore user", user)
        $scope.clearErrorMessages();
        $scope.restoreUser = {
            userId: user.id
        }
        bootstrapModal.open('restoreModal')
    }

    $scope.saveRestoreUser = function() {
        userService.restore($scope.restoreUser.userId,
            function (user) {
                if (user.error != undefined) {
                    console.log("error when restoring user: ", user.error)
                    $scope.clearErrorMessages();
                    $scope.errorMessages.push(erroor(user.error))
                } else {
                    bootstrapModal.close('restoreModal')
                    loadAllUsers();
                }
            }, function () {
                console.log("Error restoring this User ...")
            })
    }

    /*  findUsers  User
     * ------------------------- */
    $scope.findUsers = function () {
        $scope.search = true;
        userService.findAllBy($scope.searchUser.firstname, $scope.searchUser.lastname, $scope.searchUser.abv, $scope.searchUser.phone, $scope.searchUser.login, $scope.searchUser.profil.userProfilId
            , function (data) {
                $scope.users = data;
                $scope.pageChanged();
                bootstrapModal.close('RechercheModal');
            }, function () {
                alert("user not found!");
            });
    };

    function getProfil(profilId) {
        for (var index in $scope.profils) {
            if ($scope.profils[index].userProfilId == profilId) {
                return $scope.profils[index]
            }
        }
        return {}
    }
}
]);
