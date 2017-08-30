'use strict';

services.factory('bootstrapModal', ["$document", function($document) {
    return {
        close: function() {
            $document.find('.modal').modal('hide');
        },
        open:function(id) {
            $document.find('#' + id).modal();
        }
    };

    $(function () {
        $('#myTab a:last').tab('show');
    });
    $('#myModal').modal('hide')
}
]);

