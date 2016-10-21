const grid = require('./js/editable-grid.js');

(function () {
    // grid.render()

    // document.getElementById("browse-file-virtualmachine").addEventListener('click', function (event) {
    //     log('User clicked "browse" button');
    //     Promise.try(() => {
            
    //         return Promise.resolve();
    //     }).then(() => {
    //     });
    // })

    // document.getElementById("export-virtualmachine").addEventListener('click', function (event) {
    //     log('User clicked "export" button');
    //     Promise.try(() => {
    //         return Promise.resolve();
    //     }).then(() => {
    //     });
    // })

    document.getElementById("import-virtualmachine").addEventListener('click', function (event) {
            grid.launch("#grid-holder-virtualmachine")
        // log('User clicked "import" button');
        // Promise.try(() => {
        //     return Promise.resolve();
        // }).then(() => {
        // });
    })

    // function readPath() {
    //     return document.getElementById("path-to-csv-virtualmachine").value;
    // }


} ());
