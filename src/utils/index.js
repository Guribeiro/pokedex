export const filter = (stats, attr) =>{
    return stats.filter((item) =>{
        return item.stat.name === attr
    })
}
