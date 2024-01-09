import MainContent from "@/components/MainContent"
import Sidebar from "@/components/Sidebar"

export default function Home() {
  return (
    <main className="grid lg:grid-cols-[1fr_4fr]">
      <Sidebar />
      <MainContent />
    </main>
  )
}
