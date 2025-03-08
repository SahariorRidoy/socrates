import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";


export default function App() {
  return (
    <>
  <main className="w-[1440px] text-white mx-auto my-auto mt-1 h-[900px] bg-[#242424] p-4 rounded-4xl">
    <div className="flex gap-3">
      <aside> <SidebarLeft/> </aside>
      <aside> <SidebarRight/></aside>
    </div>
  </main>
    </>
  );
}
