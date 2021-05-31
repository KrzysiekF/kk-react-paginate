import * as React from 'react';
import { ReactElement, useState } from 'react';
import PagerCalculations from '../../helpers/PagerCalculations';
import useStyles from './paginate.style';

export interface Props {
    data: Array<ReactElement>;
    pageSize?: number;
    displayedPages?: number;
    nextLabel?: string | JSX.Element;
    prevLabel?: string | JSX.Element;
}

const Paginate = ({
    data,
    pageSize = 5,
    nextLabel = '»',
    prevLabel = '«',
    displayedPages = 5,
}: Props): React.ReactElement | null => {
    if (!data) {
        return null;
    }

    const pagesCount = PagerCalculations.pagesCount(data.length, pageSize);
    const stylesClasses = useStyles();
    const [currentPage, setCurrentPage] = useState(1);
    let prevSpaceAdded = false;
    let nextSpaceAdded = false;

    const renderList = () => {
        return data.map((element, index) =>
            PagerCalculations.canDisplayElement(index, currentPage, pageSize) ? element : null,
        );
    };

    const goToPage = (index: number) => {
        setCurrentPage(index);
    };

    const setPrevPage = () => {
        const prevPage = currentPage - 1;

        if (prevPage < 1) {
            return;
        }

        goToPage(prevPage);
    };

    const setNextPage = () => {
        const nextPage = currentPage + 1;

        if (nextPage > pagesCount) {
            return;
        }

        goToPage(nextPage);
    };

    const renderPaginationButtons = () => {
        const buttons: Array<ReactElement> = [];

        for (let i = 1; i <= pagesCount; i++) {
            if (PagerCalculations.shouldShowPageButton(i, currentPage, displayedPages, pagesCount)) {
                buttons.push(
                    <li className={i === currentPage ? stylesClasses.active : ''} key={`krp-button-${i}`}>
                        <button onClick={() => goToPage(i)}>{i}</button>
                    </li>,
                );
            }

            if (PagerCalculations.shouldAddSpace(i, currentPage, displayedPages, pagesCount).prev && !prevSpaceAdded) {
                buttons.push(<span key={`krp-button-${i}`}>...</span>);
                prevSpaceAdded = true;
            }

            if (PagerCalculations.shouldAddSpace(i, currentPage, displayedPages, pagesCount).next && !nextSpaceAdded) {
                buttons.push(<span key={`krp-button-${i}`}>...</span>);
                nextSpaceAdded = true;
            }
        }

        return (
            <ul className={`krp__pagination-list ${stylesClasses.pagination}`}>
                <li key={'krp-button-prev'}>
                    <button onClick={setPrevPage}>{prevLabel}</button>
                </li>
                {buttons}
                <li key={'krp-button-next'}>
                    <button onClick={setNextPage}>{nextLabel}</button>
                </li>
            </ul>
        );
    };

    return (
        <div className={'krp'}>
            <div className={'krp__list'}>{renderList()}</div>
            <div className={'krp__pagination'}>{renderPaginationButtons()}</div>
        </div>
    );
};

export default Paginate;
