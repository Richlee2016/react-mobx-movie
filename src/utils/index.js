export const splarr = arr => n => arr.splice(0,n); 

export const cutarr = (arr,m,n) => {
    let resarr = splarr(arr);
    let res = [];
    for (var i = 0; i < n; i++) {
        res.push(resarr(m));
    }
    return res;
}
