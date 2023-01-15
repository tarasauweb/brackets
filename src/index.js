module.exports = function check(str, bracketsConfig) {
    // объявляем объект по ключам которого будем сравнивать скобки
    let brackets = {};
    // объясляем массив куда будем складывать скобки
    let stack = [];
    let res ;
    // заносим config в объект, где ключи явояются открывающимися скобками , а значения закрывающиеся
    bracketsConfig.forEach(element => {
        brackets[element[0]] = element[1]
    });
    for(let i = 0 ; i < str.length ; i++){
        // проверяем есть в стеке скобка соответствующая условию, если нет заносим в стек
        if(str[i] !== brackets[`${stack[stack.length-1]}`]){
            stack.push(str[i])
        }
        else{
            stack.pop()
        }
    }
    stack.length === 0 ? res = true : res = false
    return res
}
