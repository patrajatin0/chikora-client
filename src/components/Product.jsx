const Product = ({ productData }) => {
    return (
        <div className="" >
            <div className="p-4 text-center bg-gray-500 rounded-2xl ">
                <h1 className="text-2xl font-medium text-gray-300 ">{productData?.productName}</h1>
                <img className="w-80 h-80 rounded-2xl m-4" src={productData?.image} alt="" />
                <div className="flex justify-around m-2">
                    <span className="text-orange-400 font-bold">{productData?.weight}</span>
                    <span className="text-orange-400 font-bold ">₹ {productData?.price}</span>
                </div>
                <div className="flex justify-around m-2">
                    <span className="text-green-400 font-bold"> Stock {productData?.stock}</span>
                    <span className="text-green-400 font-bold" > Location {productData?.found}</span>
                </div>
                <button className="bg-green-400 p-2 rounded-lg text-gray-100 text-sm font-bold hover:bg-green-500 cursor-pointer">BUY NOW</button>
            </div>
        </div>
    )
}
export default Product