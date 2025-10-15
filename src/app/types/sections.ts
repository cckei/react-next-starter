interface PageType {
    id: string
    name: string
    title: string
    description: string
    image: string
    link: string
    meta: {
        title: string
        description: string
        image: string
        link: string
    }
    sections: any[]
}

interface SectionType {
    id: string
    name: string
    title: string
    description: string
    image: string
    link: string
}

interface ImageTextAdjacentType {
    id: string
    name: string
    title: string
    description: string
    image: string
    link: string
    reverse: boolean
    align: string
}

export type { SectionType, PageType, ImageTextAdjacentType }