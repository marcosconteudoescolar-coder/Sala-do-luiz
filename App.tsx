import {
  BookOpen,
  ClipboardList,
  Construction,
  FilePenLine,
  History,
  House,
  LayoutDashboard,
  ListChecks,
  ShieldCheck,
} from 'lucide-react'
import { Navigate, Route, Routes } from 'react-router'
import { AppShell, type NavItem } from './components/AppShell'
import { PortalAluno } from './pages/PortalAluno'

const aluno: NavItem[] = [
  { to: '/', label: 'Início', icon: House, end: true },
  { to: '/provas', label: 'Provas', icon: ClipboardList },
  { to: '/disciplinas', label: 'Disciplinas', icon: BookOpen },
  { to: '/historico', label: 'Histórico', icon: History },
]

const professor: NavItem[] = [
  { to: '/professor', label: 'Painel', icon: LayoutDashboard, end: true },
  { to: '/professor/provas', label: 'Provas', icon: FilePenLine },
  { to: '/professor/fiscalizacao', label: 'Fiscalização', icon: ShieldCheck },
  { to: '/professor/resultados', label: 'Resultados', icon: ListChecks },
]

function EmConstrucao({ titulo, fase }: { titulo: string; fase: number }) {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold tracking-tight">{titulo}</h1>
      <div className="flex flex-col items-center gap-2 rounded-lg border border-dashed border-line bg-surface px-6 py-12 text-center">
        <Construction className="size-6 text-muted" aria-hidden />
        <p className="text-sm font-medium">Tela ainda não implementada</p>
        <p className="text-sm text-muted">Prevista para a Fase {fase}. Nada aqui é salvo.</p>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell area="Aluno" items={aluno} />}>
        <Route index element={<PortalAluno />} />
        <Route path="provas" element={<EmConstrucao titulo="Provas disponíveis" fase={2} />} />
        <Route path="disciplinas" element={<EmConstrucao titulo="Disciplinas" fase={2} />} />
        <Route path="historico" element={<EmConstrucao titulo="Histórico" fase={2} />} />
      </Route>
      <Route path="professor" element={<AppShell area="Professor" items={professor} />}>
        <Route index element={<EmConstrucao titulo="Painel do professor" fase={2} />} />
        <Route path="provas" element={<EmConstrucao titulo="Provas" fase={2} />} />
        <Route path="fiscalizacao" element={<EmConstrucao titulo="Fiscalização" fase={6} />} />
        <Route path="resultados" element={<EmConstrucao titulo="Resultados" fase={2} />} />
      </Route>
      <Route path="login" element={<EmConstrucao titulo="Entrar" fase={3} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
