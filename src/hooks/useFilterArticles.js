import {useGlobals} from "../contexts/Global";
import {useEffect, useState} from "react";
import {multiFilter} from "../helpers/Generics";

/**
 * Filters articles by properties and filter (q), you can reach language deep levels with nested property
 * @param properties
 * @param q
 * @param nested
 * @returns {[]}
 */
export const useFilterArticles = (properties, q = false, nested = false) => {
    const [{articles}] = useGlobals();
    const [fArticles, setFArticles] = useState(articles);

    useEffect(() => {
        setFArticles(articles && !articles[0].fake ? multiFilter(articles, properties, q, nested) : articles);
    }, [articles, q]);

    return [fArticles, setFArticles];
};
