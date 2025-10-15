import Image from 'next/image'
import { ImageTextAdjacentType } from '@/app/types/sections'

export default function ImageTextAdjacent({ data }: { data: ImageTextAdjacentType }) {

    const reverse = data.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
    const align = data.align === 'top' ? 'items-start' : data.align === 'middle' ? 'items-center' : 'items-end'

    return (
        <div className="py-10">
            <div className="container mx-auto">
                <h1>{data.title}</h1>
                <div className={`flex flex-col ${reverse} ${align}`}>
                    <div className="w-full md:w-1/2">
                        {
                            data.image && (
                                <Image className="w-full h-full object-cover" src={data.image} alt={data.title} width={500} height={500} unoptimized={true}/>
                            )
                        }   
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2>{data.title}</h2>
                        <p>{data.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}