

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


mediaAlunos.map((item) => {
    if (item.nota >= 6) {
        return item
    }
})


