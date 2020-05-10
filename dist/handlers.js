"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onError = (error) => {
    if (error.stderr) {
        process.stderr.write(error.stderr);
    }
    else {
        console.log(error);
    }
};
//# sourceMappingURL=handlers.js.map