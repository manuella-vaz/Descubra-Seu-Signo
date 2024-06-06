let txtdia = document.getElementById("txtdia");
let txtmes = document.getElementById("txtmes");
let txtano = document.getElementById("txtano");
let txtmes2 = document.getElementById("txtmes2");
let txtdiasem = document.getElementById("txtdia-sem");
let txtidade = document.getElementById("txtidade");
let ano = new Date();

function Calculate() {
  if (txtdia.value < 1 || txtdia.value > 31) {
    alert("Insira um valor válido para o dia! (Entre 01 e 31)");
    txtdia.focus();
    txtdia.value = "";
  } else if (txtmes.value < 1 || txtmes.value > 12) {
    alert("Insira um valor válido para o mês! (Entre 01 e 12)");
    txtmes.focus();
    txtmes.value = "";
  } else if (txtano.value < 1900 || txtano.value > ano.getFullYear()) {
    alert("Insira um valor válido para o ano!");
    txtano.focus();
    txtano.value = "";
  } else {
    if ((txtdia.value >= 21 && txtmes.value  == 3) || (txtdia.value <= 20 && txtmes.value  == 4)) {
      document.getElementById("signo-img").src =
        "https://d15m0zxbu4pm77.cloudfront.net/icones/estudos/signos/aries/medio_aries.png";
    } else if ((txtdia.value >= 21 && txtmes.value  == 4) || (txtdia.value <= 20 && txtmes.value  == 5)) {
      document.getElementById("signo-img").src =
        "https://d15m0zxbu4pm77.cloudfront.net/icones/estudos/signos/touro/medio_touro.png";
    } else if ((txtdia.value >= 21 && txtmes.value  == 5) || (txtdia.value <= 20 && txtmes.value  == 6)) {
      document.getElementById("signo-img").src =
        "https://d15m0zxbu4pm77.cloudfront.net/icones/estudos/signos/gemeos/medio_gemeos.png";
    } else if ((txtdia.value >= 21 && txtmes.value  == 6) || (txtdia.value <= 22 && txtmes.value  == 7)) {
      document.getElementById("signo-img").src =
        "https://d15m0zxbu4pm77.cloudfront.net/icones/estudos/signos/cancer/medio_cancer.png";
    } else if ((txtdia.value >= 23 && txtmes.value  == 7) || (txtdia.value <= 22 && txtmes.value  == 8)) {
      document.getElementById("signo-img").src =
        "https://d15m0zxbu4pm77.cloudfront.net/icones/estudos/signos/leao/medio_leao.png";
    } else if ((txtdia.value >= 23 && txtmes.value  == 8) || (txtdia.value <= 22 && txtmes.value  == 9)) {
      document.getElementById("signo-img").src =
        "https://d15m0zxbu4pm77.cloudfront.net/icones/estudos/signos/virgem/medio_virgem.png";
    } else if ((txtdia.value >= 23 && txtmes.value  == 9) || (txtdia.value <= 22 && txtmes.value  == 10)) {
      document.getElementById("signo-img").src =
        "https://d15m0zxbu4pm77.cloudfront.net/icones/estudos/signos/libra/medio_libra.png";
    } else if ((txtdia.value >= 23 && txtmes.value == 10) || (txtdia.value <= 21 && txtmes.value == 11)) {
      document.getElementById("signo-img").src =
        "https://d15m0zxbu4pm77.cloudfront.net/icones/estudos/signos/escorpiao/medio_escorpiao.png";
    } else if ((txtdia.value>= 22 && txtmes.value == 11) || (txtdia.value<= 21 && txtmes.value == 12)) {
      document.getElementById("signo-img").src =
        "https://d15m0zxbu4pm77.cloudfront.net/icones/estudos/signos/sagitario/medio_sagitario.png";
    } else if ((txtdia.value >= 22 && txtmes.value == 12) || (txtdia.value <= 20 && txtmes.value == 1)) {
      document.getElementById("signo-img").src = 
        "https://d15m0zxbu4pm77.cloudfront.net/icones/estudos/signos/capricornio/medio_capricornio.png";
    } 
    else if ((txtdia.value >= 21 && txtmes.value == 1) || (txtdia.value <= 19 && txtmes.value == 2)) {
      document.getElementById("signo-img").src = 
      "https://d15m0zxbu4pm77.cloudfront.net/icones/estudos/signos/aquario/medio_aquario.png";
    } 
    else if ((txtdia.value >= 20 && txtmes.value == 2) || (txtdia.value <= 20 && txtmes.value  == 3)) {
      document.getElementById("signo-img").src = 
      "https://d15m0zxbu4pm77.cloudfront.net/icones/estudos/signos/peixes/medio_peixes.png";
    }
}
    let semana = [
      "Foi no Domingo",
      "Foi na Segunda-Feira",
      "Foi na Terça-Feira",
      "Foi na Quarta-Feira",
      "Foi na Quinta-Feira",
      "Foi na Sexta-Feira",
      "Foi no Sábado",
    ];

    let mesNome = [
      "Mes de Janeiro",
      "Mes de Fevereiro",
      "Mes de Março",
      "Mes de Abril",
      "Mes de Maio",
      "Mes de Junho",
      "Mes de Julho",
      "Mes de Agosto",
      "Mes de Setembro",
      "Mes de Outubro",
      "Mes de Novembro",
      "Mes de Dezembro",
    ];

    let diaNome = parseInt(document.getElementById("txtdia").value);

    let mesNum = parseInt(document.getElementById("txtmes").value) - 1;
    let anoNum = parseInt(document.getElementById("txtano").value);

    let d = new Date(anoNum, mesNum, diaNome);
    d.setDate(diaNome);
    d.setMonth(mesNum);
    d.setFullYear(anoNum);

    let diaDaSemana = semana[d.getDay()];
    let mesNasc2 = mesNome[d.getMonth()];

    document.getElementById("txtdia-sem").value = diaDaSemana;

    document.getElementById("txtmes2").value = mesNasc2;

    let anoIdade = parseInt(txtano.value);
    let mesIdade = parseInt(txtmes.value);
    let diaIdade = parseInt(txtdia.value);
    let mes = new Date();
    let dia = new Date();
    let idadeFinal = ano.getFullYear();

    let conta = idadeFinal - anoIdade;

    if (mesIdade > mes.getDate || diaIdade > dia.getDate) {
    conta--;
    }
    txtidade.value = conta;
}
