
const variantStyles = {
    submit: "bg-green-500 hover:bg-green-600",
    reset: "bg-orange-400 hover:bg-orange-600"
}

export function CustomButton ({variant, handleClick, title}) {

    return (
        <button
            onClick={handleClick}
            className={`border-1 border-white rounded-md
                px-4 py-2 text-md text-white
                hover:bg-gray-600 cursor-pointer ${variantStyles[variant]}`}>
            {title}
        </button>
    )
}