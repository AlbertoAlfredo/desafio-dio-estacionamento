interface Veiculo{
    nome: string;
    placa: string;
    entrada: Date;
}
(function () {
    const $ = (query: string): HTMLInputElement | null => document.querySelector(query);

    function patio(){
        function ler(){
            return localStorage.patio ? JSON.parse(localStorage.patio) : [];
        };
        function salvar(veiculos: Veiculo[]){
            localStorage.setItem("patio", JSON.stringify(veiculos))
        };
        function adicionar(veiculo: Veiculo){
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${veiculo.nome}</td>
                <td>${veiculo.placa}</td>
                <td>${veiculo.entrada}</td>
                <td>
                    <Button class='excluir' data-placa='${veiculo.placa}'>Excluir</Button>
                </td>
            `
            $('#patio')?.appendChild(row)

            salvar([...ler(), veiculo]);
        };
        function remover(){};
        
        function render(){};

        return{ler, adicionar, remover, salvar, render}
    }

    $('#cadastrar')?.addEventListener('click', () => {
        const nome = $('#nome')?.value;
        const placa = $('#placa')?.value;

        if(!nome || !placa){
            alert('Os campos nome e placa são obrigatórios.')
            return;
        }
        patio().adicionar({ nome, placa, entrada: new Date() })
    }) 

})()