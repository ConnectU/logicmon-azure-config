// function getArgumentNames(func) {
    //     // First match everything inside the function argument parens.
    //     var args = func.toString().match(/function\s.*?\(([^)]*)\)/)[1];

    //     // Split the arguments string into an array comma delimited.
    //     return args.split(',').map(function (arg) {
    //         // Ensure no inline comments are parsed and trim the whitespace.
    //         return arg.replace(/\/\*.*\*\//, '').trim();
    //     }).filter(function (arg) {
    //         // Ensure no undefined values are added.
    //         return arg;
    //     });
    // }

    // function bindCredentialsToGraph(azGraph, credentials, tenant) {
    //     function canBindCredentialsAndTenant(possibleFunction) {
    //         return (typeof possibleFunction === 'function')
    //             && (function (argumentNames) {
    //                 // make sure the first two parameters are "credentials" and "tenant"
    //                 return argumentNames.length > 2 && argumentNames[0] === 'credentials' && argumentNames[1] === 'tenant';
    //             })(getArgumentNames(possibleFunction));
    //     }
    //     var boundGraph = {};
    //     for (var key in azGraph) {
    //         var unboundValue = azGraph[key];
    //         if (canBindCredentialsAndTenant(unboundValue)) {
    //             boundGraph[key] = unboundValue.bind(null, credentials, tenant);
    //         } else {
    //             // we don't need to do anything re: binding the inputs if it's not a function or doesn't have the convention so just copy it to the "bound" instance 
    //             boundGraph[key] = unboundValue;
    //         }
    //     }
    //     return boundGraph;
    // }

    // new BoundGraph(unboundGraph, credentials, tenant);
    // bindCredentialsToGraph(unboundGraph, credentials, tenant)