function calcular(){
    let nome = prompt('Qual é o nome do aluno?')
    let primeiraNota = prompt(`Qual a primeira nota de ${nome}?`)
    let segundaNota = prompt(`Além de ${primeiraNota}, qual foi a outra nota de ${nome}?`)
    let res = document.getElementById('res')
    let soma = Number.parseInt(primeiraNota) + Number.parseInt(segundaNota)
    let media = soma / 2

    res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>...<p/>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${primeiraNota} e ${segundaNota}</mark>.`
    res.innerHTML += `<p>A média final será <mark>${media}</mark>!<p/>`
}