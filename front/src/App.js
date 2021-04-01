import { GlobalContext } from "./context/Context";
import {
  BrowserRouter,
  Route,
  NavLink,
  Redirect,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";

import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageContactForm from "./pages/PageContactForm";
import PageCourses from "./pages/PageCourses";
import PageTeachers from "./pages/PageTeachers";
import PageFaq from "./pages/PageFaq";
import PageLogin from "./pages/PageLogin";
import PageRegister from "./pages/PageRegister";
import PageWorkWithUs from "./components/WorkWithUs";
import ScrollArrow from "./components/ScrollArrow";
import PageReviews from "./pages/PageReviews";
import PageHome from "./pages/PageHome";
import PageCheckout from "./pages/PageCheckout";
import Sidebar from "./components/Sidebar";
import PagePrivateCourses from "./pages/PagePrivatecourses";
import { UrlServer } from "./context/UrlServer";
import PageCoursesOnlyView from "./pages/PageCoursesOnlyView";

function App() {
  const [teachers, setTeachers] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [products, setProducts] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [user, setUser] = useState("");
  const [myCourses, setMyCourses] = useState([]);
  const [myPurchase, setMyPurchase] = useState("");

  useEffect(() => {
    fetch(UrlServer + "teacher/")
      .then((response) => response.json())
      .then((data) => setTeachers(data.splice(0, 6)));
  }, []);

  useEffect(() => {
    fetch(UrlServer + "review/")
      .then((response) => response.json())
      .then((data) => setReviews(data.splice(0, 10))); //or simply: data
  }, []);

  useEffect(() => {
    fetch(UrlServer + "product/")
      .then((response) => response.json())
      .then((data) => setProducts(data.splice(0, 6))); //or simply: data
  }, []);

  useEffect(() => {
    fetch(UrlServer + "faq/")
      .then((response) => response.json())
      .then((data) => setFaqs(data));
  }, []);

  function ScrollToTop() {
    const { pathname } = useLocation();
    console.log("hola");

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }

  return (
    <div className="App wrapper">
      <BrowserRouter>
        <ScrollToTop />
        <GlobalContext.Provider
          value={{
            teachers,
            setTeachers,
            reviews,
            setReviews,
            products,
            setProducts,
            faqs,
            setFaqs,
            user,
            setUser,
            myCourses,
            setMyCourses,
            myPurchase,
            setMyPurchase,
          }}
        >
          <Navbar />
          <Sidebar />
          <div className="height100">
            <Route exact path="/" component={PageHome} />
            <Route exact path="/home" component={PageHome} />
            <Route path="/login" component={PageLogin} />
            <Route path="/register" component={PageRegister} />
            <Route path="/faq" component={PageFaq} />
            <Route path="/contactus" component={PageContactForm} />
            <Route path="/courses" component={PageCourses} />
            <Route path="/teachers" component={PageTeachers} />
            <Route path="/workwithus" component={PageWorkWithUs} />
            <Route path="/reviews" component={PageReviews} />
            <Route path="/checkout" component={PageCheckout} />
            <Route path="/mycourses" component={PagePrivateCourses} />
            <Route path="/coursesOnlyView" component={PageCoursesOnlyView} />
            <ScrollArrow />
          </div>
          <Footer />
        </GlobalContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
