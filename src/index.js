module.exports = function check(str, bracketsConfig) {

    let openBrackets = ''
    let closeBrackets = ''
    let result = true
    let sameBrackets = []
    const stackOpenBrackets = []
    const isSame = [false, false]
    let index = -1

    if (str.length % 2 > 0) return false

    bracketsConfig.forEach(brackets => {
        if (brackets[0] === brackets[1]) sameBrackets.push(brackets[0])
        openBrackets += brackets[0].toString()
        closeBrackets += brackets[1].toString()
    })


    for (let i = 0; i <= str.length; i++) {
        if (sameBrackets.indexOf(str[i]) !== -1) {
            index = sameBrackets.indexOf(str[i])
            if (openBrackets.indexOf(str[i]) >= 0 && !isSame[index]) {
                stackOpenBrackets.push(str[i])
                isSame[index] = true
            } else if (closeBrackets.indexOf(str[i]) >= 0) {
                if (stackOpenBrackets.length === 0) {
                    result = false
                    break
                } else if (openBrackets.indexOf(stackOpenBrackets[stackOpenBrackets.length - 1]) !== closeBrackets.indexOf(str[i])) {
                    result = false
                    break

                } else {
                    isSame[index] = false
                    stackOpenBrackets.pop()
                }
            }
        } else {
            if (openBrackets.indexOf(str[i]) >= 0) {
                stackOpenBrackets.push(str[i])
            } else if (closeBrackets.indexOf(str[i]) >= 0) {
                if (stackOpenBrackets.length === 0) {
                    result = false
                    break
                } else if (openBrackets.indexOf(stackOpenBrackets[stackOpenBrackets.length - 1]) !== closeBrackets.indexOf(str[i])) {
                    result = false
                    break

                } else {
                    stackOpenBrackets.pop()
                }
            }
        }
    }
    return result

}

