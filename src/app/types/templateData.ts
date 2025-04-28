export interface TemplateData {
  navbarColor?: string;
  logoName?: string;
  logoColor?: string;
  logoIcon?: string;
  buttonColor?: string;
  fontFamily?: string;
  fontFamilyClass?: string;
  headerTitle?: string;
  headerSubtitle?: string;
  headerTagline?: string; // جديد لـ ResturantHeader
  headerDescription?: string;
  headerImage?: string;
  titleTextColor?: string;
  subtitleTextColor?: string;
  descriptionTextColor?: string;
  aboutTitle?: string;
  aboutTagline?: string; // جديد لـ AboutResturant
  aboutDescription?: string;
  visitText?: string; // جديد لـ AboutResturant
  aboutImage?: string;
  aboutButtonColor?: string;
  blogTitle?: string;
  blogContent?: string;
  blogImages?: string[];
  blogButtonColor?: string;
  contactBookingText?: string;
  contactInstagramName?: string;
  contactInstagramLink?: string;
  contactFacebookName?: string;
  contactFacebookLink?: string;
  contactPhone?: string;
  contactPhone2?: string; // لدعم رقم هاتف ثانٍ في ContactUs
  contactEmail?: string;
  contactLocation?: string;
  services?: Array<{ title: string; description: string; icon: string }>;
  menuItems?: {
    appetizers: Array<{
      name: string;
      description: string;
      price: string;
      img: string;
    }>;
    soupsSalads: Array<{
      name: string;
      description: string;
      price: string;
      img: string;
    }>;
    mainCourses: Array<{
      name: string;
      description: string;
      price: string;
      img: string;
    }>;
    desserts: Array<{
      name: string;
      description: string;
      price: string;
      img: string;
    }>;
  }; // جديد لـ OurMenu
  chefSpecials?: Array<{
    name: string;
    description: string;
    price: string;
    image: string;
  }>; // جديد لـ RandomlyChef
  portfolioSlides?: Array<{
    title: string;
    description: string;
    image: string;
  }>;
  portfolioTestimonials?: Array<{ name: string; quote: string; image: string }>;
  portfolioButtonColor?: string;
  navigationLinks?: Array<{ name: string; link: string }>;
  navigationLinksColor?: string;
  backgroundOverlayColor?: string;
  backgroundImage?: string;
  footerDescription?: string; // جديد لـ Footer
  footerName?: string; // جديد لـ Footer
}