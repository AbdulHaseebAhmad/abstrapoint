import React from 'react'

export default function VerticalLine({distance}) {
    return (
        <div className={`bg-neutralsilver absolute h-[415px] top-[-405px] woodo:h-[1305px] woodo:top-[-1338px] z-10`}
            style={{right:`${distance}%`}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height='100%' viewBox="0 0 19 1940" fill="none" className='bg-neutralsilver'>
                <path d="M10.9366 15.3983L18.0965 0.397558L0.776025 0.399317L7.9366 15.3986L10.9366 15.3983ZM7.9769 1924.62L0.816959 1939.62L18.1375 1939.61L10.9769 1924.62L7.9769 1924.62ZM7.93656 13.8986L7.97693 1926.12L10.9769 1926.12L10.9366 13.8983L7.93656 13.8986Z" fill="#FBB957" />
            </svg>
        </div>
    )
}

