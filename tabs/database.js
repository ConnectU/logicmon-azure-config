

(function () {
    // grid.render()

    // document.getElementById("browse-file-database").addEventListener('click', function (event) {
    //     log('User clicked "browse" button');
    //     Promise.try(() => {
            
    //         return Promise.resolve();
    //     }).then(() => {
    //     });
    // })

    // document.getElementById("export-database").addEventListener('click', function (event) {
    //     log('User clicked "export" button');
    //     Promise.try(() => {
    //         return Promise.resolve();
    //     }).then(() => {
    //     });
    // })

    document.getElementById("import-database").addEventListener('click', function (event) {
            grid.launch("grid-holder-database")
        // log('User clicked "import" button');
        // Promise.try(() => {
        //     return Promise.resolve();
        // }).then(() => {
        // });
    })

    // function readPath() {
    //     return document.getElementById("path-to-csv-database").value;
    // }


} ());
