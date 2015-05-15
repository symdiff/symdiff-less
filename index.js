var gonzales = require('gonzales-pe');

function walk(node, fn) {
    fn(node);
    if (node.content && node.content.forEach) {
        node.content.forEach(function(child) {
            walk(child, fn);
        });
    }
}

function symdiffLESS(lessString) {
    var ast;
    try {
        ast = gonzales.parse(lessString, {
            syntax: 'less'
        });
    } catch(err) {
        return [];
    }
    if (!ast) {
        return [];
    }
    var classes = [];
    walk(ast, function(node) {
        if (node.type === 'class') {
            node.content.forEach(function(clazzContent) {
                if (clazzContent.type === 'ident') {
                    classes.push(clazzContent.content);
                }
            });
        }
    });
    return classes;
}

module.exports = symdiffLESS;