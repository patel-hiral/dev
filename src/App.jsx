import Counter from './components/Counter'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
export default function App() {
  return (
    <div>
      <Navbar />
      <main className='h-screen flex items-center flex-col justify-center bg-slate-900 text-white'>
        <h1 className='text-4xl'>Hello There, It Works on DEV.</h1>
        <Counter />
      </main>
      <Footer />
    </div>
  )
}
