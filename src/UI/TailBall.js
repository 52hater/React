

export default function TailBall({ num }) {

    const bcolor = [
        'bg-red-600',
        'bg-orange-500',
        'bg-lime-600',
        'bg-blue-600',
        'bg-purple-600'
    ]

    const ballColor = `w-16 h-16 m-3
                        flex justify-center items-center
                        ${bcolor[parseInt(num / 10)]} text-white
                        font-bold text-xl
                        rounded-full`

    return (
        <div className={ballColor}>
            {num}
        </div>
    )
}
