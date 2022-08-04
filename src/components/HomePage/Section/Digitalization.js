import React from "react";
import DigitalizationImg from "../../../assets/images/TheDigitalizationWave.png";

const Digitalization = () => {
  return (
    <div className="bg-page mt-5">
      <div className="w-11/12 md:w-5/6 mx-auto  lg:w-11/12 xl:w-9/12 pb-10">
        <h2 className="font-bold text-center mx-auto pt-16">
          The Digitalization Wave
        </h2>
        <img
          src={DigitalizationImg}
          alt="DigitalizationImg"
          className="mt-10"
        />
        <p className="text-justify mt-2">
          2020 Recap: The pandemic has reiterated the need for every business to
          become a digital business. With most business operations being carried
          out remotely in the interests of social distancing, the need for
          organizations to have policies, practices, and technology for this to
          become feasible intensified. As part of this, businesses had to adopt
          agile practices, reskill, and retool to keep up with the wave of
          digitalization that had begun before the pandemic and had accelerated
          during the months of lockdown. After all, in the era of
          digitalization, what is more important than the size of an
          organization is how quickly it responds and adapts to constantly
          changing conditions.
        </p>
        <p className="text-justify mt-2">
          2021 Outlook: One important aspect of digitalization is reviving or
          revitalizing the core of technology operations in the organization.
          This includes breathing new life into legacy systems with a new
          generation of powerful, easy to use, low-code platforms. This means
          that in 2021, organizations will have to think about reducing
          technical debt by refactoring or re-architecting critical
          applications. One important way of reducing legacy system debt is to
          consider migrating critical IT assets, in addition to data and
          workloads, to the cloud. Whether the organization decides to use a
          lift-and-shift approach or re-architect from scratch, moving legacy
          assets to the cloud will allow you to leverage the benefits of
          scalability, agility, and cost-effectiveness of a cloud-first model,
          whether the organization decides to select a single cloud,
          multi-cloud, or hybrid cloud strategy.
        </p>
        <p className="text-justify mt-2">
          Upgrading entire legacy systems, for example ERP systems, can seem
          complicated, time-consuming, and expensive due to various factors such
          as outdated governance requirements, spaghetti code, and dated
          workarounds and fixes. In such a case, migrating to the cloud or
          undertaking other modernization initiatives will have a significant
          time and money cost. To circumvent this, technology can enable this to
          be streamlined, for example by using sophisticated algorithms to
          understand which area of an ERP system will have the most significant
          impact on the bottom line. Using tools, you can even recode critical
          applications (leaving your existing ERP system intact) or replatform
          them in ways that minimize technical debt. The crux of the matter is
          that applications and legacy systems should be modernized so that they
          add value to your business instead of being a liability to it. With
          tightening budgets in the midst of a slowed economy, the pressure will
          be on for organizations to make the most use of their existing assets.
          Because of this, the digitalization wave is set to gain momentum in
          2021.
        </p>
      </div>
    </div>
  );
};

export default Digitalization;
