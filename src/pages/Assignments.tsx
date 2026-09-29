import {ExternalLink,Plus,Search,X} from 'lucide-react'
import {useEffect,useMemo,useState} from 'react'
import {PageTabs} from '../components/PageTabs'
import {getUnifiedServiceCatalog,getUnifiedWorkItems,sourceLabel} from '../integrations'
import type{ServiceCatalogItem,WorkItem} from '../integrations/types'
import {StatusPill} from '../components/StatusPill'

const tabs=['Últimas Movimentações','Atenção','Atribuições','Solicitações','Atendimentos']

export function Assignments(){
  const [active,setActive]=useState(tabs[0])
  const [catalogOpen,setCatalogOpen]=useState(false)
  const [query,setQuery]=useState('')
  const [items,setItems]=useState<WorkItem[]>([])
  const [catalog,setCatalog]=useState<ServiceCatalogItem[]>([])

  useEffect(()=>{
    Promise.all([getUnifiedWorkItems(),getUnifiedServiceCatalog()]).then(([workItems,services])=>{
      setItems(workItems)
      setCatalog(services)
    })
  },[])

  const list=useMemo(()=>{
    if(active==='Últimas Movimentações') return items.slice(0,4)
    if(active==='Atenção') return items.filter(item=>item.attention)
    if(active==='Atribuições') return items.filter(item=>item.kind==='atribuicao')
    if(active==='Solicitações') return items.filter(item=>item.kind==='solicitacao')
    return items.filter(item=>item.kind==='atendimento')
  },[active,items])

  const services=catalog.filter(service=>{
    const term=query.trim().toLowerCase()
    if(!term) return true
    return service.title.toLowerCase().includes(term)||service.description.toLowerCase().includes(term)
  })

  return <div>
    <div className="title-row">
      <div>
        <h1>Acompanhamentos</h1>
        <p>Itens de outros sistemas que dependem de você ou impactam seu trabalho.</p>
      </div>
      <button className="primary" onClick={()=>setCatalogOpen(true)}><Plus size={17}/>Solicitar</button>
    </div>

    <PageTabs tabs={tabs} active={active} onChange={setActive}/>

    <div className="cards-grid assignment-grid">
      {list.map(item=><article className="assignment-card" key={item.id}>
        <div className="source-badge">{sourceLabel(item.source)}</div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <StatusPill>{item.status}</StatusPill>
        <div className="assignment-note">Última movimentação registrada {item.updated}.</div>
        <small>{item.owner}</small>
        {item.externalUrl&&<a className="primary small link-btn" href={item.externalUrl} target="_blank" rel="noreferrer">
          <ExternalLink size={15}/>{item.actionLabel??'Abrir origem'}
        </a>}
      </article>)}
    </div>

    {catalogOpen&&<div className="service-overlay" onMouseDown={()=>setCatalogOpen(false)}>
      <section className="service-panel" onMouseDown={event=>event.stopPropagation()}>
        <div className="service-panel-head">
          <div>
            <h2>Solicitar serviço</h2>
            <p>Encontre o que precisa sem procurar em qual sistema o serviço está.</p>
          </div>
          <button className="icon-button service-close" onClick={()=>setCatalogOpen(false)} aria-label="Fechar"><X size={20}/></button>
        </div>

        <label className="service-search">
          <Search size={18}/>
          <input autoFocus value={query} onChange={event=>setQuery(event.target.value)} placeholder="Buscar serviço..."/>
        </label>

        <div className="service-list">
          {services.map(service=><a key={service.id} className="service-row" href={service.externalUrl} target="_blank" rel="noreferrer">
            <div>
              <strong>{service.title}</strong>
              <small>{service.description}</small>
            </div>
            <span>{sourceLabel(service.source)}</span>
          </a>)}
        </div>
      </section>
    </div>}
  </div>
}
