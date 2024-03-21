class IndexContoler {
    constructor(){
        this.alunos = [];
    }
adicionarAluno(){
    let id_aluno = this.alunos.length + 1 
    let aluno = new Aluno(id_aluno,'Anderson','email@gmail.com')
    this.alunos.push(aluno)
    console.log(aluno)
}
mostrarTodos(){
    let texto
    for (let alu of this.alunos){
        texto+= 'ID' + alu.id_aluno+' - ';
        texto+= 'NOME' + alu.nome+' - ';
        texto+= 'EMAIL' + alu.email+' - ';
        document.getElementById('main').innerHTML = texto

    }
            
}



}

var indexContoler = new IndexContoler();