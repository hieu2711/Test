function Item({image}) {
    return ( 
        <div className="text-center">
        <img src={image} alt={image} className="w-full h-auto mb-4" />
        <h3 className="text-lg font-semibold text-[#222222] mb-2">[What happen] How to create</h3>
        <div className="flex justify-between">
            <p className="text-[#666666] mb-2">2,500 won</p>
            <span className="text-[#666666] mr-2"><span className="text-[#fa7b26]">❤ </span>236</span>
        </div>
    </div>
     );
}

export default Item;