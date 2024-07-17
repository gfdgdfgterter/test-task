
export interface SquareSchema {
    anim: 'add'|'delete'|null
    items: SquareItem[]
}

export interface SquareItem {
    color: string;
}
