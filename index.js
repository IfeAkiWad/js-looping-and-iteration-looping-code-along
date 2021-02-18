// Code your solutions in this file
const names = ['Lisa', 'Kaitlin', 'Jan']
const event = 'surprise'

function writeCards(names, event) {
    let msg = []
    for (let i = 0; i < names.length; i++){
        
        msg.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
        // console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return msg
}

function countDown(int){
    // takes in any postive integer, 
    // from that interger counts down to zero usin console.log()
    // let int = 11
    while (int >= 0) {
        console.log(int)
        int--
    }
    // return int()
}