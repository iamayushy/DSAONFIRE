var merge = function(intervals) {
    intervals = intervals.sort((a, b) => a - b)
    let merge = []
    let temp = intervals[0]
    for(arr of intervals){
        if(arr[0] <= temp[1]){
            temp[1] = Math.max(arr[1], temp[1])
        }
        else{
            merge.push(temp)
            temp = arr
        }
    }
    merge.push(temp)
    return merge
};
