"use strict";
exports.__esModule = true;
exports.ErrorMessages = exports.makeErrorsWithMessage = exports.makeInvalidErrors = void 0;
var t = require("io-ts");
var automation_utils_1 = require("@skitter/automation-utils");
var R = require("ramda");
exports.makeInvalidErrors = function (text, data) { return ({
    status: 100,
    message: { text: text, data: data }
}); };
exports.makeErrorsWithMessage = function (code, message) { return function (optionalMessage) {
    return optionalMessage != " " && optionalMessage
        ? automation_utils_1.makeError(code, R.concat(optionalMessage, R.concat(" ", message)))
        : automation_utils_1.makeError(code, message);
}; };
var errorCodes = t.union([
    t.literal("INVALID_CREDENTIALS"),
    t.literal("INVALID_DOMAIN_URL"),
    t.literal("INVALID_TICKET_ID"),
]);
exports.ErrorMessages = function (code, message) { return function (optionalMessage) {
    return optionalMessage
        ? automation_utils_1.makeError(code, R.concat(optionalMessage, R.concate(" ", message)))
        : automation_utils_1.makeError(code, message);
}; };
