"use client"
import HeaderBar from "./components/headerBar/HeaderBar";
import EnhancedProductHub from "./components/productHub/EnhancedProductHub";
import EnterpriseFooter from "./components/footerGeneral/FooterGeneral";
import CompanyLanding from "./components/landingForm/LandingForm";
import ServiceShowcase from "./components/availableServices/AvailableServices";
import ContactForm from "./components/contactForm/ContactForm";
import WarehouseProductDisplay from "./components/productGallery/WarehouseProductDisplay";

export default function index() {
  return (
     <>
        <HeaderBar>

        </HeaderBar>
        <section id="index">
          <CompanyLanding></CompanyLanding>
        </section>

        <section id="services">
            <ServiceShowcase></ServiceShowcase>
         </section>
    
        <section id="products">
          <EnhancedProductHub/>
        </section>

        <section id="slideshow">  
          <WarehouseProductDisplay></WarehouseProductDisplay>
        </section>

        <section id="contact">
          <ContactForm></ContactForm>
        </section>

        <EnterpriseFooter></EnterpriseFooter>
     </>
  )
}

