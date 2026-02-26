import { codeAutoValues } from "./codeAutoValues";
import { handleComma } from "./handleComma";

export const getCityInfo = (query, data) => {
    if (data.length === 0 || !data) return [];
    if (!query) return [];

    // We forget about DC, because it has no relevance
    return data
        .filter(n => n.NOMBRE && handleComma(n.NOMBRE).toLowerCase().includes(query.toLowerCase())
            || n.CODAUTO && codeAutoValues[n.CODAUTO].toLowerCase().includes(query.toLowerCase())
        )
        .map(({ CODAUTO, CPRO, DC, CMUN, NOMBRE }) => {
            return {
                NAME: handleComma(NOMBRE),
                AUTO: codeAutoValues[CODAUTO],
                CODE: `${CPRO}${CMUN}`                
            }
        });
};