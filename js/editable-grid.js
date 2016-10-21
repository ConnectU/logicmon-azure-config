var Grid = require('editable-grid'),  datepicker = require('date-selector'), $ = require('jquery');

exports.launch = function(containerId){
    
    // initialize datepicker - only required once per page
    datepicker();

    var grid = new Grid({
        // switch table borders on and off
        borders: true,
        // property name for column id
        id: 'id',
        rows: {
            // turn to true for clickable rows
            link: false,
            // turn to true for an add row to appear in footer
            newRow: false,
            // turn to true to see an total row appear (only applicable to cost columns)                                          
            totalRow: false
        },
        // pre sort the grid when rendered
        sortConfig: [
            {
                id: 'col1',
                asc: true
            }
        ],
        // append custom event handlers
        addListeners: function (el) { },
        // return true to make a cell editable                          
        stateManager: {
            isEditable: function (rowId, colId) {
                return false;
            }
        },
        // element to append grid too
        el: $(containerId),
        columns: [
            {
                // unique id for the data property name, can be nested - EG foo.bar
                id: 'col1',
                // title to be used in header column
                title: 'Column A',
                // width of column - must be in percentage form                           
                width: '100%',
                // can the value not have a value, only applies to editable values
                nullable: false,
                // format the value
                formatter: function (id, value) {
                    return value;
                },
                // parse the value, only applies to editable values            
                parser: function (id, value) {
                    return value;
                },
                // return an error message when a value is not valid
                // only applies to editable values
                validate: function (id, value) {
                    return '';  // value valid
                },
                // 'left' (default), 'center', 'right'
                alignment: 'left',
                // can the column be sorted                          
                sortable: false,
                // custom sort function
                sortCompare: function (left, right, ascending) { },
                // use a different sort type to the column type
                // see lib https://www.npmjs.com/package/stand-in-order to see available types
                sortType: 'integer',
                // type of data in the column,
                // options are 'text', 'cost', 'percent', 'select', 'date', 'checkbox'
                type: 'text',
                // values for a select type column,
                // use formatter to format to the selected value            
                list: ['a', 'b', 'c'],
                // advanced functionality - see demos for example
                preCreateCallback: function () {
                    // called before cell is created
                    // return cell value
                },
                // add classes `foo` and `bar` to table cell tag
                classes: ['foo', 'bar']
            }
        ],
        // data to be rendered to grid
        data: [
            {
                id: 'id',
                col1: 'Hello World'
            }
        ],
        // child data
        childData: function (parentId, object) {
            return $.Deferred();
        },
        // tree mode
        treeMode: false,
        // Launch links in new tabs
        launchLinksNewTab: false,
        // return an array of classes for a cell
        getCellClasses: function (columnId, obj) {
            return ['my-cell-class-1', 'my-cell-class-2'];
        }
    });

    // render the grid onto the page
    grid.render();

    // things to listen for
    grid.on('editable-value-updated', function (params) { });
    grid.on('editable-new-row-value-changed', function (newObj, colId) { });
    grid.on('editable-new-row', function (newObj) { });
    grid.on('editable-row-clicked', function (params) { });
    grid.on('editable-can-delete', function (rowId) { });        // must return a deferred
    grid.on('editable-pre-render');
    grid.on('editable-post-render');
    grid.on('editable-before-tree-node-expand', function (id) { });
    grid.on('editable-after-tree-node-expand', function (id) { });
    grid.on('editable-before-tree-node-collapse', function (id) { });
    grid.on('editable-after-tree-node-collapse', function (id) { });

    // things to trigger
    grid.trigger('editable-delete-mode', true / false);

} 