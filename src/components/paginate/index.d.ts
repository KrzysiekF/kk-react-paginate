import {ReactElement} from "react";

export interface Paginate {
    data: Array<ReactElement>;
    pageSize?: number;
}