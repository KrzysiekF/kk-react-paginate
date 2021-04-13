"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PagerCalculations = /** @class */ (function () {
    function PagerCalculations() {
    }
    PagerCalculations.pagesCount = function (elementsCount, pageSize) {
        return Math.ceil(elementsCount / pageSize);
    };
    PagerCalculations.calcStartRange = function (currentPage, pageSize) {
        return (currentPage - 1) * pageSize + 1;
    };
    PagerCalculations.calcEndRange = function (currentPage, pageSize) {
        return currentPage * pageSize;
    };
    PagerCalculations.canDisplayElement = function (index, currentPage, pageSize) {
        return (index + 1 >= this.calcStartRange(currentPage, pageSize) &&
            index + 1 <= this.calcEndRange(currentPage, pageSize));
    };
    return PagerCalculations;
}());
exports.default = PagerCalculations;
//# sourceMappingURL=PagerCalculations.js.map