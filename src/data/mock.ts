export type Project={id:string;title:string;subtitle:string;status:'Em andamento'|'Planejamento'|'Em análise'|'Concluído';progress:number;updated:string;image:string;hasExternal?:boolean}
export type Task={id:string;title:string;description:string;status:'Em andamento'|'Pendente'|'Concluída';priority:'Alta'|'Média'|'Baixa';owner:string;date:string}
export type AssignmentSource='SEI'|'GLPI'|'Interno'|'Portal'|'Alpha'
export type AssignmentKind='atribuicao'|'solicitacao'|'atendimento'
export type Assignment={
  id:string
  title:string
  subtitle:string
  source:AssignmentSource
  kind:AssignmentKind
  status:'Em análise'|'Concluído'|'Em andamento'|'Pendente'
  owner:string
  updated:string
  externalUrl:string
  actionLabel?:string
  attention?:boolean
}
export type ServiceShortcut={id:string;title:string;description:string;source:'Portal'|'GLPI';externalUrl:string}

export const projects:Project[]=[
  {id:'visao-computacional',title:'Visão Computacional',subtitle:'Pesquisa e desenvolvimento',status:'Em andamento',progress:70,updated:'há 2 horas',image:'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',hasExternal:true},
  {id:'infovia-candeias',title:'Infovia - Passando cabo em Candeias',subtitle:'Infraestrutura de rede',status:'Planejamento',progress:25,updated:'há 4 horas',image:'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',hasExternal:true},
  {id:'portal-institucional',title:'Novo Portal Institucional',subtitle:'Comunicação e Tecnologia',status:'Em andamento',progress:60,updated:'há 1 dia',image:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80'},
  {id:'datacenter',title:'Modernização do Datacenter',subtitle:'Tecnologia da Informação',status:'Concluído',progress:100,updated:'há 3 dias',image:'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',hasExternal:true}
]

export const tasks:Task[]=[
  {id:'api-quadro',title:'Revisar documentação da API',description:'João Andrade atualizou a documentação conforme os novos endpoints.',status:'Em andamento',priority:'Alta',owner:'João Andrade',date:'28/03/2024'},
  {id:'glpi-prototipo',title:'Validar protótipo do GLPI',description:'Carla Mendes solicitou a revisão do protótipo para homologação.',status:'Pendente',priority:'Média',owner:'Carla Mendes',date:'27/03/2024'},
  {id:'equipamentos',title:'Instalação de novos equipamentos',description:'Pedro Alves iniciou a tarefa de configuração dos equipamentos do laboratório.',status:'Em andamento',priority:'Média',owner:'Pedro Alves',date:'25/03/2024'},
  {id:'seguranca-acessos',title:'Análise de segurança dos acessos',description:'Fernanda Lima solicitou a revisão dos perfis de acesso da rede.',status:'Concluída',priority:'Baixa',owner:'Fernanda Lima',date:'22/03/2024'}
]

export const assignments:Assignment[]=[
  {id:'sei-1234',title:'Processo SEI 0001234/2024-56',subtitle:'Contratação de serviço de nuvem',source:'SEI',kind:'atribuicao',status:'Em análise',owner:'Ana Costa (Unidade de TI)',updated:'há 2 horas',externalUrl:'https://sei.ro.gov.br/',actionLabel:'Abrir no SEI',attention:true},
  {id:'glpi-4587',title:'Chamado #4587',subtitle:'Instalação de equipamentos',source:'GLPI',kind:'atribuicao',status:'Concluído',owner:'João Andrade (Suporte)',updated:'há 4 horas',externalUrl:'https://atendimento.setic.ro.gov.br/',actionLabel:'Abrir no GLPI'},
  {id:'link-internet',title:'Instalação de link de internet',subtitle:'Unidade Administrativa',source:'Interno',kind:'atribuicao',status:'Em andamento',owner:'Carla Mendes (Infraestrutura)',updated:'há 1 dia',externalUrl:'https://www.rondonia.ro.gov.br/',actionLabel:'Abrir demanda'},
  {id:'ferias-2027',title:'Marcação anual de férias',subtitle:'Férias programadas para o próximo exercício',source:'Portal',kind:'solicitacao',status:'Concluído',owner:'RH Setorial',updated:'há 1 dia',externalUrl:'https://portaldoservidor.sistemas.ro.gov.br/',actionLabel:'Ver no Portal'},
  {id:'acesso-sei',title:'Solicitação de acesso ao SEI',subtitle:'Pedido de acesso para desempenho das funções',source:'Portal',kind:'solicitacao',status:'Em análise',owner:'RH Setorial',updated:'há 2 dias',externalUrl:'https://portaldoservidor.sistemas.ro.gov.br/',actionLabel:'Ver no Portal',attention:true},
  {id:'alpha-1932',title:'Atendimento #1932',subtitle:'Solicitação de atendimento ao cidadão',source:'Alpha',kind:'atendimento',status:'Pendente',owner:'Fila da unidade',updated:'há 38 minutos',externalUrl:'https://alpha.sistemas.ro.gov.br/',actionLabel:'Atender no Alpha',attention:true},
  {id:'sei-9876',title:'Processo SEI 0009876/2024-12',subtitle:'Aquisição de notebooks',source:'SEI',kind:'atribuicao',status:'Pendente',owner:'Marcos Lima (Compras)',updated:'há 1 dia',externalUrl:'https://sei.ro.gov.br/',actionLabel:'Abrir no SEI'}
]

export const serviceShortcuts:ServiceShortcut[]=[
  {id:'ferias',title:'Marcação anual de férias',description:'Programe suas férias para o próximo exercício.',source:'Portal',externalUrl:'https://portaldoservidor.sistemas.ro.gov.br/'},
  {id:'banco-horas',title:'Folga - banco de horas',description:'Solicite utilização do saldo disponível.',source:'Portal',externalUrl:'https://portaldoservidor.sistemas.ro.gov.br/'},
  {id:'acesso-sistemas',title:'Acesso a sistemas',description:'Solicite acesso aos sistemas do Poder Executivo.',source:'Portal',externalUrl:'https://portaldoservidor.sistemas.ro.gov.br/'},
  {id:'suporte-ti',title:'Suporte de TI',description:'Abra um chamado para atendimento técnico.',source:'GLPI',externalUrl:'https://atendimento.setic.ro.gov.br/'}
]
