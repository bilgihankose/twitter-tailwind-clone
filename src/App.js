import Feed from "./Components/Feed";
import Sidebar from "./Components/Sidebar";
import Widgets from "./Components/Widgets";

export default function App() {
  return (
    <div className="container">
      <main className="flex min-h-screen max-w-7xl mx-auto">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
        <Widgets />
        {/* Modal */}
      </main>
    </div>
  );
}
