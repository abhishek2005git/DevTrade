import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white flex">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
}
