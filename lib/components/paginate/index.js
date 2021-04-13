"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_1 = require("react");
var PagerCalculations_1 = __importDefault(require("../../helpers/PagerCalculations"));
var paginate_style_1 = __importDefault(require("./paginate.style"));
var Paginate = function (_a) {
    var data = _a.data, _b = _a.pageSize, pageSize = _b === void 0 ? 5 : _b;
    if (!data) {
        return null;
    }
    var pagesCount = PagerCalculations_1.default.pagesCount(data.length, pageSize);
    var stylesClasses = paginate_style_1.default();
    var _c = react_1.useState(1), currentPage = _c[0], setCurrentPage = _c[1];
    var renderList = function () {
        return data.map(function (element, index) {
            return PagerCalculations_1.default.canDisplayElement(index, currentPage, pageSize) ? element : null;
        });
    };
    var goToPage = function (index) {
        setCurrentPage(index);
    };
    var setPrevPage = function () {
        var prevPage = currentPage - 1;
        if (prevPage < 1) {
            return;
        }
        goToPage(prevPage);
    };
    var setNextPage = function () {
        var nextPage = currentPage + 1;
        if (nextPage > pagesCount) {
            return;
        }
        goToPage(nextPage);
    };
    var renderPaginationButtons = function () {
        var buttons = [];
        var _loop_1 = function (i) {
            buttons.push(React.createElement("li", { className: i === currentPage ? stylesClasses.active : '', key: "krp-button-" + i },
                React.createElement("button", { onClick: function () { return goToPage(i); } }, i)));
        };
        for (var i = 1; i <= pagesCount; i++) {
            _loop_1(i);
        }
        return (React.createElement("ul", { className: "krp__pagination-list " + stylesClasses.pagination },
            React.createElement("li", { key: 'krp-button-prev' },
                React.createElement("button", { onClick: setPrevPage }, "prev")),
            buttons,
            React.createElement("li", { key: 'krp-button-next' },
                React.createElement("button", { onClick: setNextPage }, "next"))));
    };
    return (React.createElement("div", { className: 'krp' },
        React.createElement("div", { className: 'krp__list' }, renderList()),
        React.createElement("div", { className: 'krp__pagination' }, renderPaginationButtons())));
};
exports.default = Paginate;
//# sourceMappingURL=index.js.map