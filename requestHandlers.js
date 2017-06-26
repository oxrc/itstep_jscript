function start() {
    console.log("Request handler 'start' was called.");
    return 'Hello from start';
}

function upload() {
    console.log("Request handler 'upload' was called.");
    return 'Hello from upload';
}

exports.start = start;
exports.upload = upload;