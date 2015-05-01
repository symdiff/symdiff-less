var less = require('less');

function symdiffLESS(lessString) {
    return less.render(lessString, {
        async: false
    }, function (e, output) {
        //TODO
        console.log(e, output);
        return output.css;
    });
}

module.exports = symdiffLESS;