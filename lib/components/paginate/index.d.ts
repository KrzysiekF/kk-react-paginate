import * as React from 'react';
import { ReactElement } from 'react';
export interface Props {
    data: Array<ReactElement>;
    pageSize?: number;
}
declare const Paginate: ({ data, pageSize }: Props) => React.ReactElement | null;
export default Paginate;
//# sourceMappingURL=index.d.ts.map