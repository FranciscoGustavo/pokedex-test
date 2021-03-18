import Portal from "./components/Portal";
import Chat from "./components/Chat";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="app__title">Web app</h1>
      <Portal container={document.getElementById("chat-widget")}>
        <Chat />
      </Portal>
    </div>
  );
}

export default App;
