import{ArrowRight,CheckSquare2,FolderKanban,Link2,AlertCircle,LifeBuoy,FileText}from'lucide-react'
import{useEffect,useMemo,useState}from'react'
import{Link}from'react-router-dom'
import{projects,tasks}from'../data/mock'
import{getUnifiedWorkItems,sourceLabel}from'../integrations'
import type{WorkItem}from'../integrations/types'
import{StatusPill}from'../components/StatusPill'

function SourceIcon({item}:{item:WorkItem}){
  if(item.source==='SEI')return <FileText size={18}/>
  if(item.source==='GLPI')return <LifeBuoy size={18}/>
  return <Link2 size={18}/>
}

export function Home(){
  const[externalItems,setExternalItems]=useState<WorkItem[]>([])

  useEffect(()=>{
    getUnifiedWorkItems().then(setExternalItems)
  },[])

  const attentionCount=useMemo(()=>externalItems.filter(item=>item.attention).length,[externalItems])
  const recentExternal=externalItems.slice(0,2)

  return <div>
    <div className="home-hero">
      <div>
        <p>Olá, Anderson 👋</p>
        <h1>Aqui é onde os projetos ganham vida.</h1>
        <span>Acompanhe o essencial e avance para os detalhes apenas quando precisar.</span>

        {attentionCount>0&&<Link to="/atribuicoes" className="home-attention-link">
          <AlertCircle size={16}/>
          <span><strong>{attentionCount}</strong> {attentionCount===1?'item precisa':'itens precisam'} da sua atenção</span>
          <ArrowRight size={15}/>
        </Link>}
      </div>

      <div className="hero-image">
        <div>Projetos conectam pessoas, decisões e resultados.</div>
      </div>
    </div>

    <div className="home-grid">
      <section className="panel panel-wide">
        <div className="panel-head inline">
          <div>
            <h2>Últimas Movimentações</h2>
            <span>Somente o que mudou recentemente, dentro e fora do Scope.</span>
          </div>
          <Link to="/atribuicoes">Acompanhamentos <ArrowRight size={15}/></Link>
        </div>

        <div className="movement-list">
          <div className="movement-row">
            <div className="movement-icon"><FolderKanban size={18}/></div>
            <div>
              <strong>{projects[0].title}</strong>
              <small>Status alterado para {projects[0].status.toLowerCase()} · Scope</small>
            </div>
            <StatusPill>{projects[0].status}</StatusPill>
            <time>há 2 horas</time>
          </div>

          <div className="movement-row">
            <div className="movement-icon"><CheckSquare2 size={18}/></div>
            <div>
              <strong>{tasks[0].title}</strong>
              <small>Nova atualização registrada na tarefa · Scope</small>
            </div>
            <StatusPill>{tasks[0].status}</StatusPill>
            <time>há 1 dia</time>
          </div>

          {recentExternal.map(item=><div className="movement-row" key={item.id}>
            <div className="movement-icon"><SourceIcon item={item}/></div>
            <div>
              <strong>{item.title}</strong>
              <small>{item.description} · {sourceLabel(item.source)}</small>
            </div>
            <StatusPill>{item.status}</StatusPill>
            <time>{item.updated}</time>
          </div>)}
        </div>
      </section>

      <section className="panel compact-panel">
        <div className="panel-head inline">
          <h2>Minhas Tarefas</h2>
          <Link to="/tarefas">Ver todas <ArrowRight size={15}/></Link>
        </div>
        {tasks.slice(0,3).map(t=><div key={t.id} className="simple-row">
          <span className="check-dot"/>
          <div><strong>{t.title}</strong><small>{t.date}</small></div>
        </div>)}
      </section>

      <section className="panel compact-panel">
        <div className="panel-head inline">
          <h2>Meus Projetos</h2>
          <Link to="/projetos">Ver todos <ArrowRight size={15}/></Link>
        </div>
        {projects.slice(0,2).map(p=><div key={p.id} className="simple-project">
          <img src={p.image}/>
          <div>
            <strong>{p.title}</strong>
            <small>{p.subtitle}</small>
            <div className="progress"><span style={{width:`${p.progress}%`}}/></div>
          </div>
        </div>)}
      </section>
    </div>
  </div>
}
