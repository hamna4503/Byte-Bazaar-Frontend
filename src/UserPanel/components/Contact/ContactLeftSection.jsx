import React from "react";

function ContactLeftSection() {
  return (
    <div className="p-10 pt-14 md:w-2/4">
      <h2 className="text-2xl font-bold mb-4">Ask how we can help you:</h2>
      <ul className="space-y-4 mb-8">
        <li>
          <h3 className="text-xl font-semibold">Request New Products</h3>
          <p>
            Request new products you require that you did not find on our
            website.
          </p>
        </li>
        <li>
          <h3 className="text-xl font-semibold">
            Provide Your Valuable Feedback
          </h3>
          <p>Your feedback is important! Tell us how we can do better..</p>
        </li>
        <li>
          <h3 className="text-xl font-semibold">Website Information</h3>
          <p>
            Seek guidance from our professionals regarding your web experience!
          </p>
        </li>
      </ul>
      <div>
        <h2 className="text-2xl font-bold mb-4">Points of Contact</h2>
        <address className="not-italic space-y-4">
          <div>
            <h3 className="text-xl font-semibold">P.K. | BYTEBAZAAR</h3>
            <p>11350 Gulistan e Jauhar, St. 11 , Karachi, 21031</p>
            <p>Billing Inquiries: (855) 979-7887</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Information and Sales</h3>
            <p>
              Email:{" "}
              <a
                href="mailto:partnermarketing@bytebazaar.com"
                className="text-blue-500"
              >
                partnermarketing@bytebazaar.com
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Support</h3>
            <p>
              Email:{" "}
              <a href="mailto:support@bytebazaar.com" className="text-blue-500">
                support@bytebazaar.com
              </a>
            </p>
          </div>
        </address>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Additional Office Locations</h2>
        <p>Karachi, Sindh</p>
        <p>D.H.A Phase 8, 10115 Karachi</p>
      </div>
    </div>
  );
}

export default ContactLeftSection;
