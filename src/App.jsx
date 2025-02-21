import Footer from './components/Footer'
import Navbar from './components/Navbar'
export default function App() {
  return (
    <div>
      <Navbar />
      <main className='h-screen flex items-center justify-center'>
        <h1>Hello There, It Works on DEV.</h1>
      </main>
      <Footer />
    </div>
  )
}
