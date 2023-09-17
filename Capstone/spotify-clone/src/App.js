import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./Login"
import Dashboard from "./Dashboard"

const code = new URLSearchParams(window.location.search).get("code")
// skim the url for the code ~ sent from api response
function App() {
  return code ? <Dashboard code={code} /> : <Login />
}
// if you have the code load the dashboard, otherwise login screen

export default App