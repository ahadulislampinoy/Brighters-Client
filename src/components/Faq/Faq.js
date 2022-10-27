import React from "react";

const Faq = () => {
  return (
    <div>
      <div className="bg-[#f3f4f9] py-20 px-4 text-gray-900">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row">
          <h2 className="mr-8 mb-16 w-full md:w-1/3 text-4xl font-extrabold ">
            Frequently-asked questions
          </h2>
          <dl className="w-full md:w-2/3">
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">
                Is Brighters an accredited institution? Do I receive anything
                after I complete a course?
              </h3>
            </dt>
            <dd className="mb-14">
              <p>
                While Brighters is not an accredited institution, we offer
                skills-based courses taught by real-world experts in their
                field. Every approved, paid course features a certificate of
                completion to document your accomplishment.
              </p>
            </dd>
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">
                How can I pay for a course?
              </h3>
            </dt>
            <dd className="mb-14">
              <p>
                Brighters supports several different payment methods, depending
                on your account country and location.
              </p>
            </dd>
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">
                What if I don’t like a course I purchased?
              </h3>
            </dt>
            <dd className="mb-14">
              <p>
                We want you to be satisfied, so all eligible courses purchased
                on Brighters can be refunded within 30 days. If you are unhappy
                with a course, you can request a refund, provided the request
                meets the guidelines in our refund policy.
              </p>
            </dd>
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">
                Will I continue to have access to the course even after I
                complete it?
              </h3>
            </dt>
            <dd className="mb-14">
              <p>
                Yes. You will continue to have access to the course after you
                complete it, provided that your account’s in good standing, and
                Brighters continues to have a license to the course. So, if you
                wish to review specific content in the course after you finish
                it,
              </p>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Faq;
