import { TemplateData } from "@/app/types/templateData";

export const defaultTemplateData: TemplateData = {
  navbarColor: "#FFFFFF",
  buttonColor: "#58ADEB",
  fontFamily: "Roboto",
  logoName: "Dentelle",
  logoColor: "#000000",
  navigationLinks: [
    { name: "Home", link: "#home" },
    { name: "About Me", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Blog", link: "#blog" },
  ],
  navigationLinksColor: "#000000",
  headerTitle: "Dental Care !",
  headerSubtitle:
    "Because Every Smile Tells A Story, We're Here To Help Yours Shine Brighter Than Ever With Expert Personalized",
  headerDescription:
    "Contact us now to book your appointment and experience our premium service.",
  headerImage: "/assets/images/dentist/backgroundDent.png",
  titleTextColor: "#58ADEB",
  subtitleTextColor: "#FFFFFF",
  descriptionTextColor: "#828282",
  aboutTitle: "ABOUT ME",
  aboutDoctorName: "Dr. Sarah Williams",
  aboutDescription:
    "Dr. Sarah Williams is a specialist in cosmetic dentistry with over 10 years of experience. She is passionate about creating beautiful, natural smiles through teeth whitening, veneers, and smile makeovers. With a patient-centered approach and the latest technology, Dr. Williams ensures comfortable treatments and long-lasting results. She believes that a confident smile can transform lives and is dedicated to helping her patients achieve their dream smiles.",
  aboutExtraText: "Beautiful smile is not just about appearance",
  aboutImage: "/assets/images/dentist/drSarah.png",
  aboutButtonColor: "#58ADEB",
  blogTitle: "How to Achieve a Hollywood Smile with Cosmetic Dentistry",
  blogContent:
    "outlines how to attain a Hollywood smile using various cosmetic techniques. These techniques include veneers, which are thin shells that improve the shape and color of the teeth; teeth whitening, a process that brightens the teeth and removes stains; crowns, which cover damaged teeth; clear braces that discreetly align the teeth without altering their appearance; and dental implants that replace missing teeth for a natural look. When combined, these procedures not only enhance the aesthetics of the smile but also boost self-confidence.",
  blogImages: [
    "/assets/icons/dentist/dentalPractice.jpeg",
    "/assets/icons/dentist/perfectSmile.jpeg",
    "/assets/icons/dentist/veneersShow.jpeg",
    "/assets/icons/dentist/dentalVeneers.jpeg",
  ],
  blogButtonColor: "#58ADEB",
  contactBookingText: "To book an appointment",
  contactInstagramName: "Instagram Name",
  contactInstagramLink: "https://instagram.com",
  contactFacebookName: "Facebook Name",
  contactFacebookLink: "https://facebook.com",
  contactPhone: "(123) 456-7890",
  contactEmail: "dr.williams@brightsmiledental.com",
  contactLocation: "BrightSmile Dental Clinic",
  services: [
    {
      title: "Teeth Whitening",
      description: "Removes stains and brightens teeth for a radiant smile.",
      icon: "/assets/icons/dentist/teeth.png",
    },
    {
      title: "Veneers & Lumineers",
      description: "Thin shells placed on teeth to improve color and shape.",
      icon: "/assets/icons/dentist/veneers.png",
    },
    {
      title: "Tooth-Colored Fillings",
      description: "Restores damaged teeth with natural-looking fillings.",
      icon: "/assets/icons/dentist/equipment.png",
    },
    {
      title: "Cosmetic Crowns & Bridges",
      description:
        "Covers damaged or treated teeth for protection and aesthetics.",
      icon: "/assets/icons/dentist/crown.png",
    },
    {
      title: "Tooth Reshaping",
      description: "Adjusts tooth size or shape for a more balanced look.",
      icon: "/assets/icons/dentist/mouth.png",
    },
    {
      title: "Dental Implants",
      description: "Replaces missing teeth with natural-looking implants.",
      icon: "/assets/icons/dentist/implant.png",
    },
    {
      title: "Clear Aligners (Invisalign)",
      description: "Straightens teeth discreetly without metal braces.",
      icon: "/assets/icons/dentist/trainer.png",
    },
    {
      title: "Hollywood Smile",
      description:
        "A complete smile makeover using a combination of cosmetic treatments.",
      icon: "/assets/icons/dentist/orthodontic.png",
    },
  ],
  portfolioSlides: [
    {
      title: "Hollywood Smile",
      description:
        "The patient had discoloration and misalignment of the teeth, They were treated with a Hollywood Smile using cosmetic veneers (either veneers or lumineers) to achieve a bright and harmonious smile.",
      image: "/assets/images/dentist/HollywoodSmile.jpeg",
    },
    {
      title: "Teeth Whitening",
      description:
        "The patient had tooth discoloration and yellowing, which was treated with a professional whitening session to restore their bright smile.",
      image: "/assets/images/dentist/teethWhitening.jpeg",
    },
    {
      title: "Dental Restoration",
      description:
        "The Patient Had Severe Decay And Needed Full Restoration...",
      image: "/assets/images/dentist/fillings.jpeg",
    },
  ],
  portfolioTestimonials: [
    {
      name: "Ahmed Ali",
      image: "/assets/images/dentist/ahmad.jpeg",
      quote:
        "I Used To Suffer From Uneven Tooth Color And Misalignment, But After Getting A Hollywood Smile, My Smile Became Brighter And More Beautiful. The Results Look Very Natural, And I Am Completely Satisfied With The Experience.",
    },
    {
      name: "Emily",
      image: "/assets/images/dentist/emilly.jpeg",
      quote:
        "I Had Decay In One Of My Front Teeth, Which Made Me Feel Self-Conscious. After Getting Tooth-Colored Fillings, My Tooth Looks Completely Natural And Blends Perfectly With The Rest Of My Teeth. The Result Is Amazing, And I'm Very Happy With It!",
    },
  ],
  portfolioButtonColor: "#58ADEB",
};
