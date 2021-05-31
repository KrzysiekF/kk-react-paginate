class PagerCalculations {
    static pagesCount(elementsCount: number, pageSize: number): number {
        return Math.ceil(elementsCount / pageSize);
    }

    static calcStartRange(currentPage: number, pageSize: number): number {
        return (currentPage - 1) * pageSize + 1;
    }

    static calcEndRange(currentPage: number, pageSize: number): number {
        return currentPage * pageSize;
    }

    static canDisplayElement(index: number, currentPage: number, pageSize: number): boolean {
        return (
            index + 1 >= this.calcStartRange(currentPage, pageSize) &&
            index + 1 <= this.calcEndRange(currentPage, pageSize)
        );
    }

    static calculateRanges(displayedPages: number, currentPage: number): { minPage: number; maxPage: number } {
        const range = Math.floor(displayedPages / 2);
        const minPage = currentPage - range;
        const maxPage = currentPage + range;

        return { minPage, maxPage };
    }

    static shouldShowPageButton(
        page: number,
        currentPage: number,
        displayedPages: number,
        pagesCount: number,
    ): boolean {
        let shouldShow = false;
        const range = PagerCalculations.calculateRanges(displayedPages, currentPage);

        if (page === 1 || (page >= range.minPage && page <= range.maxPage) || page === pagesCount) {
            shouldShow = true;
        }

        return shouldShow;
    }

    static shouldAddSpace(
        page: number,
        currentPage: number,
        displayedPages: number,
        pagesCount: number,
    ): { prev: boolean; next: boolean } {
        const shouldAdd = { prev: false, next: false };

        const range = this.calculateRanges(displayedPages, currentPage);

        if (page > 1 && page < range.minPage) {
            shouldAdd.prev = true;
        }

        if (page < pagesCount && page > range.maxPage) {
            shouldAdd.next = true;
        }

        return shouldAdd;
    }
}

export default PagerCalculations;
