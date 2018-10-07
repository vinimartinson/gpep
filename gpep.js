const sToMin = s => s/60

let candidatos = {
  jair: {
    votes: (40/100),
    rejeicao: (44/100),
    leis: 0.3,
    anos: 27,
    tv: sToMin(8) * 11 * 35,
    custo: 11,
    reeleicao: 6,
    trend: 0.31,
    trend_rej: 0.11,
    partidos: 8,
    notLegislative: false
  },
  haddad: {
    votes: (25/100),
    rejeicao: (41/100),
    notLegislative: true,
    tv: (2 + sToMin(23)) * 189 * 35,
    anos: 11,
    partidos: 1,
    leis: 0,
    reeleicao: 0,
    trend: 0.46,
    trend_rej: 0.44,
    custo: 217
  },
  marina: {
    votes: (3/100),
    rejeicao: (31/100),
    notLegislative: false,
    tv: sToMin(21) * 29 * 35,
    custo: 70,
    reeleicao: 2,
    anos: 22,
    partidos: 4,
    leis: 0.7,
    trend: -0.28,
    trend_rej: 0.13
  },
  geraldo: {
    votes: (8/100),
    rejeicao: (24/100),
    tv: (5 + sToMin(32)) * 434 * 35,
    custo: 500,
    anos: 36,
    reeleicao: 4,
    leis: 0.15,
    partidos: 2,
    notLegislative: false,
    trend: -0.04,
    trend_rej: -0.04
  },
  ciro: {
    votes: (15/100),
    rejeicao: (21/100),
    trend: 0.06,
    trend_rej: -0.04,
    leis: 0,
    notLegislative: false,
    custo: 210,
    tv: sToMin(38) * 51 * 35,
    anos: 19,
    reeleicao: 1,
    partidos: 7
  },
  meirelles: {
    votes: (2/100),
    rejeicao: (10/100)
  },
  daciolo: {
    votes: (2/100),
    rejeicao: (9/100)
  },
  eymael: {
    votes: (0.1/100),
    rejeicao: (8/100)
  },
  boulos: {
    votes: (1/100),
    rejeicao: (8/100)
  },
  vera: {
    votes: (0.1/100),
    rejeicao: (8/100)
  },
  alvaro: {
    votes: (2/100),
    rejeicao: (8/100)
  },
  amoedo: {
    votes: (3/100),
    rejeicao: (7/100)
  },
  goulart: {
    votes: (0.1/100),
    rejeicao: (6/100)
  }
}


function gpep(target) {
  let thisCandidatoName = target
  let thisCandidato = candidatos[thisCandidatoName]
  let alpha, beta
  thisCandidato.leis == 0 ? (alpha = -1, thisCandidato.leis = 1) : alpha = 1
  if (thisCandidato.notLegislative) {
    alpha = -0.05
    thisCandidato.leis = 1
  }
  thisCandidato.anos < 4 ? beta = 0 : beta = 1
  if (thisCandidato.anos > 4 && thisCandidato.reeleicao == 0) {
    thisCandidato.reeleicao = -1
  }
  let practice = (alpha * (thisCandidato.leis/thisCandidato.anos)) + (thisCandidato.reeleicao/(thisCandidato.anos/thisCandidato.leis))
  let votes = (thisCandidato.trend - thisCandidato.trend_rej) + (thisCandidato.votes/thisCandidato.rejeicao)/(Math.abs(thisCandidato.votes - (thisCandidato.tv * thisCandidato.rejeicao)))
  let party = beta * ((-1/thisCandidato.anos) * Math.log(thisCandidato.partidos/thisCandidato.anos))
  let cost = 1/(thisCandidato.custo)
  console.log('\npractice: ' + practice.toFixed(5) + ', ' + 'votes: ' + votes.toFixed(5) + ', ' + 'party: ' + party.toFixed(5) + ', ' + 'cost: ' + cost.toFixed(5))
  let gpepResult = practice + votes + party + cost
  console.log(thisCandidatoName + ' GPEP => ' + gpepResult.toFixed(5))
}

gpep('jair')
gpep('haddad')
gpep('marina')
gpep('geraldo')
gpep('ciro')
