import { makeMarkup } from './make-markup'
const key = '48306443-446e4eebc6203163013c3f315'
const color = 'pink'

import {perPage} from "./pagination"
import {pageVar} from "./pagination"

export const getImgages = (pageNumber, page) => {
    const API = `https://pixabay.com/api/?&key=${key}&orientation='horizontal'&colors=${color}&page=${page}&per_page=${pageNumber}`
    return fetch(API).then(data => data.json()).then(data => makeMarkup(data))
}
getImgages(perPage, pageVar)