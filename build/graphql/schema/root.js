"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.root = void 0;
var apollo_server_1 = require("apollo-server");
exports.root = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Query {\n        root: String\n    }\n    type Mutation {\n        root: String\n    }\n"], ["\n    type Query {\n        root: String\n    }\n    type Mutation {\n        root: String\n    }\n"])));
var templateObject_1;
