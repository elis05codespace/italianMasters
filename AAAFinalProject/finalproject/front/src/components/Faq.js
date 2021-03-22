import Collapse from "./Collapse";
import { GlobalContext } from "../context/Context";
import { useContext } from "react";
// import faqs from "../data/faqs.json";

export default function Faq() {
  const { faqs, setFaqs } = useContext(GlobalContext);
  let faqss = faqs.map((faq, i) => {
    return (
      <div key={i}>
        <Collapse faq={faq} index={i} />
      </div>
    );
  });
  return (
    <div className=" container faqs-container">
      <h1 className="mb-5">Frequently Asked Questions</h1>
      <p>Can't find what you're looking for? Get in touch!</p>
      <p> We will be happy to solve all your doubts!</p>
      {faqss}
    </div>
  );
}
