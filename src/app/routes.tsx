import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const AnalysisGame = lazy(() => import('../features/analysis/components/AnalysisGame'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<div className="loading-screen">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Navigate to="/analysis" replace />} />
        <Route path="/analysis" element={<AnalysisGame />} />
        <Route path="*" element={<Navigate to="/analysis" replace />} />
      </Routes>
    </Suspense>
  );
}
