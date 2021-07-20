function Sidebar({products}){
    let sizes = products.reduce((acc,cv) => {
        acc = acc.concat(cv.availableSizes);
        return acc;
    },[])

    let uniqueSizes = [...new Set(sizes)];

    console.log(sizes);
    return(
        <aside className = "flex-20 sidebar">
            <div className = "flex wrap">
              {uniqueSizes.map((size) => {
                 return <span className = "size active">{size}</span>
              })}

            </div>
        </aside>
    )
}

export default Sidebar;