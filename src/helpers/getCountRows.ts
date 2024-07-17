const ITEMS_IN_LINE = 5;

export function getCountRows(length :number) {
    const rows = Math.floor(length / ITEMS_IN_LINE)

    if (length % ITEMS_IN_LINE) {
        return rows + 1
    }

    return rows
}
