"use strict";
exports.__esModule = true;
exports.ZENDESK = void 0;
var ZENDESK;
(function (ZENDESK) {
    var API;
    (function (API) {
        API.ticket = function (domain, id) {
            return domain + "/api/v2/tickets/" + id + ".json";
        };
    })(API = ZENDESK.API || (ZENDESK.API = {}));
    var Errors;
    (function (Errors) {
        Errors.errors = {
            INVALID_CREDENTIALS: {
                code: "INVALID_CREDENTIALS",
                message: "Invalid credentials. Update the connection details."
            },
            INVALID_DOMAIN_URL: {
                code: "INVALID_DOMAIN_URL",
                message: "Invalid domain URL."
            },
            INVALID_TICKET_ID: {
                code: "INVALID_TICKET_ID",
                message: "Ticket id doesn't exist."
            }
        };
    })(Errors = ZENDESK.Errors || (ZENDESK.Errors = {}));
})(ZENDESK = exports.ZENDESK || (exports.ZENDESK = {}));
