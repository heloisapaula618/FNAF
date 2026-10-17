const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];

/* relógio */
const clock=()=>{const d=new Date();$('#clock').textContent=d.getHours()+':'+String(d.getMinutes()).padStart(2,'0')};
clock();setInterval(clock,20000);

/* nomes de arquivo: tenta o nome principal e depois variações (sufixos como "fnaf3", extensões, espaço/underscore) */
const EXTS=['jpg','webp','png','jpeg'];
const guess=(base,sufs)=>sufs.flatMap(s=>EXTS.map(x=>`./img/${base}${s}.${x}`));
const SUF3=[' fnaf3',''];
const SUFSL=[' sl',' fnaf5','',' sister location',' sisterlocation',' fnaf sl'];
const ALTS={
  './img/Freddyfazbear fnaf1.webp':['./img/13_personagem_freddy.jpg'],
  './img/Bonnie fnaf1.jpg':['./img/14_personagem_bonnie.jpg'],
  './img/Chica fnaf1.webp':['./img/15_personagem_chica.jpg'],
  './img/Foxy fnaf1.jpg':['./img/16_personagem_foxy.jpg'],
  './img/GoldenFreddy fnaf1.jpg':['./img/17_personagem_golden_freddy.jpg'],
  './img/Endo-01 fnaf1.jpg':['./img/28_personagem_endo_01.jpg','./img/Endo_01.fnaf1.jpg'],
  './img/ThePuppet fnaf2.jpg':['./img/18_personagem_puppet.png'],
  './img/ToyFreddy fnaf2.webp':['./img/19_personagem_toy_freddy.png'],
  './img/Mangle fnaf2.jpg':['./img/20_personagem_mangle.png'],
  './img/curiosidade_caixinha_de_musica_puppet.jpg':['./img/A caixinha de música é essencial.webp'],
  './img/curiosidade_springtrap.jpg':['./img/Springtrap é diferente dos outros animatrônicos.webp'],
  './img/curiosidade_circus_baby.jpg':['./img/Circus Baby foi feita para interagir.jpg'],
  './img/curiosidade_glamrock_freddy.jpg':['./img/Nem todo animatrônico é inimigo.jpg'],
  './img/curiosidade_primeiro_jogo.jpg':['./img/O primeiro jogo nasceu de uma crítica.jpg'],
  './img/curiosidade_golden_freddy.jpg':['./img/Golden Freddy é um dos grandes mistérios.jpg','./img/Golden Freddy é um grande mistério.jpg']
};
const IMG={
  "13_personagem_freddy":"./img/Freddyfazbear fnaf1.webp",
  "14_personagem_bonnie":"./img/Bonnie fnaf1.jpg",
  "15_personagem_chica":"./img/Chica fnaf1.webp",
  "16_personagem_foxy":"./img/Foxy fnaf1.jpg",
  "17_personagem_golden_freddy":"./img/GoldenFreddy fnaf1.jpg",
  "18_personagem_puppet":"./img/ThePuppet fnaf2.jpg",
  "19_personagem_toy_freddy":"./img/ToyFreddy fnaf2.webp",
  "20_personagem_mangle":"./img/Mangle fnaf2.jpg",
  "21_personagem_springtrap":"./img/21_personagem_springtrap.png",
  "22_personagem_circus_baby":"./img/22_personagem_circus_baby.png",
  "23_personagem_ballora":"./img/23_personagem_ballora.png",
  "24_personagem_funtime_freddy":"./img/24_personagem_funtime_freddy.png",
  "25_personagem_glamrock":"./img/25_personagem_glamrock.png",
  "26_personagem_roxanne":"./img/26_personagem_roxanne.png",
  "27_personagem_mimic":"./img/27_personagem_mimic.png",
  "28_personagem_endo_01":"./img/Endo-01 fnaf1.jpg",
  "32_historia_origens":"./img/32_historia_origens.jpg",
  "33_historia_desaparecimentos":"./img/33_historia_desaparecimentos.jpg",
  "34_historia_pizzaria":"./img/34_historia_pizzaria.jpg",
  "35_historia_retorno_afton":"./img/35_historia_retorno_afton.jpg",
  "36_historia_encerramento":"./img/36_historia_encerramento.jpg",
  "37_historia_nova_era":"./img/37_historia_nova_era.jpg",
  "29_fnaf2_toy_bonnie":"./img/ToyBonnie fnaf2.jpg",
  "30_fnaf2_toy_chica":"./img/ToyChica fnaf2.webp",
  "31_fnaf2_balloon_boy":"./img/BalloonBoy fnaf2.jpg",
  "38_fnaf2_jj":"./img/JJ fnaf2.jpg",
  "39_fnaf2_withered_freddy":"./img/WitheredFreddy fnaf2.webp",
  "40_fnaf2_withered_bonnie":"./img/WitheredBonnie fnaf2.jpg",
  "41_fnaf2_withered_chica":"./img/ChicaWithered fnaf2.webp",
  "42_fnaf2_withered_foxy":"./img/WitheredFoxy fnaf2.jpg",
  "43_fnaf2_golden_freddy":"./img/GoldenFreddy fnaf2.jpg"
};
/* registra uma imagem: principal = 1º palpite; os outros palpites e o arquivo antigo ficam como reserva */
const addAlt=(p,arr)=>{ALTS[p]=[...new Set([...(ALTS[p]||[]),...arr].filter(Boolean))]};
function reg(key,base,sufs,fallback){
  const l=guess(base,sufs);
  IMG[key]=l[0];
  addAlt(l[0],[...l.slice(1),fallback]);
}
/* usa um arquivo exato (que você já tem) e deixa outro como reserva */
function useFile(key,path,fallback){
  IMG[key]=path;
  addAlt(path,[fallback]);   /* sem reserva: addAlt ignora valores vazios */
}
useFile('21_personagem_springtrap','./img/Springtrap.png','./img/21_personagem_springtrap.png');
useFile('22_personagem_circus_baby','./img/circus baby.jpg','./img/22_personagem_circus_baby.png');
useFile('23_personagem_ballora','./img/ballora.jpg','./img/23_personagem_ballora.png');
useFile('24_personagem_funtime_freddy','./img/funtime freddy.jpg','./img/24_personagem_funtime_freddy.png');
useFile('44_fnaf3_phantom_freddy','./img/Phantom Freddy.jpg');
useFile('45_fnaf3_phantom_chica','./img/Phantom Chica.jpg');
useFile('46_fnaf3_phantom_foxy','./img/Phantom Foxy.jpg');
useFile('47_fnaf3_phantom_mangle','./img/Phantom Mangle.jpg');
useFile('48_fnaf3_phantom_puppet','./img/Phantom Puppet.webp');
useFile('49_fnaf3_phantom_balloon_boy','./img/Phantom Balloon Boy.jpg');
useFile('50_sl_ennard','./img/ennard.jpg');

/* cronologia: usa imagens que já existem na pasta img (o arquivo 32_..37_ fica como reserva) */
useFile('32_historia_origens','./img/GoldenFreddy fnaf1.jpg','./img/32_historia_origens.jpg');
useFile('33_historia_desaparecimentos','./img/ThePuppet fnaf2.jpg','./img/33_historia_desaparecimentos.jpg');
useFile('34_historia_pizzaria','./img/Freddyfazbear fnaf1.webp','./img/34_historia_pizzaria.jpg');
useFile('35_historia_retorno_afton','./img/Springtrap.png','./img/35_historia_retorno_afton.jpg');
useFile('36_historia_encerramento','./img/jogo_pizzeria_simulator.jpg','./img/36_historia_encerramento.jpg');
useFile('37_historia_nova_era','./img/jogo_security_breach.jpg','./img/37_historia_nova_era.jpg');
/* Security Breach e Mimic: se o arquivo do personagem não existir, usa a imagem do jogo */
addAlt('./img/25_personagem_glamrock.png',['./img/Nem todo animatrônico é inimigo.jpg','./img/curiosidade_glamrock_freddy.jpg']);
addAlt('./img/26_personagem_roxanne.png',['./img/jogo_security_breach.jpg']);
addAlt('./img/27_personagem_mimic.png',['./img/jogo_secret_of_the_mimic.jpg']);

/* dados */
const groups=[
 {id:'fnaf1',short:'FNAF 1',title:'Five Nights at Freddy’s',year:'2014',intro:'O primeiro jogo: você é o segurança noturno da Freddy Fazbear’s Pizza e a banda ganha vida depois da meia-noite.'},
 {id:'fnaf2',short:'FNAF 2',title:'Five Nights at Freddy’s 2',year:'2014',intro:'Uma pizzaria renovada, animatrônicos novos e uma história que se passa antes do primeiro jogo.'},
 {id:'fnaf3',short:'FNAF 3',title:'Five Nights at Freddy’s 3',year:'2015',intro:'Anos depois, uma atração de terror inspirada na antiga pizzaria esconde um velho conhecido.'},
 {id:'sl',short:'Sister Location',title:'Sister Location',year:'2016',intro:'Uma instalação subterrânea com animatrônicos feitos para interagir.'},
 {id:'sb',short:'Security Breach',title:'Security Breach',year:'2021',intro:'No Mega Pizzaplex, nem todo animatrônico é inimigo.'},
 {id:'mimic',short:'Secret of the Mimic',title:'Secret of the Mimic',year:'2025',intro:'Os mistérios continuam com uma ameaça que imita comportamentos.'}
];
/* [nome, imagem, resumo, grupo, história (parágrafos separados por \n)] */
const chars=[
 ['Freddy','13_personagem_freddy','O líder da banda e rosto da pizzaria Freddy Fazbear’s.','fnaf1',
  'Freddy Fazbear é o rosto da pizzaria e o líder da banda ao lado de Bonnie e Chica. Durante o dia ele anima as crianças; à noite, no primeiro jogo, começa a se mover pelo restaurante.\nÉ um dos últimos a chegar ao escritório e costuma anunciar a aproximação com uma risada no escuro. Os fãs ligam o animatrônico a uma das crianças envolvidas nas tragédias da franquia, mas a história completa nunca é contada de forma direta.'],
 ['Bonnie','14_personagem_bonnie','O guitarrista roxo, famoso por surgir pelas portas do escritório.','fnaf1',
  'Bonnie é o coelho guitarrista da banda. No primeiro jogo, costuma ser um dos primeiros animatrônicos a deixar o palco e se aproximar do escritório.\nEle aparece pelo lado esquerdo, por isso o jogador precisa vigiar a luz e fechar a porta na hora certa.'],
 ['Chica','15_personagem_chica','A galinha da banda, sempre acompanhada do seu babador.','fnaf1',
  'Chica é a galinha da banda e usa um babador com a frase “Let’s Eat!!!”. Ela costuma ficar perto da cozinha, onde dá para ouvir panelas batendo mesmo quando a câmera está sem imagem.\nEla ataca pelo lado direito do escritório, ao contrário de Bonnie.'],
 ['Foxy','16_personagem_foxy','O pirata do Pirate Cove, que corre quando ninguém o observa.','fnaf1',
  'Foxy é o pirata da pizzaria e fica escondido atrás da cortina do Pirate Cove, que tem uma placa de “fora de serviço”.\nQuando o jogador para de vigiar a cortina, ele começa a se mexer. Se Foxy sair, corre pelo corredor e bate na porta esquerda, então é preciso checar a câmera do cove com frequência.'],
 ['Golden Freddy','17_personagem_golden_freddy','Sua aparição inesperada virou um dos maiores mistérios da franquia.','fnaf1',
  'Golden Freddy é um dos maiores mistérios do primeiro jogo: ele aparece de repente no escritório, sem seguir as regras dos outros animatrônicos.\nNos jogos seguintes, ele passa a ser associado a Fredbear, uma versão antiga e dourada de Freddy ligada ao passado da família Afton.'],
 ['The Puppet','18_personagem_puppet','Sai da sua caixa quando a caixa de música para de tocar.','fnaf2',
  'The Puppet (ou Marionette) fica dentro de uma caixa de presente na sala de prêmios. Em FNAF 2, o jogador precisa manter a caixa de música carregada para impedir que ele saia.\nSegundo a história da franquia, o Puppet está ligado a Charlotte, filha de Henry. Muitos fãs acreditam que ele deu vida às almas das crianças presas nos animatrônicos.'],
 ['Toy Freddy','19_personagem_toy_freddy','Versão nova e brilhante de Freddy, apresentada em FNAF 2.','fnaf2',
  'Toy Freddy é a versão nova e mais colorida de Freddy, apresentada em FNAF 2. Os Toys foram criados para a pizzaria renovada, com visual mais amigável e reconhecimento facial.\nEle anda pelos corredores em direção ao escritório, e o jogador pode enganá-lo colocando a máscara do Freddy.'],
 ['Mangle','20_personagem_mangle','Animatrônico desmontado que se arrasta pelo teto e paredes.','fnaf2',
  'Mangle começou como Toy Foxy, mas as crianças a desmontaram tantas vezes que ela ficou com as peças expostas.\nEla se arrasta pelo teto e pelas paredes, e o chiado de rádio indica que está por perto.'],
 ['Springtrap','21_personagem_springtrap','Ligado diretamente ao passado de William Afton.','fnaf3',
  'Springtrap é um antigo traje de coelho (o Spring Bonnie) em ruínas. Em FNAF 3, ele é o único animatrônico físico que ameaça o jogador na Fazbear’s Fright, a atração de terror inspirada na antiga pizzaria.\nDentro do traje está William Afton, o homem ligado ao desaparecimento das crianças. Por isso Springtrap é uma peça central da história da franquia.'],
 ['Circus Baby','22_personagem_circus_baby','Feita para interagir, tem papel central em Sister Location.','sl',
  'Circus Baby é a estrela de Sister Location e foi feita para interagir com as crianças, diferente dos animatrônicos clássicos. Ela guia o jogador pela instalação subterrânea.\nNa história, ela abriga o espírito de Elizabeth, filha de William Afton, e tem um papel decisivo no enredo.'],
 ['Ballora','23_personagem_ballora','Bailarina de Sister Location que se guia pelo som.','sl',
  'Ballora é a bailarina de Sister Location, feita para dançar em um palco. Ela se guia pelo som, por isso o jogador precisa avançar em silêncio quando está perto dela.\nÉ uma das animatrônicos que fazem parte do elenco da instalação ao lado de Circus Baby.'],
 ['Funtime Freddy','24_personagem_funtime_freddy','Animatrônico de Sister Location acompanhado de Bon-Bon.','sl',
  'Funtime Freddy é o apresentador dos Funtimes em Sister Location. Ele está sempre com Bon-Bon, um fantoche que fala e interage em nome dele.\nA dupla faz parte do elenco da instalação, ao lado de Circus Baby e Ballora.'],
 ['Glamrock Freddy','25_personagem_glamrock','Ajuda Gregory durante boa parte de Security Breach.','sb',
  'Glamrock Freddy é uma das estrelas do Mega Pizzaplex. Em Security Breach, ele encontra Gregory durante a noite e passa a ajudar o garoto.\nGregory pode se esconder dentro dele, e os dois tentam atravessar o shopping em busca de uma saída, algo bem diferente da fórmula dos primeiros jogos.'],
 ['Roxanne Wolf','26_personagem_roxanne','Uma das estrelas do Mega Pizzaplex.','sb',
  'Roxanne Wolf (Roxy) é uma das estrelas do Mega Pizzaplex e está ligada ao Roxy Raceway.\nEm Security Breach, ela se torna uma das ameaças para Gregory quando os animatrônicos passam a persegui-lo pelo shopping.'],
 ['The Mimic','27_personagem_mimic','Nova ameaça ligada a imitações de comportamento.','mimic',
  'O Mimic é a ameaça que dá nome a Secret of the Mimic. A característica dele é copiar e imitar comportamentos, o que liga essa nova fase da franquia a tecnologia e imitações.\nOs detalhes da história se revelam ao longo do jogo.'],
 ['Endo-01','28_personagem_endo_01','O esqueleto metálico que existe por baixo dos trajes.','fnaf1',
  'Endo-01 é um endoesqueleto: a estrutura metálica que fica por baixo da pelúcia dos animatrônicos. Ele mostra que, por baixo dos personagens simpáticos da pizzaria, existem máquinas com articulações e fios.\nNo primeiro jogo, ele aparece nos bastidores, junto de peças e cabeças sobressalentes. Os fãs o associam à ideia de que os animatrônicos podem ser usados como trajes e também como robôs.'],
 ['Toy Bonnie','29_fnaf2_toy_bonnie','Versão nova e azul-clara de Bonnie.','fnaf2','Toy Bonnie é a versão nova de Bonnie, de cor azul-clara e com bochechas rosadas. Faz parte dos Toys, criados para a pizzaria renovada de FNAF 2.\nEm FNAF 2, ele costuma chegar ao escritório pela ventilação do lado esquerdo, e o jogador pode enganá-lo colocando a máscara do Freddy.',6.1],
 ['Toy Chica','30_fnaf2_toy_chica','Versão nova de Chica, com o babador “Let’s Party!”.','fnaf2','Toy Chica é a versão nova de Chica e usa um babador com a frase “Let’s Party!”. Ela também faz parte dos Toys, criados para a pizzaria renovada.\nEm FNAF 2, ela costuma chegar ao escritório pela ventilação do lado direito, e a máscara do Freddy também serve para enganá-la.',6.2],
 ['Balloon Boy','31_fnaf2_balloon_boy','Pequeno animatrônico com balões que atrapalha o jogador.','fnaf2','Balloon Boy (BB) é um animatrônico menor, que carrega balões e uma placa. Ele aparece em FNAF 2 com uma risada e frases como “Hi!” e “Hello!”.\nBB não ataca diretamente: quando chega ao escritório, desliga a lanterna e deixa o jogador mais vulnerável aos outros animatrônicos.',7.1],
 ['JJ','38_fnaf2_jj','Versão feminina de Balloon Boy, um desafio extra de FNAF 2.','fnaf2','JJ (também conhecida como Balloon Girl) é uma animatrônica parecida com Balloon Boy, mas com visual próprio.\nEla aparece em FNAF 2 como um dos desafios extras do jogo.',7.2],
 ['Withered Freddy','39_fnaf2_withered_freddy','Freddy antigo e danificado, reaproveitado em FNAF 2.','fnaf2','Withered Freddy é a versão antiga e danificada de Freddy, com o traje desgastado e peças à mostra. Os animatrônicos “Withered” são os personagens do primeiro jogo depois de anos de uso e remendos.\nEm FNAF 2, ele fica na sala de peças e serviços e, durante a noite, volta a andar em direção ao escritório.',7.3],
 ['Withered Bonnie','40_fnaf2_withered_bonnie','Bonnie antigo, sem rosto e com o traje rasgado.','fnaf2','Withered Bonnie é a versão antiga e danificada de Bonnie, com o rosto exposto e o traje rasgado. Faz parte do grupo dos animatrônicos antigos de FNAF 2.\nEle fica na sala de peças e serviços e, à noite, também segue em direção ao escritório.',7.4],
 ['Withered Chica','41_fnaf2_withered_chica','Chica antiga e danificada, com o queixo solto.','fnaf2','Withered Chica é a versão antiga e danificada de Chica, com o traje desgastado e as peças soltas. Também faz parte dos animatrônicos antigos de FNAF 2.\nElas ficam guardadas na sala de peças e serviços e, durante a noite, voltam a se mexer.',7.5],
 ['Withered Foxy','42_fnaf2_withered_foxy','Foxy antigo e muito danificado.','fnaf2','Withered Foxy é a versão antiga e danificada de Foxy, com o traje bem desgastado e partes do endoesqueleto à mostra.\nEm FNAF 2, ele faz parte dos animatrônicos antigos que ficam na sala de peças e serviços.',7.6],
 ['Golden Freddy','43_fnaf2_golden_freddy','Reaparece em FNAF 2, de novo sem seguir as regras.','fnaf2','Golden Freddy também aparece em FNAF 2, de novo sem seguir as regras dos outros animatrônicos e causando sustos inesperados.\nOs fãs ligam a figura dele a Fredbear, uma versão antiga e dourada de Freddy, e ela continua sendo um dos maiores mistérios da franquia.',7.7],
 ['Phantom Freddy','44_fnaf3_phantom_freddy','Versão queimada e fantasmagórica de Freddy.','fnaf3','Phantom Freddy é uma versão queimada e fantasmagórica de Freddy. Em FNAF 3, os Phantoms não são animatrônicos de verdade: aparecem como alucinações do segurança.\nEles não conseguem matar o jogador, mas os sustos podem travar o monitor por alguns instantes e atrapalhar a defesa contra Springtrap.',8.1],
 ['Phantom Chica','45_fnaf3_phantom_chica','Versão queimada e fantasmagórica de Chica.','fnaf3','Phantom Chica é uma versão queimada e fantasmagórica de Chica. Em FNAF 3, ela surge como uma alucinação, não como um animatrônico de verdade.\nOs sustos dos Phantoms não matam o jogador, mas podem atrapalhar o uso do monitor durante a noite.',8.2],
 ['Phantom Foxy','46_fnaf3_phantom_foxy','Versão queimada e fantasmagórica de Foxy.','fnaf3','Phantom Foxy é uma versão queimada e fantasmagórica de Foxy. Em FNAF 3, ele aparece como alucinação enquanto o jogador tenta se proteger de Springtrap.\nComo os outros Phantoms, não ataca de verdade, mas pode causar sustos e atrapalhar o monitor.',8.3],
 ['Phantom Mangle','47_fnaf3_phantom_mangle','Versão queimada e fantasmagórica de Mangle.','fnaf3','Phantom Mangle é uma versão queimada e fantasmagórica de Mangle. Em FNAF 3, ela faz parte das alucinações que perseguem o jogador na Fazbear’s Fright.\nEla não consegue ferir o jogador, mas os sustos atrapalham o monitor e a atenção durante a noite.',8.4],
 ['Phantom Puppet','48_fnaf3_phantom_puppet','Versão queimada e fantasmagórica de The Puppet.','fnaf3','Phantom Puppet é uma versão queimada e fantasmagórica de The Puppet. Em FNAF 3, ele aparece como alucinação, assim como os outros Phantoms.\nOs sustos não matam o jogador, mas podem atrapalhar o uso do monitor.',8.5],
 ['Phantom Balloon Boy','49_fnaf3_phantom_balloon_boy','Versão queimada e fantasmagórica de Balloon Boy.','fnaf3','Phantom Balloon Boy é uma versão queimada e fantasmagórica de Balloon Boy. Em FNAF 3, ele faz parte das alucinações que acompanham a noite do segurança.\nAssim como os outros Phantoms, não ataca de verdade, mas pode atrapalhar o monitor com sustos.',8.6],
 ['Ennard','50_sl_ennard','Amontoado de endoesqueletos de Sister Location.','sl','Ennard é um amontoado de endoesqueletos e peças dos animatrônicos de Sister Location, unidos em uma só criatura. Ele aparece no final do jogo e tenta escapar das instalações.\nPor reunir partes dos outros animatrônicos, é uma das figuras mais importantes da história de Sister Location.',11.1]
];
const tl=[
 ['O começo de tudo','Antes dos primeiros jogos','32_historia_origens','A história começa com restaurantes familiares e animatrônicos criados para entreter crianças. William Afton e Henry Emily estão ligados ao desenvolvimento desse universo, mas acontecimentos trágicos começam a transformar esses lugares em cenários de mistério.'],
 ['Os desaparecimentos','Os primeiros grandes mistérios','33_historia_desaparecimentos','Desaparecimentos e mortes passam a fazer parte dos segredos da franquia. As almas de crianças são associadas aos animatrônicos, criando uma das principais explicações para os acontecimentos sobrenaturais dos jogos.'],
 ['A pizzaria assustadora','Five Nights at Freddy’s','34_historia_pizzaria','O jogador trabalha como segurança noturno em uma pizzaria. Durante a noite, os animatrônicos se movimentam e ameaçam o guarda. Aos poucos, pistas revelam que aquele lugar esconde algo muito mais sombrio.'],
 ['O retorno de Afton','FNAF 3 e os acontecimentos posteriores','35_historia_retorno_afton','Anos depois, uma atração de terror inspirada na antiga pizzaria é criada. Nela aparece Springtrap, personagem diretamente ligado ao passado de William Afton.'],
 ['Uma tentativa de encerrar tudo','Pizzeria Simulator','36_historia_encerramento','Henry prepara um plano que reúne personagens importantes em um mesmo local, buscando colocar um fim ao ciclo de tragédias relacionado à família Afton e às pizzarias.'],
 ['Uma nova era de mistérios','Help Wanted e Security Breach','37_historia_nova_era','A franquia passa a explorar sistemas digitais, o Mega Pizzaplex e novas ameaças, incluindo o Mimic. Os mistérios continuam, mas agora envolvem tecnologia e imitações de comportamento.']
];

/* render */
let charFilter='all';
function renderChars(){
  $('#gfilter').innerHTML=[{id:'all',short:'Todos'},...groups].map(g=>`<button class="gchip${g.id===charFilter?' on':''}" data-gf="${g.id}">${g.short}</button>`).join('');
  $('#chars').innerHTML=groups.filter(g=>charFilter==='all'||g.id===charFilter).map(g=>`<div class="gsec"><div class="ghead"><b>${g.title}</b><em>${g.year}</em></div><p class="gintro">${g.intro}</p><div class="grid">${chars.map((c,i)=>[c,i]).filter(x=>x[0][3]===g.id).sort((a,b)=>(a[0][5]??a[1])-(b[0][5]??b[1])).map(([c,i])=>`<div class="char" data-char="${i}"><img src="${IMG[c[1]]}" alt="${c[0]}"><span>${c[0]}</span></div>`).join('')}</div></div>`).join('');
}
renderChars();
$('#tl').innerHTML=tl.map((t,i)=>`<div class="step${i===0?' open':''}"><button><img src="${IMG[t[2]]}" alt=""><div><small>${t[1]}</small><b>${t[0]}</b></div></button><div class="txt">${t[3]}</div></div>`).join('');

/* imagem não encontrada -> mostra um quadro escuro no lugar (e avisa no console qual arquivo faltou) */
const FALLBACK='data:image/svg+xml;utf8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#1a130e"/><path d="M30 62l14-18 10 12 8-9 12 15z" fill="#4a3a2c"/><circle cx="38" cy="36" r="6" fill="#4a3a2c"/></svg>');
/* nomes alternativos: se o arquivo principal não existir, o site tenta estes (e variações de extensão, espaço e acento) antes de mostrar o quadro escuro */

function candidates(orig){
  const all=[],add=p=>{if(p&&p!==orig&&!all.includes(p))all.push(p)};
  [orig,...(ALTS[orig]||[])].forEach(p=>{
    add(p);
    const m=p.match(/^(.*)\.(jpg|jpeg|png|webp)$/i);
    if(m)['jpg','webp','png','jpeg'].forEach(x=>add(m[1]+'.'+x));
  });
  [...all,orig].forEach(p=>{add(p.replace(/ /g,'_'));add(p.normalize('NFD'))});
  return all.slice(0,200);
}
function recover(im){
  if(!im||im.tagName!=='IMG'||im.dataset.fb)return;
  const orig=im.dataset.orig||im.getAttribute('src');
  im.dataset.orig=orig;
  const list=candidates(orig),n=+(im.dataset.ai||0);
  if(n<list.length){im.dataset.ai=n+1;im.src=list[n];return}
  im.dataset.fb=1;console.warn('Imagem não encontrada:',orig);im.src=FALLBACK;
}
document.addEventListener('error',e=>recover(e.target),true);
/* imagens que já estavam no HTML podem ter falhado ANTES deste script rodar: o evento 'error' delas se perdeu.
   Aqui conferimos todas de novo (na hora e quando a página terminar de carregar). */
function checkBroken(){$$('img').forEach(im=>{if(im.complete&&im.naturalWidth===0)recover(im)})}
checkBroken();
window.addEventListener('load',()=>{checkBroken();setTimeout(checkBroken,600)});

/* navegação */
let curPage='home';
function go(id){
  curPage=id;
  if(id!=='busca'){const q=document.getElementById('q');if(q){q.value='';document.getElementById('qx').hidden=true}}
  if(id==='conta')renderConta();
  $$('.page').forEach(p=>p.classList.toggle('on',p.id===id));
  $$('.tab').forEach(t=>t.classList.toggle('on',t.dataset.go===id));
  $('#scroll').scrollTo({top:0,behavior:'instant'});
}
document.addEventListener('click',e=>{
  const g=e.target.closest('[data-go]'); if(g){go(g.dataset.go);return}
  const sh=e.target.closest('[data-sheet]'); if(sh){openSheet(sh.dataset.sheet);return}
  const ch=e.target.closest('[data-char]'); if(ch){openChar(+ch.dataset.char);return}
  const st=e.target.closest('.step button'); if(st){st.parentElement.classList.toggle('open');return}
  if(e.target.id==='sheet'||e.target.closest('[data-close]')) closeSheet();
});

/* sheet */
const sheet=$('#sheet'),card=$('#card');
function show(html){card.innerHTML='<div class="grab"></div>'+html;sheet.classList.add('on')}
function closeSheet(){sheet.classList.remove('on')}
function openSheet(k){
  if(k==='fnaf3') show(`<h3>Mais sobre FNAF 3</h3><p>O que já se sabe sobre o terceiro filme:</p>
  <ul>
   <li><b>Roteiro:</b> o roteirista Gary Dauberman (conhecido por It: A Coisa e Invocação do Mal) assumiu o roteiro do longa.</li>
   <li><b>Elenco:</b> o ator Matthew Lillard (William Afton) confirmou o projeto e seu retorno, juntamente com a expectativa de volta de outros nomes principais como Josh Hutcherson e Elizabeth Lail.</li>
   <li><b>Produção:</b> a realização continua sob a parceria da Blumhouse, Atomic Monster e Universal Pictures.</li>
  </ul>
  <p>Mais detalhes sobre a trama e a data exata de lançamento nos cinemas ainda serão divulgados pela produção.</p>
  <button class="btn" data-close style="margin-top:14px">Fechar</button>`);
}

/* ================= utilidades ================= */
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const norm=s=>String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const mem={};
const store={
  get(k,d){try{const v=localStorage.getItem(k);if(v!=null)return JSON.parse(v)}catch(e){} return k in mem?mem[k]:d},
  set(k,v){mem[k]=v;try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}},
  del(k){delete mem[k];try{localStorage.removeItem(k)}catch(e){}}
};
let toastT;
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('on');clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove('on'),2400)}

/* ================= BUSCA ================= */
let SI=[];
function buildIndex(){
  SI=[];
  $$('#jogos .item').forEach(el=>SI.push({type:'Jogo',title:$('h4',el).childNodes[0].textContent.trim(),extra:($('em',el)||{}).textContent||'',text:$('p',el).textContent,img:$('img',el).src,go:()=>go('jogos')}));
  chars.forEach((c,i)=>SI.push({type:'Personagem',title:c[0],extra:(groups.find(x=>x.id===c[3])||{}).title||'',text:c[2]+' '+c[4],img:IMG[c[1]],go:()=>{go('personagens');openChar(i)}}));
  tl.forEach((t,i)=>SI.push({type:'Cronologia',title:t[0],extra:t[1],text:t[3],img:IMG[t[2]],go:()=>{go('cronologia');const st=$$('.step');st.forEach((s,j)=>s.classList.toggle('open',j===i));st[i].scrollIntoView({block:'center'})}}));
  $$('#historia .curio').forEach(el=>SI.push({type:'Curiosidade',title:$('h4',el).textContent,extra:'',text:$('p',el).textContent,img:$('img',el).src,go:()=>go('historia')}));
  SI.push({type:'Notícia',title:'Five Nights at Freddy’s 3 vai acontecer',extra:'filme cinema 2027',text:'As filmagens devem começar em 2027, com lançamento previsto para o final do mesmo ano. Roteiro de Gary Dauberman, Matthew Lillard (William Afton), Josh Hutcherson, Elizabeth Lail, Blumhouse, Atomic Monster e Universal Pictures.',img:$('.hero img').src,go:()=>{go('home');openSheet('fnaf3')}});
  SI.push({type:'Notícia',title:'FNAF 2: o terror pode continuar?',extra:'filme cinema dezembro 2025',text:'Após o lançamento de Five Nights at Freddy’s 2, em dezembro de 2025, os fãs já especulam sobre um terceiro filme.',img:$$('.upd img')[0].src,go:()=>go('home')});
}
function hl(str,toks){
  const n=norm(str),m=new Array(str.length).fill(0);
  toks.forEach(t=>{let i=n.indexOf(t);while(i>-1){for(let k=i;k<i+t.length;k++)m[k]=1;i=n.indexOf(t,i+t.length)}});
  let o='',on=false;
  for(let i=0;i<str.length;i++){if(m[i]&&!on){o+='<mark>';on=true}if(!m[i]&&on){o+='</mark>';on=false}o+=esc(str[i])}
  return o+(on?'</mark>':'');
}
function snippet(text,toks){
  const n=norm(text);let i=-1;
  for(const t of toks){const j=n.indexOf(t);if(j>-1&&(i<0||j<i))i=j}
  const s=Math.max(0,(i<0?0:i)-25);
  return (s>0?'…':'')+text.slice(s,s+95)+(s+95<text.length?'…':'');
}
let prevPage='home',lastRes=[];
function showBusca(){ if(curPage!=='busca'){prevPage=curPage} $$('.page').forEach(p=>p.classList.toggle('on',p.id==='busca')); $$('.tab').forEach(t=>t.classList.remove('on')); $('#qx').hidden=false; $('#scroll').scrollTo({top:0}) }
function closeBusca(){ $('#q').value=''; $('#q').blur(); $('#qx').hidden=true; go(prevPage) }
function renderBusca(){
  const raw=$('#q').value.trim(), box=$('#busca-box');
  const sugg=['Springtrap','Freddy','Sister Location','Mimic','Afton','Golden Freddy','Filme 3'];
  if(!raw){
    box.innerHTML='<h2 class="sec">Sugestões</h2><div class="chips">'+sugg.map(s=>`<button class="chip" data-chip="${esc(s)}">${esc(s)}</button>`).join('')+'</div>';
    return;
  }
  const toks=norm(raw).split(/\s+/).filter(Boolean);
  lastRes=SI.map(r=>{
    const t=norm(r.title+' '+r.extra),b=norm(r.text),ty=norm(r.type);
    if(!toks.every(k=>t.includes(k)||b.includes(k)||ty.includes(k)))return null;
    let sc=0;toks.forEach(k=>{if(t.includes(k))sc+=3;if(norm(r.title).startsWith(k))sc+=2;if(b.includes(k))sc+=1;if(ty.includes(k))sc+=1});
    return {r,sc};
  }).filter(Boolean).sort((a,b)=>b.sc-a.sc).slice(0,25).map(x=>x.r);
  if(!lastRes.length){box.innerHTML=`<p class="empty">Nada encontrado para “${esc(raw)}”.<br>Tente o nome de um jogo, personagem ou capítulo da história.</p>`;return}
  box.innerHTML=`<h2 class="sec">${lastRes.length} resultado${lastRes.length>1?'s':''}</h2>`+lastRes.map((r,i)=>`<button class="res" data-res="${i}"><img src="${r.img}" alt=""><div><small>${esc(r.type)}${r.extra&&r.type==='Jogo'?' · '+esc(r.extra):''}</small><b>${hl(r.title,toks)}</b><p>${hl(snippet(r.text,toks),toks)}</p></div></button>`).join('');
}
$('#q').addEventListener('focus',()=>{showBusca();renderBusca()});
$('#q').addEventListener('input',()=>{showBusca();renderBusca()});
$('#q').addEventListener('keydown',e=>{if(e.key==='Escape')closeBusca()});
$('#qx').addEventListener('click',closeBusca);

/* ================= CONTA ================= */
let authMode='login';
const users=()=>store.get('sg_users',{});
const saveUsers=u=>store.set('sg_users',u);
const currentUser=()=>{const e=store.get('sg_session',null);return e?users()[e]||null:null};
async function hashPw(pw,salt){
  try{const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(salt+pw));return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')}
  catch(e){let h=5381;const s=salt+pw;for(let i=0;i<s.length;i++)h=((h<<5)+h+s.charCodeAt(i))|0;return 'x'+h}
}
const newSalt=()=>Math.random().toString(36).slice(2)+Date.now().toString(36);
const okEmail=e=>/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e);
const avatarHTML=u=>u.avatar?`<img src="${u.avatar}" alt="">`:esc((u.name||'?').trim()[0].toUpperCase());

function updateAvBtn(){
  const u=currentUser(),b=$('#avbtn');
  b.classList.toggle('in',!!u);
  b.setAttribute('aria-label',u?'Minha conta':'Entrar ou criar conta');
  b.innerHTML=u?avatarHTML(u):'<svg viewBox="0 0 24 24"><path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-4.400 0-8 2.200-8 5v3h16v-3c0-2.800-3.600-5-8-5z"/></svg>';
}
function field(n,l,t,ac,v){return `<label class="fld"><span>${l}</span><div class="inp"><input name="${n}" type="${t}" autocomplete="${ac}" value="${esc(v||'')}">${t==='password'?'<button type="button" class="eye" data-eye>Mostrar</button>':''}</div></label>`}
function authHTML(){
  const reg=authMode==='reg';
  return `<h2 class="sec">${reg?'Criar conta':'Entrar'}</h2>
  <div class="seg"><button data-auth="login" class="${reg?'':'on'}">Entrar</button><button data-auth="reg" class="${reg?'on':''}">Criar conta</button></div>
  <form class="frm" id="${reg?'f-reg':'f-login'}" novalidate>
    ${reg?field('name','Nome','text','name'):''}
    ${field('email','E-mail','email','email')}
    ${field('pw','Senha'+(reg?' (mínimo 6 caracteres)':''),'password',reg?'new-password':'current-password')}
    ${reg?field('pw2','Confirmar senha','password','new-password'):''}
    <p class="err" role="alert"></p>
    <button class="btn wide" type="submit">${reg?'Criar conta':'Entrar'}</button>
  </form>
  <p class="alt">${reg?'Já tem conta?':'Ainda não tem conta?'} <button class="lnk" data-auth="${reg?'login':'reg'}">${reg?'Entrar':'Criar conta'}</button></p>`;
}
function profileHTML(u){
  const since=new Date(u.created).toLocaleDateString('pt-BR',{month:'long',year:'numeric'});
  const fav=u.fav>=0?chars[u.fav]:null;
  return `<h2 class="sec">Minha conta</h2>
  <div class="prof">
    <label class="avbig" for="avfile" title="Alterar foto">${avatarHTML(u)}<span>Alterar foto</span></label>
    <input type="file" id="avfile" accept="image/*" hidden>
    <div><b>${esc(u.name)}</b><small>${esc(u.email)}</small><small>Membro desde ${since}</small></div>
  </div>
  ${u.avatar?'<div class="pad" style="margin-bottom:8px"><button class="lnk" data-rmav>Remover foto</button></div>':''}
  ${u.bio?`<p class="favline" style="color:var(--text)">${esc(u.bio)}</p>`:''}
  ${fav?`<p class="favline">★ Personagem favorito: ${esc(fav[0])}</p>`:''}
  <h2 class="sec">Editar perfil</h2>
  <form class="frm" id="f-prof" novalidate>
    ${field('name','Nome','text','name',u.name)}
    <label class="fld"><span>Bio</span><div class="inp"><textarea name="bio" maxlength="120" placeholder="Fale um pouco sobre você">${esc(u.bio||'')}</textarea></div></label>
    <label class="fld"><span>Personagem favorito</span><div class="inp"><select name="fav"><option value="-1">Nenhum</option>${chars.map((c,i)=>`<option value="${i}"${u.fav===i?' selected':''}>${esc(c[0])}</option>`).join('')}</select></div></label>
    <p class="err" role="alert"></p>
    <button class="btn wide" type="submit">Salvar alterações</button>
  </form>
  <h2 class="sec">Alterar senha</h2>
  <form class="frm" id="f-pw" novalidate>
    ${field('old','Senha atual','password','current-password')}
    ${field('pw','Nova senha','password','new-password')}
    ${field('pw2','Confirmar nova senha','password','new-password')}
    <p class="err" role="alert"></p>
    <button class="btn wide" type="submit">Atualizar senha</button>
  </form>
  <div class="stack" style="margin-top:22px"><button class="btn ghost wide" data-logout>Sair da conta</button><button class="btn danger wide" data-del>Excluir conta</button></div>`;
}
function renderConta(){const u=currentUser();$('#conta-box').innerHTML=u?profileHTML(u):authHTML();updateAvBtn()}
const setErr=(f,m)=>{f.querySelector('.err').textContent=m};

document.addEventListener('submit',async e=>{
  e.preventDefault();const f=e.target,d=Object.fromEntries(new FormData(f)),all=users();
  if(f.id==='f-reg'){
    const name=(d.name||'').trim(),email=(d.email||'').trim().toLowerCase();
    if(name.length<2)return setErr(f,'Digite seu nome (mínimo 2 letras).');
    if(!okEmail(email))return setErr(f,'Digite um e-mail válido.');
    if((d.pw||'').length<6)return setErr(f,'A senha precisa ter pelo menos 6 caracteres.');
    if(d.pw!==d.pw2)return setErr(f,'As senhas não são iguais.');
    if(all[email])return setErr(f,'Já existe uma conta com esse e-mail. Tente entrar.');
    const salt=newSalt();
    all[email]={name,email,salt,hash:await hashPw(d.pw,salt),bio:'',fav:-1,avatar:'',created:Date.now()};
    saveUsers(all);store.set('sg_session',email);renderConta();toast('Conta criada! Bem-vindo, '+name.split(' ')[0]);
  }
  else if(f.id==='f-login'){
    const email=(d.email||'').trim().toLowerCase(),u=all[email];
    if(!okEmail(email))return setErr(f,'Digite um e-mail válido.');
    if(!u||u.hash!==await hashPw(d.pw||'',u.salt))return setErr(f,'E-mail ou senha incorretos.');
    store.set('sg_session',email);renderConta();toast('Olá de novo, '+u.name.split(' ')[0]);
  }
  else if(f.id==='f-prof'){
    const u=currentUser();if(!u)return;const name=(d.name||'').trim();
    if(name.length<2)return setErr(f,'Digite seu nome (mínimo 2 letras).');
    u.name=name;u.bio=(d.bio||'').trim();u.fav=parseInt(d.fav,10);all[u.email]=u;saveUsers(all);renderConta();toast('Alterações salvas');
  }
  else if(f.id==='f-pw'){
    const u=currentUser();if(!u)return;
    if(u.hash!==await hashPw(d.old||'',u.salt))return setErr(f,'A senha atual está incorreta.');
    if((d.pw||'').length<6)return setErr(f,'A nova senha precisa ter pelo menos 6 caracteres.');
    if(d.pw!==d.pw2)return setErr(f,'As senhas não são iguais.');
    u.salt=newSalt();u.hash=await hashPw(d.pw,u.salt);all[u.email]=u;saveUsers(all);f.reset();toast('Senha atualizada');
  }
});

document.addEventListener('change',e=>{
  if(e.target.id!=='avfile'||!e.target.files[0])return;
  const rd=new FileReader();
  rd.onload=()=>{const im=new Image();im.onload=()=>{
    const c=document.createElement('canvas');c.width=c.height=160;const s=Math.min(im.width,im.height);
    c.getContext('2d').drawImage(im,(im.width-s)/2,(im.height-s)/2,s,s,0,0,160,160);
    const u=currentUser(),all=users();u.avatar=c.toDataURL('image/jpeg',.85);all[u.email]=u;saveUsers(all);renderConta();toast('Foto atualizada')};
    im.onerror=()=>toast('Não foi possível abrir essa imagem');im.src=rd.result};
  rd.readAsDataURL(e.target.files[0]);
});

function toggleFav(i){const u=currentUser(),all=users();u.fav=u.fav===i?-1:i;all[u.email]=u;saveUsers(all);toast(u.fav===i?chars[i][0]+' é seu favorito':'Favorito removido')}
function openChar(i){
  const c=chars[i],u=currentUser(),g=groups.find(x=>x.id===c[3]);
  show(`<img class="cover" src="${IMG[c[1]]}" alt="${esc(c[0])}"><h3>${esc(c[0])}</h3>
  <p class="meta">Aparece em: ${esc(g.title)} (${g.year})</p>
  ${c[4].split('\n').map(p=>`<p class="story">${esc(p)}</p>`).join('')}
  <div class="row"><button class="btn" data-fav="${i}">${!u?'Entrar para favoritar':u.fav===i?'★ Favorito':'☆ Favoritar'}</button><button class="btn ghost" data-close>Fechar</button></div>`);
}

document.addEventListener('click',e=>{
  const t=e.target;let x;
  if(x=t.closest('[data-auth]')){authMode=x.dataset.auth;renderConta();return}
  if(x=t.closest('[data-eye]')){const i=x.previousElementSibling;i.type=i.type==='password'?'text':'password';x.textContent=i.type==='password'?'Mostrar':'Ocultar';return}
  if(t.closest('[data-logout]')){store.del('sg_session');authMode='login';renderConta();toast('Você saiu da conta');return}
  if(t.closest('[data-rmav]')){const u=currentUser(),all=users();u.avatar='';all[u.email]=u;saveUsers(all);renderConta();return}
  if(t.closest('[data-del]')){show(`<h3>Excluir conta?</h3><p>Seu perfil, foto e favorito serão apagados deste aparelho. Essa ação não pode ser desfeita.</p><div class="row"><button class="btn danger" data-delok style="flex:1">Excluir</button><button class="btn ghost" data-close style="flex:1">Cancelar</button></div>`);return}
  if(t.closest('[data-delok]')){const u=currentUser(),all=users();delete all[u.email];saveUsers(all);store.del('sg_session');closeSheet();authMode='reg';renderConta();toast('Conta excluída');return}
  if(x=t.closest('[data-fav]')){if(!currentUser()){closeSheet();go('conta');return}toggleFav(+x.dataset.fav);openChar(+x.dataset.fav);return}
  if(x=t.closest('[data-chip]')){$('#q').value=x.dataset.chip;renderBusca();return}
  if(x=t.closest('[data-res]')){const r=lastRes[+x.dataset.res];$('#q').value='';$('#qx').hidden=true;r.go();return}
});

buildIndex();updateAvBtn();

/* filtro dos personagens por jogo */
document.addEventListener('click',e=>{const x=e.target.closest('[data-gf]');if(!x)return;charFilter=x.dataset.gf;renderChars();$('#scroll').scrollTo({top:0})});