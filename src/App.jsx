import Footer from './components/Footer'
import Navbar from './components/Navbar'
export default function App() {
  return (
    <div>
      <Navbar />
      <main className='h-screen flex items-center justify-center bg-slate-900 text-white'>
        <h1 className='text-4xl'>Hello There, It Works on DEV(Hello There).</h1>
      </main>
      <Footer />
    </div>
  )
}
