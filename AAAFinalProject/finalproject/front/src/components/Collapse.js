export default function Collapse({ faq, index }) {


  return (
    <div>
      <p>
        <button
          className="btn mt-3 collapse-faqs-btn"
          type="button"
          data-toggle="collapse"
          data-target={"#collapseExample" + index}
          aria-expanded="false"
          aria-controls="collapseExample"
          
        >
          {faq.question}
        </button>
      </p>
      <div className="collapse" id={"collapseExample" + index}>
        <div className="card card-body answer-container">{faq.answer}</div>
      </div>
    </div>
  );
}
