# KK React Pagination

[![npm package](https://img.shields.io/npm/v/kk-react-paginate.png?style=flat-square)](https://www.npmjs.org/package/kk-react-paginate)

Pagination component for ReactJS


KK React Pagination
===================

Installation / Download
-----------------------

#### NPM
`npm i kk-react-paginate`

Import
--------
#### ES6:
`import Paginate from 'kk-react-paginate';`

Examples
--------
`<Paginate data=[<div>Element #1</div>] />`

Options
-------

| option      | default         | description |
|-------------|-----------------|-------------|
| `data`  | `[]` (`Array<Element>`)  |             |
| `pageSize`  | `5` (`number`)  |             |
| `nextLabel`  | `»` (`string` or `Element`)  |             |
| `prevLabel`  | `«` (`string` or `Element`)  |             |
| `displayedPages`  | `5` (`number`)  | How many page numbers should be visible while navigating. |
| `emptyListMsg`  | `Nothing to display` (`string` or `Element`)  |  |
| `align`  | `center` (`left` or `center` or `right`)  |  |