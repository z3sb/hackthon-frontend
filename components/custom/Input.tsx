import { Children, ReactNode } from "react"

interface Iprops {
    label:ReactNode
    placeholder:string
    register:any
}

const Input = ({placeholder, label,  register}:Iprops) => {
    return (
        <div className="relative max-w-xs">
           <label>{label}</label>
            <input
                type="text"
                {...register('textInput')}
                placeholder={placeholder}
                className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
        </div>
    )
}

export default Input