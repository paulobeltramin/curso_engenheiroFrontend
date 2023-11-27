

const mediaAlunos = [
    {
        nome: "lucas",
        nota: 5.9
    },

    {
        nome: "joao",
        nota: 6.5
    },

    {
        nome: "paulo",
        nota: 6.1
    },

    {
        nome: "marcos",
        nota: 4
    }

];

const mediaFinal = () => {
    const mediaAluno = mediaAlunos;

    for (let i = 0; i < mediaAluno.length; i++) {
        if (mediaAluno[i].nota >= 6) {
            return mediaAluno[i]
        }
    }

}
mediaFinal()