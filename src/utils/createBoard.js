export function createBoard() {
    const divs = []
    const bombs = []

    let random;
    for (let i = 0; i < 5; i ++) {

        random = Math.floor(Math.random() * 100)
        
        while (bombs.includes(random)) {
            random = Math.floor(Math.random() * 100)
        
        }
        bombs.push(random)
        
        
    }
    for (let i = 0; i < 100; i ++) {

        if (bombs.includes(i)) {

            divs.push('bomb')
        } else {

            divs.push(i)

        }
    }
    console.log(divs);
    
    return divs
}