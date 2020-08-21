const url = "https://sbi72z2kn8.execute-api.ap-northeast-1.amazonaws.com/prod"

$(function () {
    $("#btn").click(function () {
        var button = $(this)
        button.attr("disabled", true)
        var data = {
            TableName: "intern-ag-shop",
            Item: {
                name: {
                    S: $("#name").val(),
                },
                ido: {
                    S: $("#ido").val(),
                },
                keido: {
                    S: $("#keido").val(),
                },
                konzatu: {
                    S: $("#konzatu").val(),
                },
            },
        }

        $.ajax({
            type: "post",
            url: url,
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType: "json",
            success: function (resp) {
                $("#name").val("")
                $("#ido").val("")
                $("#keido").val("")
                $("#konzatu").val("")
                console.log(resp)
            },
            error: function (resp) {
                console.log(resp)
            },
            complete: function () {
                button.attr("disabled", false)
            },
        })
    })
})
