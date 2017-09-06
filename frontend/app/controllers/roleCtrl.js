'use strict';
controllers.controller('roleCtrl', ['$rootScope', '$scope', '$location', 'roleService', 'bootstrapModal', function($rootScope, $scope, $location, roleService, bootstrapModal){

  /* Function ERROUR Messages
   ---------------------------*/
  $scope.errorMessages = [];

  $scope.clearErrorMessages = function() {
    $scope.errorMessages = [];
  };

  /*   load all
   ----------------------*/
  function loadAllRoles() {
    roleService.getAll(function(roles) {
      $scope.roles = roles;
      console.log("role", roles);
    }, function(error){
      console.log(error);
    });
  }
  loadAllRoles();

  $scope.newRole = function() {
    $scope.role = {
      id: "",
      label: ""
    }
  };

  /*  nouveauModal: Create role object
   * ---------------------------------- */
  $scope.nouveauModal = function() {
    $scope.role = {
      label: ""
    };
    bootstrapModal.open('nouveauModal');
  };
  /*  modificationModal
   * ------------------------- */
  $scope.modificationModal = function(role) {
    $scope.clearErrorMessages();
    $scope.role = {
      id: role.id,
      label: role.label
    };
    bootstrapModal.open('modificationModal');
  };
  /*  detailsModal
   * ------------------------- */
  $scope.detailsModal = function(role) {
    $scope.clearErrorMessages();
    $scope.role = {
      id: role.id,
      label: role.label
    };
    bootstrapModal.open('detailsModal');
  };

  /*  Create new role
   * ------------------------- */
  $scope.createNewRole = function() {
    $scope.clearErrorMessages();
    roleService.add($scope.role.label, function(data) {
      if (data.error != undefined){
        $scope.errorMessages.push(erroor(data.error));
        console.log($scope.errorMessages.length);
      }else{
        loadAllRoles();
        bootstrapModal.close('nouveauModal');
      }
    }, function(){
      alert("erreur d'ajout d'un nouveau role !");
    });
  };
  /**
   Edit a role
   */
  $scope.editRole = function(){
    roleService.edit($scope.role.id, $scope.role.label, function(data) {
      if (data.error != undefined){
        $scope.errorMessages.push(erroor(data.error));
        console.log($scope.errorMessages.length);
      }else{
        loadAllRoles();
        bootstrapModal.close('modificationModal');
      }
    }, function(){
      alert("erreur de la modification Role !");

    });
  };
  /**
   * Delete role
   */

  $scope.openRoleDelete = function (role) {
    console.log("Delete role : ", role);
    $scope.deleteRole = {
      id: role.id
    };
    bootstrapModal.open('deleteModal')
  };

  $scope.saveDeleteRole = function () {
    console.log("Deleteing role", $scope.deleteRole);
    roleService.delete($scope.deleteRole.id,
        function (role) {
          if (role.error != undefined) {
            console.log("error when deleting role: ", role.error);
            $scope.clearErrorMessages();
            $scope.errorMessages.push(erroor(role.error))
          } else {
            bootstrapModal.close('deleteModal');
            loadAllRoles();
          }
        }, function () {
          console.log("Error deleting this role ...")
        })
  };

  /**
   * Restore role
   */

  $scope.openRoleRestore = function(role) {
    console.log("Restore role", role);
    $scope.restoreRole = {
      id: role.id
    };

    bootstrapModal.open('restoreModal');
  };

  $scope.saveRestoreRole = function() {
    roleService.restore($scope.restoreRole.id,
        function (role) {
          if (role.error != undefined) {
            console.log("error when restoring role: ", role.error);
            $scope.clearErrorMessages();
            $scope.errorMessages.push(role.error);
          } else {
            bootstrapModal.close('restoreModal');
            loadAllRoles();
          }
        }, function () {
          console.log("Error restoring this role ...")
        })
  };

  /*  Search  Roles
   * ------------------------- */
  $scope.findRoles = function() {
    roleService.search($scope.labelSearch, function(data) {
      $scope.roles = data;
      bootstrapModal.close('RechercheModal');
    }, function(){
      alert("paymentMode_NOT_FOUND !");
    });
  };


}
]);