import type{IntegrationAdapter,IntegrationSource,ServiceCatalogItem,WorkItem}from'../types'

type AdapterSeed={
  source:IntegrationSource
  items:WorkItem[]
  services:ServiceCatalogItem[]
}

class MockIntegrationAdapter implements IntegrationAdapter{
  source:IntegrationSource
  constructor(private seed:AdapterSeed){this.source=seed.source}
  async listWorkItems(){return this.seed.items}
  async listServices(){return this.seed.services}
}

export const seiAdapter=new MockIntegrationAdapter({
  source:'SEI',
  items:[
    {id:'sei-1234',externalId:'0001234/2024-56',source:'SEI',kind:'atribuicao',title:'Processo SEI 0001234/2024-56',description:'Contratação de serviço de nuvem',status:'Em análise',owner:'Ana Costa (Unidade de TI)',updated:'há 2 horas',attention:true,externalUrl:'https://sei.ro.gov.br/',actionLabel:'Abrir no SEI',capabilities:['launch','read']},
    {id:'sei-9876',externalId:'0009876/2024-12',source:'SEI',kind:'atribuicao',title:'Processo SEI 0009876/2024-12',description:'Aquisição de notebooks',status:'Pendente',owner:'Marcos Lima (Compras)',updated:'há 1 dia',externalUrl:'https://sei.ro.gov.br/',actionLabel:'Abrir no SEI',capabilities:['launch','read']}
  ],
  services:[]
})

export const glpiAdapter=new MockIntegrationAdapter({
  source:'GLPI',
  items:[
    {id:'glpi-4587',externalId:'4587',source:'GLPI',kind:'atribuicao',title:'Chamado #4587',description:'Instalação de equipamentos',status:'Concluído',owner:'João Andrade (Suporte)',updated:'há 4 horas',externalUrl:'https://atendimento.setic.ro.gov.br/',actionLabel:'Abrir no GLPI',capabilities:['launch','read']}
  ],
  services:[
    {id:'glpi-suporte-ti',source:'GLPI',title:'Suporte de TI',description:'Abra um chamado para atendimento técnico.',category:'Tecnologia',externalUrl:'https://atendimento.setic.ro.gov.br/',capabilities:['launch']}
  ]
})

export const portalServidorAdapter=new MockIntegrationAdapter({
  source:'PORTAL_SERVIDOR',
  items:[
    {id:'ferias-2027',source:'PORTAL_SERVIDOR',kind:'solicitacao',title:'Marcação anual de férias',description:'Férias programadas para o próximo exercício',status:'Concluído',owner:'RH Setorial',updated:'há 1 dia',externalUrl:'https://portaldoservidor.sistemas.ro.gov.br/',actionLabel:'Ver no Portal',capabilities:['launch']},
    {id:'acesso-sei',source:'PORTAL_SERVIDOR',kind:'solicitacao',title:'Solicitação de acesso ao SEI',description:'Pedido de acesso para desempenho das funções',status:'Em análise',owner:'RH Setorial',updated:'há 2 dias',attention:true,externalUrl:'https://portaldoservidor.sistemas.ro.gov.br/',actionLabel:'Ver no Portal',capabilities:['launch']}
  ],
  services:[
    {id:'portal-ferias',source:'PORTAL_SERVIDOR',title:'Marcação anual de férias',description:'Programe suas férias para o próximo exercício.',category:'RH',externalUrl:'https://portaldoservidor.sistemas.ro.gov.br/',capabilities:['launch']},
    {id:'portal-banco-horas',source:'PORTAL_SERVIDOR',title:'Folga - banco de horas',description:'Solicite utilização do saldo disponível.',category:'RH',externalUrl:'https://portaldoservidor.sistemas.ro.gov.br/',capabilities:['launch']},
    {id:'portal-acesso-sistemas',source:'PORTAL_SERVIDOR',title:'Acesso a sistemas',description:'Solicite acesso aos sistemas do Poder Executivo.',category:'Acessos',externalUrl:'https://portaldoservidor.sistemas.ro.gov.br/',capabilities:['launch']}
  ]
})

export const alphaAdapter=new MockIntegrationAdapter({
  source:'ALPHA',
  items:[
    {id:'alpha-1932',externalId:'1932',source:'ALPHA',kind:'atendimento',title:'Atendimento #1932',description:'Solicitação de atendimento ao cidadão',status:'Pendente',owner:'Fila da unidade',updated:'há 38 minutos',attention:true,externalUrl:'https://alpha.sistemas.ro.gov.br/',actionLabel:'Atender no Alpha',capabilities:['launch','read']}
  ],
  services:[]
})

export const internoAdapter=new MockIntegrationAdapter({
  source:'INTERNO',
  items:[
    {id:'link-internet',source:'INTERNO',kind:'atribuicao',title:'Instalação de link de internet',description:'Unidade Administrativa',status:'Em andamento',owner:'Carla Mendes (Infraestrutura)',updated:'há 1 dia',externalUrl:'https://www.rondonia.ro.gov.br/',actionLabel:'Abrir demanda',capabilities:['launch']}
  ],
  services:[]
})

export const integrationAdapters:IntegrationAdapter[]=[
  seiAdapter,
  glpiAdapter,
  portalServidorAdapter,
  alphaAdapter,
  internoAdapter
]
