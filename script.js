const textos = {
    pergunta1: "Sou alguém movido pela curiosidade e fascinado pelo potencial da tecnologia. Desde pequeno me interessei em entender como as coisas funcionam e como posso usar a tecnologia para resolver problemas.<br><br> Essa paixão me levou a querer ir atrás de entender mais sobre de forma mais profunda, buscando sempre novas formas de aplicar o conhecimento adquirido. Ao longo do tempo, desenvolvi habilidades técnicas e aprendi a trabalhar de maneira eficiente e prestativa.<br><br>Busco inovar e explorar novas possibilidades dentro do campo da TI, com a intenção de encontrar soluções criativas e eficientes. Além disso, acredito que o trabalho em equipe e o compartilhamento de conhecimentos são essenciais para o desenvolvimento e a implementação de grandes ideias.",
    
    pergunta2: "Entrei na área de TI porque vejo nela um campo cheio de oportunidades de crescimento profissional, além da sua óbvia relevância no mundo de hoje. Desde cedo, percebi o impacto que a tecnologia tem nas nossas vidas e como ela pode transformar a maneira como nos conectamos, trabalhamos e resolvemos problemas. A ideia de estar envolvido no desenvolvimento de soluções inovadoras e de contribuir com a evolução do mundo digital foi o que me atraiu.<br><br>Outro fator que me motivou a seguir essa área foi a flexibilidade e a diversidade de possibilidades. Na TI, é possível atuar em diversas frentes, como desenvolvimento de software, infraestrutura, inteligência artificial, entre outras. Isso me permite explorar diferentes caminhos, até encontrar a especialização que mais me encanta.<br><br> Além disso, a TI é uma área que oferece uma grande demanda no mercado de trabalho, com inúmeras oportunidades de crescimento e aprendizado. Por isso, ao escolher esse campo, sabia que teria a chance de me desenvolver continuamente e fazer a diferença em projetos que impactam a vida das pessoas.",
    
    pergunta3: "Para o futuro, espero continuar me aperfeiçoando na área de TI, explorando novas tecnologias e adquirindo mais experiência. O mercado de tecnologia está sempre mudando, e o que aprendi ontem pode não ser o suficiente amanhã. Por isso, a ideia é estar sempre atento às novas tendências e evoluir para acompanhar esse ritmo acelerado de inovação.<br><br>Desejo fazer parte de soluções que impactem positivamente a sociedade e que possam trazer benefícios reais para as pessoas. Isso inclui trabalhar em tecnologias que melhorem a qualidade de vida, a educação e o acesso à informação.<br><br> A longo prazo, gostaria de me posicionar como um especialista em uma área de grande relevância dentro da TI, mas também quero continuar aprendendo e compartilhando o que sei com outros profissionais e entusiastas da área. O futuro é um campo aberto, e minha meta é continuar crescendo, tanto pessoal quanto profissionalmente.",
    
    pergunta4: "Para entrar em contato comigo e para saber com o que tenho familiaridade para trabalhar e em quais projetos trabalhei, você pode me enviar um e-mail diretamente ou me procurar nas redes sociais:<br><br> E-mail: guilherme.campospe06@gmail.com<br><br>Github: https://github.com/guilhermecamp<br><br>LinkedIn: https://www.linkedin.com/in/guilhermecampos-/",
};

const pergunta1 = document.getElementById("pergunta1");
const pergunta2 = document.getElementById("pergunta2");
const pergunta3 = document.getElementById("pergunta3");
const pergunta4 = document.getElementById("pergunta4");

pergunta1.addEventListener("click", mostrarPergunta);
pergunta2.addEventListener("click", mostrarPergunta);
pergunta3.addEventListener("click", mostrarPergunta);
pergunta4.addEventListener("click", mostrarPergunta);

function mostrarPergunta(evento) {
    evento.preventDefault();
    const id = evento.target.id;
    const resultadoElement = document.getElementById("resultado");

    resultadoElement.innerHTML = textos[id];
}
