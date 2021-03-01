"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.makePutRequest = exports.makeDeleteRequest = exports.makePostRequest = exports.makeGetRequest = exports.makePutAxios = exports.makeDeleteAxios = exports.makePostAxios = exports.makeGetAxios = exports.makeHeader = exports.hasValidEmail = exports.hasOnlyNumbers = void 0;
var axios_1 = require("axios");
var base_64_1 = require("base-64");
var R = require("ramda");
var validEmailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var onlyNumberRegex = /^[0-9]+$/g;
exports.hasOnlyNumbers = function (str) { return onlyNumberRegex.test(str); };
exports.hasValidEmail = function (email) { return validEmailFormat.test(email); };
var encodeCredentials = function (username, password) {
    return R.compose(R.concat("Basic "), base_64_1.encode)(username + ":" + password);
};
exports.makeHeader = function (username, password) { return ({
    headers: {
        "Content-Type": "application/json",
        Authorization: encodeCredentials(username, password)
    }
}); };
var makeResponse = function (response) { return ({
    data: response.data,
    status: response.status
}); };
var makeReasonE = function (reason) { return ({
    status: reason.response ? reason.response.status : 0,
    message: reason.response
        ? {
            text: reason.response.statusText,
            data: reason.response.data
        }
        : "Domain Error"
}); };
exports.makeGetAxios = function (url, config) {
    return config ? axios_1["default"].get(url, config) : axios_1["default"].get(url);
};
exports.makePostAxios = function (url, config, data) {
    return data ? axios_1["default"].post(url, data, config) : axios_1["default"].post(url, {}, config);
};
exports.makeDeleteAxios = function (url, config) {
    return axios_1["default"]["delete"](url, config);
};
exports.makePutAxios = function (url, config, data) {
    return data ? axios_1["default"].put(url, data, config) : axios_1["default"].put(url, {}, config);
};
exports.makeGetRequest = function (url) { return function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, exports.makeGetAxios(url, config)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, makeResponse(response)];
            case 2:
                err_1 = _a.sent();
                throw makeReasonE(err_1);
            case 3: return [2 /*return*/];
        }
    });
}); }; };
exports.makePostRequest = function (url, data) { return function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, exports.makePostAxios(url, config, data)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, makeResponse(response)];
            case 2:
                err_2 = _a.sent();
                throw makeReasonE(err_2);
            case 3: return [2 /*return*/];
        }
    });
}); }; };
exports.makeDeleteRequest = function (url) { return function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, exports.makeDeleteAxios(url, config)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, makeResponse(response)];
            case 2:
                err_3 = _a.sent();
                throw makeReasonE(err_3);
            case 3: return [2 /*return*/];
        }
    });
}); }; };
exports.makePutRequest = function (url, data) { return function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, exports.makePutAxios(url, config, data)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, makeResponse(response)];
            case 2:
                err_4 = _a.sent();
                throw makeReasonE(err_4);
            case 3: return [2 /*return*/];
        }
    });
}); }; };
