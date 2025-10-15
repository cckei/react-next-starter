import ImageTextAdjacent from '@/app/components/sections/image-text-adjacent'
import { ImageTextAdjacentType } from '@/app/types/sections'


export default function Sections({ sections }: { sections: any[] }) {
    return (
        <div>
            { sections && sections.length > 0 && sections.map((section: any, index: number) => (
                <div key={section.id + index}>
                    {section.id === 'image-text-adjacent' && <ImageTextAdjacent key={section.id + index} data={section as ImageTextAdjacentType} />}
                </div>
            ))}
        </div>
    )
}