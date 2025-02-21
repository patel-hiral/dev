import { useState } from 'react'
export default function Counter() {
    const [count, setCount] = useState(0)

    const handleIncreament = () => {
        setCount(count + 1)
    }
    const handleDecrement = () => {
        if (count === 0) {
            return
        }
        setCount(count - 1)
    }
    return (
        <div className='flex items-center gap-4 my-6'>
            <button onClick={() => handleDecrement()} className='px-4 py-1 cursor-pointer text-white rounded bg-slate-600'>-</button>
            <span className='text-2xl'>{count}</span>
            <button onClick={() => handleIncreament()} className='px-4 py-1 cursor-pointer text-white rounded bg-slate-600'>+</button>
        </div>
    )
}
