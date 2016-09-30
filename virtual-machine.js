(function () {
    document.getElementById("live-id-launch").addEventListener('click', function (event) {
        document.getElementById("log-output").value = document.getElementById("log-output").value + "Event:" + event + " \n"
    })
} ());