/**
 * 返回正确的 class 总类别
 * @param basicClass
 * @param defClass
 * @param typeClass
 * @param situation
 */
const classDefine = (basicClass, defClass, typeClass, situation) => {
    let finalClassList = `${basicClass} `
    for(let key in situation){
        if(situation.hasOwnProperty(key)){
            if(defClass.includes(key)){
                if(situation[key]){
                    finalClassList = finalClassList + `${basicClass}--${key} `
                }
            }
            if(typeClass.includes(key)){
                finalClassList = finalClassList + `${basicClass}--${situation[key]} `
            }
        }
    }

    return finalClassList.trim()
}

export default classDefine
