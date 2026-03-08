import ContactHero from "../section/Contact/ContactHero";
import ContactForm from "../section/Contact/ContactForm";
import LocationSection from "../section/Contact/LocationSection";
import ContactSocials from "../section/Contact/ContactSocials";
export default function ContactMe() {
  return (
    <div className="w-full flex flex-col">
      <ContactHero />
      <LocationSection />
      <ContactForm />
      <ContactSocials />
      <style jsx global>{`
        .stroke-white { -webkit-text-stroke: 1.5px white; }
      `}</style>
    </div>
  );
}