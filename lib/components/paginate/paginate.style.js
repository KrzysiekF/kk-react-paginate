"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_jss_1 = require("react-jss");
var globalStyle_1 = __importDefault(require("../../style/globalStyle"));
exports.default = react_jss_1.createUseStyles(function () { return ({
    pagination: {
        listStyle: 'none',
        fontSize: '1rem',
        padding: 0,
        margin: 0,
        textAlign: 'left',
        '& li': {
            display: 'inline-block',
        },
        '& button': {
            fontSize: '1rem',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            margin: 0,
            padding: '0.5em 0',
            textAlign: 'center',
            width: '1.5em',
        },
        '& li:first-child button': {
            width: 'auto',
        },
        '& li:last-child button': {
            width: 'auto',
        },
    },
    active: {
        '& button': {
            color: globalStyle_1.default.colorPrimary,
        },
    },
}); });
//# sourceMappingURL=paginate.style.js.map