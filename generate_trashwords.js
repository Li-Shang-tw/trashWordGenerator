function trashwordGenerate(person) {

  //defined material


  const personList = {
    dev: "工程師",
    des: "設計師",
    founder: "創業家"

  }

  const taskList = {
    dev: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    des: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    founder: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢', "發大財", '挖石油',
      '蓋迪士尼', '愛情摩天輪', '蓋賽馬場']

  }

  const phraseList = ['很簡單', '很容易', '很快', '很正常']

  //排除例外 沒有輸入值
  if (!person) {
    return '你還沒決定對誰講幹話'
  }


  //  create a trashword collection

  let trashword = ''

  // determine  person
  trashword += personList[person]

  //generate task 
  let length = taskList[`${person}`].length

  let indexOfTask = Math.floor(Math.random() * length)

  const task = taskList[`${person}`][indexOfTask]
  trashword += task
  console.log(person)

  //generate phrase
  let indexOfPhrase = Math.floor(Math.random() * phraseList.length)
  let phrase = phraseList[indexOfPhrase]
  trashword += phrase



  return trashword
}


// export generatePassword function for other files to use
module.exports = trashwordGenerate
