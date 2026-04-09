window.addEventListener('load', AOS.refresh)
AOS.init();


if (navigator.userAgent.includes("Instagram")) {
  document.getElementById("TituloNav").style.fontSize = "16px";
  document.getElementById("imgLogo").style.width = "40px";
  document.getElementById("imgLogo").style.height = "40px";
  document.getElementById("txtApre").style.fontSize = "20px";
  document.getElementById("cardHabilidades").style.height = "280px !important";
  document.getElementById("cardHabilidades2").style.height = "280px !important";
}

 document.addEventListener('DOMContentLoaded', function() {
    const sonic = document.getElementById('sonic');
    const ring = document.getElementById('ring');
    const ring2 = document.getElementById('ring2');
    const ring3 = document.getElementById('ring3');
    const html = document.getElementById('html');
    const css = document.getElementById('css');
    const js = document.getElementById('js');
    const brilho = document.getElementById('brilho');
    const brilho2 = document.getElementById('brilho2');
    const brilho3 = document.getElementById('brilho3');

    // Movimento responsivo: calcula a distância real (px) entre Sonic e a moeda.
    let sonicTranslateX = 0;
    let isSonicMoving = false;

    const getCenterX = (el) => {
      const r = el.getBoundingClientRect();
      return r.left + r.width / 2;
    };

    const getSonicCenterX = () => {
      const r = sonic.getBoundingClientRect();
      return r.left + r.width / 2;
    };

    const moveSonicTo = (targetEl) => {
      if (!targetEl) return Promise.resolve();
      if (isSonicMoving) return Promise.resolve();
      isSonicMoving = true;

      sonic.src = 'img/sonic4.gif';
      sonic.classList.add('sonic-moving');

      // Distância em pixels a percorrer (baseado na posição real na tela)
      const deltaX = getCenterX(targetEl) - getSonicCenterX();
      const nextTranslate = sonicTranslateX + deltaX;

      // Duração proporcional à distância (px/s) com limites para não ficar muito rápido/lento
      const speedPxPerSec = 900;
      const minMs = 450;
      const maxMs = 1600;
      const durationMs = Math.max(minMs, Math.min(maxMs, Math.abs(deltaX) / speedPxPerSec * 1000));

      sonic.style.transitionDuration = `${durationMs}ms`;
      sonic.style.transform = `translateX(${nextTranslate}px)`;

      return new Promise((resolve) => {
        const onEnd = (ev) => {
          if (ev.propertyName !== 'transform') return;
          sonic.removeEventListener('transitionend', onEnd);
          sonicTranslateX = nextTranslate;
          sonic.classList.remove('sonic-moving');
          sonic.src = 'img/sonic3.gif';
          isSonicMoving = false;
          resolve();
        };
        sonic.addEventListener('transitionend', onEnd);
      });
    };

    // Se a tela mudar de tamanho, recalcula a posição "atual" do Sonic mantendo o alinhamento visual.
    // (evita drift quando o layout muda por responsividade)
    window.addEventListener('resize', () => {
      if (isSonicMoving) return;
      // Mantém o translateX atual, mas força reflow para garantir coerência visual.
      // Se você quiser "resetar" o Sonic ao início ao redimensionar, troque para: sonicTranslateX = 0; sonic.style.transform = 'translateX(0px)';
      sonic.style.transform = `translateX(${sonicTranslateX}px)`;
    });
    
    ring.addEventListener('click', function() {
      moveSonicTo(ring);

      html.classList.add('girar-trocar');
      setTimeout(function() {
        html.src = 'img/linguagens/programing.png'; 
        html.classList.add('invertida');
      }, 500);

      html.addEventListener('animationend', function trocarImg() {
        html.classList.remove('girar-trocar');
        html.removeEventListener('animationend', trocarImg);
        ring.style.display = 'none';
        brilho.style.display = 'block';
        setTimeout(function() {
        brilho.style.display = 'none';
      }, 300);
      });
    });
    
    ring2.addEventListener('click', function() {
      moveSonicTo(ring2);

      css.classList.add('girar-trocar');
      setTimeout(function() {
      css.src = 'img/linguagens/react.png'; 
      }, 500);

      css.addEventListener('animationend', function trocarImg() {
        css.classList.remove('girar-trocar');
        css.removeEventListener('animationend', trocarImg);
        css.classList.add('invertida'); 
        ring2.style.display = 'none';
        brilho2.style.display = 'block';
        setTimeout(function() {
        brilho2.style.display = 'none';
      }, 300);
        });
    });

    ring3.addEventListener('click', function() {
      moveSonicTo(ring3);

      js.classList.add('girar-trocar');
      setTimeout(function() {
      js.src = 'img/linguagens/brands.png'; 
      }, 500);

      js.addEventListener('animationend', function trocarImg() {
        js.classList.remove('girar-trocar');
        js.removeEventListener('animationend', trocarImg);
        js.classList.add('invertida');
        ring3.style.display = 'none'; 
        brilho3.style.display = 'block';
        setTimeout(function() {
        brilho3.style.display = 'none';
      }, 300);
        });
    });

    initModalProjetos();
  
});

function initModalProjetos() {
  const modal = document.getElementById('modalProjeto');
  if (!modal) return;

  const PROJETOS = {
    1: {
      title: 'Saúde para médicos',
      tipo: 'Item — Site informativo',
      rarity: 'Incomum',
      status: 'Missão concluída',
      role: 'Informação e integração de benefícios',
      desc: 'Um site informativo sobre os benefícios para médicos relacionado a saúde, contendo informações sobre os acessos permitidos e integração com todos os benefícios a qual o CREMESP propõe para os médicos, esse site foi feito com PHP, JavaScript, HTML, CSS.',
      url: 'https://saudeparamedicos.cremesp.org.br/',
      img: 'img/SIMBOLO.svg'
    },
    2: {
      title: 'Clube de benefícios CREMESP',
      tipo: 'Item — Portal de vantagens',
      rarity: 'Raro',
      status: 'Em produção',
      role: 'Cupons, categorias e CMS dedicado',
      desc: 'Um site do clube de benefícios do CREMESP, com acesso a cupons e áreas de vantagens, onde o controle de benefícios, categorias e dados gerais é gerenciado por um sistema. Um gerenciador de conteúdo semelhante ao WordPress que mantém o site customizado e automatizado, de acordo com os benefícios que forem incluídos.',
      url: 'https://cb.cremesp.org.br/',
      img: 'img/cb.jpg'
    },
    3: {
      title: 'Aplicativo CREMESP',
      tipo: 'Item — App mobile',
      rarity: 'Épico',
      status: 'Em produção',
      role: 'Login, WebViews e artigos exclusivos',
      desc: 'Desenvolvimento do Aplicativo do CREMESP em Flutter com serviço de login, para os médicos de São Paulo, e contém acesso as suas plataformas Web e Artigos online exclusivos, por meio de Webviews.',
      url: 'https://play.google.com/store/apps/details?id=br.org.cremesp.app',
      img: 'img/app.jpg'
    },
    4: {
      title: 'Medicina em foco',
      tipo: 'Item — Portal de conteúdo',
      rarity: 'Raro',
      status: 'Missão concluída',
      role: 'CMS, artigos e especialidades médicas',
      desc: 'Um projeto que objetiva proporcionar ao usuário acesso a textos sobre as diversas especialidades médicas, os artigos são criados e gerenciados por um cms feito em php, jquery, mysql com requisições AJAX e o front end em HTML, CSS e Bootstrap.',
      url: 'https://www.cremesp.org.br/?siteAcao=MedicinaEmFoco',
      img: 'img/BANNER_TOPO.jpg'
    },
    5: {
      title: 'Portal Seguros Unimed',
      tipo: 'Item — Portal corporativo',
      rarity: 'Épico',
      status: 'Em produção',
      role: 'Acesso de corretores e jornada do cliente',
      desc: 'Site principal da Seguros Unimed, onde o corretor tem o acesso e faz o login dependendo de seu produto e seu seguro e também o mesmo site pelo qual o cliente pode solicitar o seguro e conhecer mais sobre a Seguros Unimed e como ela funciona.',
      url: 'https://www.segurosunimed.com.br/login-corretor',
      img: 'img/seguros.png'
    },
    6: {
      title: 'Portal do Corretor',
      tipo: 'Item — Sistema web',
      rarity: 'Lendário',
      status: 'Em produção',
      role: 'Apólices, cotações e relatórios',
      desc: 'Portal do corretor onde ele gerenciava as apólices e cotações referente aos produtos dos ramos elementares como RCP, Empresarial, Residencial etc, esse portal contém consulta de apólices, propostas e cotações de mais de 6 produtos com ambos a permissão de criação, geração de boleto, relatórios e tudo mais.',
      url: 'https://portal.segurosunimed.com.br',
      img: 'img/ecc44e71c11a4ff2a1023a36f6b4f953.png'
    },
    7: {
      title: 'Portal do Corretor — Apólices',
      tipo: 'Item — Módulo crítico',
      rarity: 'Épico',
      status: 'Em produção',
      role: 'Criação e consulta de apólices',
      desc: 'Uma nova funcionalidade do portal do corretor que era a permissão de criar apólices e fazer consultas, permitindo visualização de clientes, consultas de propostas, movimentações financeiras, uma interface HTML própria da Seguros do que a outra plataforma de gerenciamento de seguros a qual utilizavam.',
      url: 'https://ra.segurosunimed.com.br/NossosProdutos/Produto/6',
      img: 'img/ecc44e71c11a4ff2a1023a36f6b4f953.png'
    },
    8: {
      title: 'Santander ChatWeb',
      tipo: 'Item — Chat Santander',
      rarity: 'Incomum',
      status: 'Em produção',
      role: 'Chat com o suporte do Santander',
      desc: 'ChatWeb do Santander, onde o cliente pode conversar com o suporte do Santander e ter o atendimento de forma rápida e eficiente, com acesso a todas as funcionalidades do Santander.',
      url: 'https://chat.santander.com.br/web/?queue=64e8',
      img: 'img/santander2.png'
    },
    9: {
      title: 'Pássaro Urbano',
      tipo: 'Item — Projeto acadêmico',
      rarity: 'Raro',
      status: 'Concluído',
      role: 'E-commerce de jogos com API e carrinho',
      desc: 'Site de promoções estilo Peixe Urbano só que para compra de jogos feitas em Angular alimentadas por dados de uma API Rest e utilizando bibliotecas como rxjs para o gerenciamento dos conteúdos; dentro do site é possível fazer toda uma consulta por jogos, validação e integração de carrinho.',
      url: 'https://github.com/LeonardoDaRocha745/PassaroUrbano',
      img: 'img/logo.png'
    },
    10: {
      title: 'Snake Game',
      tipo: 'Item — Jogo mobile',
      rarity: 'Incomum',
      status: 'Concluído',
      role: 'Controle por arrastar na tela',
      desc: 'Um clássico jogo da cobra feito totalmente em Flutter para os celulares sendo controlado pelo movimento de arrastar do touchscreen para movimentar a cobra; o jogo segue a mesma fórmula do antigo e clássico jogo da cobrinha só que adaptado para os celulares atuais.',
      url: 'https://github.com/LeonardoDaRocha745/SnakeGame',
      img: 'img/snake.png'
    },
    11: {
      title: 'Challenge Treinamento da EY',
      tipo: 'Item — Plataforma web',
      rarity: 'Raro',
      status: 'Concluído',
      role: 'Treino de hard e soft skills',
      desc: 'Uma plataforma Web com responsividade mobile para treinamento e desenvolvimento de Hard e Soft Skills para funcionários da EY.',
      url: 'https://github.com/atila9595/ChallengeEY',
      img: 'img/ey-logo-com-a-escrita-em-branco-.png'
    },
    12: {
      title: 'Trokupom',
      tipo: 'Item — Startup',
      rarity: 'Épico',
      status: 'Arquivado',
      role: 'Trocas, cupons e stack full',
      desc: 'Uma startup de um aplicativo de trocas de produtos usados que é estimulado por ganhos de cupons de vantagens com o Front-end em HTML, CSS, Javascript e o Back-End com Flask do Python e banco de dados MYSQL.',
      url: 'https://github.com/atila9595/skambo-app-v1.1',
      img: 'img/site.png'
    },
    13: {
      title: 'Bradesco Empresas: Conta PJ',
      tipo: 'Item — App mobile',
      rarity: 'Lendário',
      status: 'Em produção',
      role: 'Gestão financeira PJ no celular',
      desc: 'Aplicativo oficial Bradesco Empresas para gestão da conta pessoa jurídica: acompanhe saldo e extrato em tempo real, Pix PJ, boletos e QR Code, recebimentos e pagamentos, soluções de maquininha e link de pagamento, crédito para o negócio e atendimento com suporte e BIA. Foco em simplificar o dia a dia financeiro da empresa em um só app.',
      url: 'https://play.google.com/store/apps/details?id=br.com.bradesco.pdpjapp&hl=pt',
      img: 'img/bradesco.png'
    },
    14: {
      title: 'Banco Safra',
      tipo: 'Item — Ecossistema digital',
      rarity: 'Lendário',
      status: 'Em produção',
      role: 'Canais PF, PJ e institucional',
      desc: 'Atuação em projetos do ecossistema Safra nas frentes IBF, IBJ, MBF e MBJ, com experiência nos aplicativos do banco para pessoa física e jurídica, além do site institucional e das experiências web — integração entre canais digitais, produtos e jornadas de cliente no Safra.',
      url: 'https://www.safra.com.br/',
      img: 'img/safra.jpg'
    }
  };

  const tituloEl = document.getElementById('modalProjetoTitulo');
  const tipoEl = document.getElementById('modalProjetoTipo');
  const rarityEl = document.getElementById('modalProjetoRarity');
  const statusEl = document.getElementById('modalProjetoStatus');
  const roleEl = document.getElementById('modalProjetoRole');
  const descEl = document.getElementById('modalProjetoDesc');
  const imgEl = document.getElementById('modalProjetoImg');
  const linkEl = document.getElementById('modalProjetoLink');

  const openModal = (id) => {
    const p = PROJETOS[id];
    if (!p || !tituloEl) return;
    tituloEl.textContent = p.title;
    tipoEl.textContent = p.tipo;
    rarityEl.textContent = p.rarity;
    statusEl.textContent = p.status;
    roleEl.textContent = p.role;
    descEl.textContent = p.desc;
    imgEl.src = p.img;
    imgEl.alt = p.title;
    linkEl.href = p.url;
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    linkEl.focus();
  };

  const closeModal = () => {
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('.mc-slot[data-projeto]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.getAttribute('data-projeto'), 10);
      if (!Number.isNaN(id)) openModal(id);
    });
  });

  modal.querySelectorAll('[data-close-modal]').forEach((el) => {
    el.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hasAttribute('hidden')) {
      closeModal();
    }
  });
}


