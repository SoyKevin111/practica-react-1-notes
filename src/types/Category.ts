 export interface Category {
    id: number;
    name: string;
    description: string;
}

export type CategoryColor = Category & { //para la ui
    color: string;
}