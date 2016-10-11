
(function () {
    // grid.render()

    // document.getElementById("browse-file-webapp").addEventListener('click', function (event) {
    //     log('User clicked "browse" button');
    //     Promise.try(() => {
            
    //         return Promise.resolve();
    //     }).then(() => {
    //     });
    // })

    // document.getElementById("export-webapp").addEventListener('click', function (event) {
    //     log('User clicked "export" button');
    //     Promise.try(() => {
    //         return Promise.resolve();
    //     }).then(() => {
    //     });
    // })

    document.getElementById("import-webapp").addEventListener('click', function (event) {
            grid.launch("grid-holder-webapp")
        // log('User clicked "import" button');
        // Promise.try(() => {
        //     return Promise.resolve();
        // }).then(() => {
        // });
    })

    // function readPath() {
    //     return document.getElementById("path-to-csv-webapp").value;
    // }


} ());
