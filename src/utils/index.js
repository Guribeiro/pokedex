export const filter = (arr, attr) =>{
    return arr.filter((item) =>{
        return item.favorite === attr
    })
}
