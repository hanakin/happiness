var path = require('path');
var sane = require('../');
var test = require('tape');
var filePath = path.resolve('./bin/cmd.js');

test('api: lintFiles', function (t) {
    t.plan(3);
    sane.lintFiles([], { cwd: 'bin' }, function (err, result) {
        t.error(err, 'no error while linting');
        t.equal(typeof result, 'object', 'result is an object');
        t.equal(result.errorCount, 0);
    });
});

test('api: lintText', function (t) {
    t.plan(3);
    sane.lintText('console.log("hi there");\n', function (err, result) {
        t.error(err, 'no error while linting');
        t.equal(typeof result, 'object', 'result is an object');
        t.equal(result.errorCount, 1, 'should have used single quotes');
    });
});

test('api: usage', function (t) {
    t.plan(6);
    sane.lintFiles([], { cwd: 'bin' }, function (err, result) {
        t.error(err, 'no error while linting');
        t.equal(typeof result, 'object', 'result is an object');
        t.equal(result.errorCount, 0, 'error count 0');
        t.equal(path.resolve(result.results[0].filePath), filePath, 'error filepath correct');
    });
});
