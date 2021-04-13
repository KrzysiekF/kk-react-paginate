declare class PagerCalculations {
    static pagesCount(elementsCount: number, pageSize: number): number;
    static calcStartRange(currentPage: number, pageSize: number): number;
    static calcEndRange(currentPage: number, pageSize: number): number;
    static canDisplayElement(index: number, currentPage: number, pageSize: number): boolean;
}
export default PagerCalculations;
//# sourceMappingURL=PagerCalculations.d.ts.map