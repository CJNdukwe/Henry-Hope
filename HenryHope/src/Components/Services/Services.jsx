import React from "react";
import "../Services/Style/Services.css";
import IndElect from "../Services/Images/industrial-electrical.jpg";
import IndGen from "../Services/Images/industrial-generator.jpg";
import Consult from "../Services/Images/consultants.jpg";
import SupInstall from "../Services/Images/supply_installation.png";
import EngDrawing from "../Services/Images/engineering_drawing.png";
import RuralUrban from "../Services/Images/rural_urban.jpeg";
import ElectMaintenance from "../Services/Images/electrical_maintenance.webp";

function Services() {
  return (
    <div>
      <div className="py-12 mx-16">
        <div className="flex flex-col items-center pb-8">
          <h3 className="font-primary font-bold text-3xl pb-4">Our Services</h3>
          <p className="font-secondary font-semibold text-base text-[#656565]">
            Browse through our range of services and let us know how we can come
            in:
          </p>
        </div>
        <div>
          <div className="service-tag flex justify-between items-center gap-4 pb-14">
            <div className="service-tag-item w-[50%]">
              <img src={IndElect} alt="services photo" className="rounded-xl" />
            </div>
            <div className="service-tag-item w-[50%]">
              <h5 className="font-primary font-bold text-lg pb-4">
                Industrial Installation Services and Maintenance
              </h5>
              <p className="font-secondary font-normal text-sm">
                {" "}
                When it comes to working in the industrial sectors, standards
                and mode of work becomes entirely different, efficiency and
                safety has to be at the maximum level and installations and
                operations have to be as perfect as it can be. Industries which
                carry out manufacturing process, bottling, oil and gas, etc.,
                all such industries require electrification to carry out their
                operations and most of these operations work with mechanical or
                electrical calibration; this means that if there were to be a
                glitch in the power supply, the time it takes the system running
                again will commensurately affect the rate of production. HHE has
                always been highly recommended among industries when it comes to
                perfect electrification while paying full attention to the
                details and complete needs of the client and adherence to the
                ethics governing engineering installations and international
                safety standards and regulations. Only such commitment and ever
                continuous perfection towards our rendered services can provide
                a long-term professional relationship with clients based on
                quality of electrical installations, services and maintenance.
                All staff of the organization are constantly trained in safety
                and are also kept updated on the rules and practices of
                achieving cutting edge results for customer satisfaction.
              </p>
            </div>
          </div>
          <hr className="break-line"/>
          <div className="service-tag flex justify-between items-center gap-4 pb-14">
            <div className="service-tag-item w-[50%]">
              <h5 className="font-primary font-bold text-lg pb-4">
                Industrial Plants and Generators
              </h5>
              <p className="font-secondary font-normal text-sm">
                {" "}
                When it comes to power generators and plants for industrial use,
                we have been trusted in the supply, installation and load
                balancing of such generators. SUPPLY: We at HHE do not supply
                plants or generators that have been previously used and
                refurbished after passing through series of users and has had
                months or years of its life span washed off by dust and
                unfavorable condition. To supply, we contact the manufacturers
                or their main distributors here in the country and get the item
                directly from them, why? We believe in offering our clients the
                best products directly from the manufacturers at affordable
                price.
                <br />
                INSTALLATION: Further from just supplying the plants and
                generators, we also do installation of the plants and
                generators; full wiring of the generator line to the power
                control systems.
              </p>
            </div>
            <div className="service-tag-item w-[50%]">
              <img src={IndGen} alt="services photo" className="rounded-xl" />
            </div>
          </div>
          <hr className="break-line"/>
          <div className="service-tag flex justify-between items-center gap-4 pb-14">
            <div className="service-tag-item w-[50%]">
              <img src={Consult} alt="services photo" className="rounded-xl" />
            </div>
            <div className="service-tag-item w-[50%]">
              <h5 className="font-primary font-bold text-lg pb-4">
                Engineering Consultant
              </h5>
              <p className="font-secondary font-normal text-sm">
                We at HENRY HOPE ENGINEERING NIGERIA LIMITED believe in quality,
                best engineering solutions in compliance with international best
                practices. We are readily available to visit sites nationwide in
                order to have a better understanding of the layout and proffer a
                better and environmentally friendly solution. We ensure we do
                not deviate from the customers&apos; needs and requests, but
                rather we offer them professionalism and cost-effective ideas.
                Most at times, we also take it upon ourselves to do deep
                research on the needs of our clients and also show them the best
                way to carry out a project, in case their ideas are not fully
                feasible, we always let them know the best and feasible way to
                carry out the project so as to ensure the safety of the client,
                the engineer/technician carrying out the project and the
                environment in general.
              </p>
            </div>
          </div>
          <hr className="break-line"/>
          <div className="service-tag flex justify-between items-center gap-4 pb-14">
            <div className="service-tag-item w-[50%]">
              <h5 className="font-primary font-bold text-lg pb-4">
                Supply and Installation of Electrical Materials
              </h5>
              <p className="font-secondary font-normal text-sm">
                We are known by many for our timely supply and delivery of
                materials and also timely completion of projects awarded to us,
                we work hard to beat the expected time, applying our vast
                knowledge and many years of experience in the field of
                engineering works irrespective of weather conditions. At the
                same time, we also give priority to the safety and well-being of
                the client and the staff, also by following all stipulated
                safety rules of our clients and the general environmental and
                safety laws and regulations. We carry out all our installations
                using the best materials, because we believe in quality over
                quantity and making sure that our clients get the maximum
                satisfaction from our service. The following are some
                installation services we offer: <br />• Industrial and Rural
                Electrical Installation Services and Maintenance (HT and LT) <br />•
                Industrial Plants and Generators (Supply and Installation) <br />•
                Industrial and Domestic HVAC (Heating Ventilation Air
                Conditioner) Systems. <br />• Installation of emergency shutdown
                systems <br />• Supply, installation and maintenance of control
                panels. <br />• Installation of street lighting, flood lighting, high
                bay lights, motion detectors
              </p>
            </div>
            <div className="service-tag-item w-[50%]">
              <img
                src={SupInstall}
                alt="services photo"
                className="rounded-xl"
              />
            </div>
          </div>
          <hr className="break-line"/>
          <div className="service-tag flex justify-between items-center gap-4 pb-14">
            <div className="service-tag-item w-[50%]">
              <img
                src={EngDrawing}
                alt="services photo"
                className="rounded-xl"
              />
            </div>
            <div className="service-tag-item w-[50%]">
              <h5 className="font-primary font-bold text-lg pb-4">
                Engineering Designs and Drawings
              </h5>
              <p className="font-secondary font-normal text-sm">
                When it comes to electrical drawings, we have our expertly
                trained personnel that are both skilled and experienced in the
                art of CAD work, making use of the most advanced platforms to
                draft the site plan of a project. When offered a project, we do
                not only do electrical installations, for every project we
                handle we provide the corresponding electrical drawing to show
                the layout of the entire plan with the passing and positions of
                all cables, fittings and electrical items installed, this helps
                the client and other engineers who will carry out maintenance
                works on the project in the future. And for clients who require
                an electrical layout of their already wired building, we are
                readily available to visit the site nationwide to get all
                necessary details required for the electrical drawing, we have
                our high-tech devices which enable us to trace the route of
                cables buried underground or in the walls up to 2m deep, to
                better locate the exact route of cables.
              </p>
            </div>
          </div>
          <hr className="break-line"/>
          <div className="service-tag flex justify-between items-center gap-4 pb-14">
            <div className="service-tag-item w-[50%]">
              <h5 className="font-primary font-bold text-lg pb-4">
                Rural and Urban Residential and Commercial Electrification
              </h5>
              <p className="font-secondary font-normal text-sm">
                When it comes to choosing the best equipment and materials to
                work with due to the different classifications of areas based on
                their level of civilization, we at HENRY HOPE ENGINEERING
                NIGERIA LIMITED have, from experience, had a firm grasp on the
                ways with which projects can be effectively carried out in both
                rural and urban areas. Here we offer a wider range of
                electrification starting from installation of transformers and
                electric poles down to individual homes, shops and offices,
                companies, industries of all sorts. Our company have been allied
                with the Power Holding Corporation of Nigeria, formerly known as
                the National Electrical Power Authority, for many years and we
                have been certified by all necessary bodies for the
                installations of transformers because of our professionalism,
                expertise and compliance to all safety and environmental laws
                and regulations. We carry out a general survey on the topography
                and landscape before evaluating the power demand of the area.
                Since the rural areas do not require excess power due to reduced
                number of high electrically powered systems, we provide them
                with a voltage that is stable and will not over shoot due to the
                low usage, but at the same time high enough to carry all
                appliance. The urban areas are no strangers to modern electrical
                appliances which require high power for their operation so these
                areas will require a different and new survey to plan the
                required electrification. Industries on the other hand, whether
                established in a rural or urban area require steady and full
                power supply which is why at Henry Hope Engineering, we have an
                entire department dedicated to electrification of industries,
                this is to ensure this department is not distracted, as we
                understand that this is a highly sensitive sector which requires
                no deviation from internationally accepted safety laws and
                operational standards.
              </p>
            </div>
            <div className="service-tag-item w-[50%]">
              <img
                src={RuralUrban}
                alt="services photo"
                className="rounded-xl"
              />
            </div>
          </div>
          <hr className="break-line"/>
          <div className="service-tag flex justify-between items-center gap-4 pb-14">
            <div className="service-tag-item w-[50%]">
              <img
                src={ElectMaintenance}
                alt="services photo"
                className="rounded-xl"
              />
            </div>
            <div className="service-tag-item w-[50%]">
              <h5 className="font-primary font-bold text-lg pb-4">
                Electrical Maintenance
              </h5>
              <p className="font-secondary font-normal text-sm">
                Routine maintenance of electrical equipment and machines are
                always a regular requirement, we believe in timely maintenance
                and record keeping of all our clients&apos; equipment and machines.
                This helps to ensure the equipment is always efficient and
                completes the expected life cycle. We at HENRY HOPE ENGINEERING
                NIGERIA LIMITED offer a 24hour stand by electro-mechanical
                maintenance policy with our clients and are very acute when it
                comes to maintenance as we pay most attention to details so as
                to ensure our clients&apos; equipment are as good as new, making use
                of new and standard materials to replace the obsolete and
                defective ones. When called to carry out maintenance for our
                clients, we make sure all systems are perfectly okay, and we
                also offer 3 months free call back policy, where, if there
                exists any form of malfunction, we will visit the site to
                rectify the issue for free. And for all new installations, we
                offer a 6 months free call back policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
