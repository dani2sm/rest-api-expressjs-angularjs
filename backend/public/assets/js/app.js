$("#addTaco").on("click", function() {
    let tacoName = $("#ta").val();

    if (tacoName.length === 0) {
        $("#incompleteForm").modal('show');
        return false;
    } else {
        $.post("/", tacoName, data => {
            return true;
        }).then(function() {
            $.get("/", function() {
                return true;
            })
        })
    }
});