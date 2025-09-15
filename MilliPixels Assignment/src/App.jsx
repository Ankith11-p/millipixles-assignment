import './App.css'
import ContactDataRenderer from './components/ContactDataRenderer'
import { contacts } from './data/contacts'

function App() {
  return (
    <div>
      <h1>Contact Directory</h1>
      <p className="read-the-docs">Search by name or email .</p>'
      <ContactDataRenderer contacts={contacts} />
    </div>
  )
}

export default App
