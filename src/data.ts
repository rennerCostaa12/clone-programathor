const vagas = [
    {
        name: "Vaga de front-end",
        descricao: "Descrição da vaga front-end",
        local: "Remoto",
        tipo: "PJ",
        nivel: "Júnior",
        salario: 2500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBhFNzFz2C6UMsP9LRv6ZlVsJWQDBQRIbgSg&usqp=CAU"
    },
    {
        name: "Vaga de back-end",
        descricao: "Descrição da vaga back-end",
        local: "Presencial",
        tipo: "CLT",
        nivel: "Sênior",
        salario: 6000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBhFNzFz2C6UMsP9LRv6ZlVsJWQDBQRIbgSg&usqp=CAU"
    },
    {
        name: "Vaga de front-end",
        descricao: "Descrição da vaga front end",
        local: "Presencial",
        tipo: "CLT",
        nivel: "Pleno",
        salario: 4800,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBhFNzFz2C6UMsP9LRv6ZlVsJWQDBQRIbgSg&usqp=CAU"
    },
    {
        name: "Vaga de Vue JS",
        descricao: "Descrição da vaga Vue JS",
        local: "Remoto",
        tipo: "PJ",
        nivel: "Júnior",
        salario: 2500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBhFNzFz2C6UMsP9LRv6ZlVsJWQDBQRIbgSg&usqp=CAU"
    },
    {
        name: "Vaga de ReactJS",
        descricao: "Descrição da vaga React JS",
        local: "Remoto",
        tipo: "CLT",
        nivel: "Júnior",
        salario: 3000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBhFNzFz2C6UMsP9LRv6ZlVsJWQDBQRIbgSg&usqp=CAU"
    },
    {
        name: "Vaga de PHP",
        descricao: "Descrição da vaga PHP",
        local: "Remoto",
        tipo: "PJ",
        nivel: "Sênior",
        salario: 9000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBhFNzFz2C6UMsP9LRv6ZlVsJWQDBQRIbgSg&usqp=CAU"
    },
    {
        name: "Vaga de PHP",
        descricao: "Descrição da vaga PHP",
        local: "Presencial",
        tipo: "CLT",
        nivel: "Júnior",
        salario: 4000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBhFNzFz2C6UMsP9LRv6ZlVsJWQDBQRIbgSg&usqp=CAU"
    },
    {
        name: "Vaga de PHP",
        descricao: "Descrição da vaga PHP",
        local: "Presencial",
        tipo: "PJ",
        nivel: "Pleno",
        salario: 2500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBhFNzFz2C6UMsP9LRv6ZlVsJWQDBQRIbgSg&usqp=CAU"
    },
    {
        name: "Vaga de front-end",
        descricao: "Descrição da vaga front end",
        local: "Remoto",
        tipo: "CLT",
        nivel: "Pleno",
        salario: 4500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBhFNzFz2C6UMsP9LRv6ZlVsJWQDBQRIbgSg&usqp=CAU"
    },
    {
        name: "Vaga de front-end",
        descricao: "Descrição da vaga front end",
        local: "Presencial",
        tipo: "CLT",
        nivel: "Sênior",
        salario: 7600,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBhFNzFz2C6UMsP9LRv6ZlVsJWQDBQRIbgSg&usqp=CAU"
    },
    {
        name: "Vaga de NodeJS",
        descricao: "Descrição da vaga NodeJS",
        local: "Remoto",
        tipo: "PJ",
        nivel: "Júnior",
        salario: 1900,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBhFNzFz2C6UMsP9LRv6ZlVsJWQDBQRIbgSg&usqp=CAU"
    },
    {
        name: "Vaga de NodeJS",
        descricao: "Descrição da vaga NodeJS",
        local: "Remoto",
        tipo: "CLT",
        nivel: "Pleno",
        salario: 4900,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBhFNzFz2C6UMsP9LRv6ZlVsJWQDBQRIbgSg&usqp=CAU"
    },
    {
        name: "Vaga de VueJS",
        descricao: "Descrição da vaga VueJS",
        local: "Remoto",
        tipo: "PJ",
        nivel: "Júnior",
        salario: 2500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBhFNzFz2C6UMsP9LRv6ZlVsJWQDBQRIbgSg&usqp=CAU"
    },
    {
        name: "Vaga de VueJS",
        descricao: "Descrição da vaga VueJS",
        local: "Presencial",
        tipo: "CLT",
        nivel: "Sênior",
        salario: 7000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBhFNzFz2C6UMsP9LRv6ZlVsJWQDBQRIbgSg&usqp=CAU"
    },
    {
        name: "Vaga de ReactJS",
        descricao: "Descrição da vaga ReactJS",
        local: "Remoto",
        tipo: "Estágio",
        nivel: "Júnior",
        salario: 1200,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBhFNzFz2C6UMsP9LRv6ZlVsJWQDBQRIbgSg&usqp=CAU"
    },
    {
        name: "Vaga de VueJS",
        descricao: "Descrição da vaga ReactJS",
        local: "Remoto",
        tipo: "CLT",
        nivel: "Pleno",
        salario: 3000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBhFNzFz2C6UMsP9LRv6ZlVsJWQDBQRIbgSg&usqp=CAU"
    },
    {
        name: "Vaga de ReactJS",
        descricao: "Descrição da vaga ReactJS",
        local: "Remoto",
        tipo: "Estágio",
        nivel: "Júnior",
        salario: 575,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBhFNzFz2C6UMsP9LRv6ZlVsJWQDBQRIbgSg&usqp=CAU"
    },
    {
        name: "Vaga de ReactJS",
        descricao: "Descrição da vaga ReactJS",
        local: "Remoto",
        tipo: "Estágio",
        nivel: "Júnior",
        salario: 800,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBhFNzFz2C6UMsP9LRv6ZlVsJWQDBQRIbgSg&usqp=CAU"
    }
]

export function getVagas() {
    return vagas
}