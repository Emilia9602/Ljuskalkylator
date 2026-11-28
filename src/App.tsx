import { Route, Routes } from "react-router-dom"
import OverviewPage from "./pages/OverviewPage"
import CalculatorPage from "./pages/CalculatorPage"
import RecipesPage from "./pages/RecipesPage"
import MaterialsPage from "./pages/MaterialsPage"
import SettingsPage from "./pages/SettingsPage"
import NotFoundPage from "./pages/NotFoundPage"
import AppLayout from "./components/layout/AppLayout"

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/materials" element={<MaterialsPage />} />
        <Route path="/settings" element={<SettingsPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppLayout>
  )
}

export default App