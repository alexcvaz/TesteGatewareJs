function _retornColors() {
    $.ajax({
        method: 'GET',
        url: "https://api.myjson.com/bins/o7bzu",
        success: function (data) {
            $("#slcColors").html("");
            var option;
            data.forEach(item => {
                option += "<option>" + item + "</option>"
            });
            $("#slcColors").append(option);
        },
        error: function (ex) {
            alert(ex);
        }
    });
}