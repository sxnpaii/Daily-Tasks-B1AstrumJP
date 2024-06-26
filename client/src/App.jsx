import { lazy, Suspense } from "react";
import IsLoader from "./components/isLoader/isLoader";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ActionsProvider from "./Contexts/ActionsContext";

function App() {
  // public routes
  const MainPage = lazy(() => import("./pages/mainPage/mainPage"));
  const RegisterPage = lazy(() => import("./pages/registerPage/registerPage"));
  const LoginPage = lazy(() => import("./pages/loginPage/loginPage"));
  const UserMessagePage = lazy(() =>
    import("./pages/userMessagePage/userMessagePage")
  );
  // private routes
  const BoardLayout = lazy(() => import("./layouts/BoardLayout"));
  const DailyEventPage = lazy(() =>
    import("./pages/TaskPages/dailyEventPage")
  );
  return (
    <Router>
      <Suspense fallback={<IsLoader />}>
        <ActionsProvider>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/user/message" element={<UserMessagePage />} />
            {/* //? this is a layout for daily, weekly and monthly tasks */}
            <Route path="/board" element={<BoardLayout />}>
              <Route path="/board/daily" element={<DailyEventPage />} index />
              {/* // todo: this routes should be added */}
              {/* <Route path="/board/weekly" element={<WeeklyEventPage />}  /> */}
              {/* <Route path="/board/monthly" element={<MonthlyEventPage />}  /> */}
            </Route>
          </Routes>
        </ActionsProvider>
      </Suspense>
    </Router>
  );
}

export default App;
