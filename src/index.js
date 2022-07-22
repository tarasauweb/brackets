module.exports = function check(str, bracketsConfig) {
  let brackets = new Map(bracketsConfig)
    let res = []
    str = str.split('')
    for(let key = 0 ; key<str.length;key++){
        if(str[key]!==brackets.get(res[res.length-1])){
            res.push(str[key])
        }
        else{
            res.pop()
        }
    }
    if(res.length === 0) {
        return true
    }
    else{
        return false
    }
}
