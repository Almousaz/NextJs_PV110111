import ClientComponent from "./components/ClientComponent";
import ServerComponent from "./components/ServerComponent";
import "./globals.css"


export default function Home() {
  return (
    <div>
      <h2>List of Components</h2>
        <ServerComponent />
        <ClientComponent />
    </div>
  );
}
