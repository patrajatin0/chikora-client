const Header = () => {
    return (
        <>
            <div className="flex justify-around p-4 bg-gray-600 fixed w-full h-20 items-center shadow-2xl">
                <div>logo</div>
                <div>
                    <ul className="flex gap-4">
                        <li className="text-orange-400 font-bold hover:text-orange-500 cursor-pointer">Home</li>
                        <li className="text-orange-400 font-bold hover:text-orange-500 cursor-pointer">About</li>
                        <li className="text-orange-400 font-bold hover:text-orange-500 cursor-pointer">Contact</li>
                        <li className="text-orange-400 font-bold hover:text-orange-500 cursor-pointer">Login</li>
                    </ul>
                </div>
            </div>

        </>
    )
}
export default Header