//variaveis input
let m1 = document.getElementById('MSG1')
let m2 = document.getElementById('MSG2')
let m3 = document.getElementById('MSG3')
let m4 = document.getElementById('MSG4')

//variaveis output
let s1 = document.getElementById('saida1')
let s2 = document.getElementById('saida2')
let s3 = document.getElementById('saida3')
let s4 = document.getElementById('saida4')

let alfabeto = 'abcdefghijklmnopqrstuvwxyz'


/////funcao da base 64

function b64ec(){
    let base64 = btoa(m1.value)
    s1.innerHTML = base64
}

function b64dc(){
    let base64dc = atob(m2.value)
    s2.innerHTML = base64dc
}

///////funcao da cifra de cesar

function codecesar(){
    let codigo = m3.value
    let resultado = ""
    

    for(let l  of codigo){
        if(l == " ") continue;
        l = l.toLowerCase()
        let pag = alfabeto.indexOf(l)
        let newpag = (pag + 3) % alfabeto.length
        l = alfabeto.charAt(newpag)
        resultado += l 
        s3.value = resultado
    }

}


function decodcesar(){
    let codigo = m4.value
    let resultado = ""
    

    for(let l  of codigo){
        if(l == " ") continue;
        l = l.toLowerCase()
        let pag = alfabeto.indexOf(l)
        let newpag = (pag - 3) % alfabeto.length
        l = alfabeto.charAt(newpag)
        resultado += l 
        s4.value = resultado
    }

}         