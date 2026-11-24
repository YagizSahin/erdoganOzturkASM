import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServiceStandardsPage from './pages/ServiceStandardsPage'
import ServicesPage from './pages/ServicesPage'
import DoctorsPage from './pages/DoctorsPage'
import DoctorDetailPage from './pages/DoctorDetailPage'
import MobileServicePage from './pages/MobileServicePage'
import HealthCalculatorsPage from './pages/HealthCalculatorsPage'
import GalleryPage from './pages/GalleryPage'
import PromoVideoPage from './pages/PromoVideoPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hakkimizda" element={<AboutPage />} />
        <Route path="/hizmet-standartlari" element={<ServiceStandardsPage />} />
        <Route path="/hizmetlerimiz" element={<ServicesPage />} />
        <Route path="/hekimlerimiz" element={<DoctorsPage />} />
        <Route path="/hekimlerimiz/:doctorId" element={<DoctorDetailPage />} />
        <Route path="/gezici-hizmet" element={<MobileServicePage />} />
        <Route path="/saglik-hesaplamalari" element={<HealthCalculatorsPage />} />
        <Route path="/galeri" element={<GalleryPage />} />
        <Route path="/tanitim-videosu" element={<PromoVideoPage />} />
        <Route path="/iletisim" element={<ContactPage />} />
      </Routes>
    </Layout>
  )
}

export default App
