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
  headerTagline?: string;
  headerDescription?: string;
  headerImage?: string;
  titleTextColor?: string;
  subtitleTextColor?: string;
  descriptionTextColor?: string;
  aboutTitle?: string;
  aboutTagline?: string;
  aboutDescription?: string;
  visitText?: string;
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
  contactPhone2?: string;
  contactEmail?: string;
  contactLocation?: string;
  openTime?: string;
  contactEmailLabel?: string;
  contactSubjectLabel?: string;
  contactMessageLabel?: string;
  contactEmailPlaceholder?: string;
  contactSubjectPlaceholder?: string;
  contactMessagePlaceholder?: string;
  contactSubmitButtonText?: string;
  services?: Array<{
    title: string;
    description: string;
    icon: string;
    uploadedIcon?: string;
  }>;
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
  };
  chefSpecials?: Array<{
    name: string;
    description: string;
    price: string;
    image: string;
  }>;
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
  footerDescription?: string;
  footerName?: string;
  aboutDoctorName?: string;
  aboutExtraText?: string;
  ourAchievements?: Array<{
    icon?: string | undefined;
    value?: string | undefined;
    label?: string | undefined;
    uploadedIcon?: undefined;
    number?: number | undefined;
    text?: string | undefined;
  }>;
  projects?: {
    [key: string]: Array<{
      name: string;
      img: string;
      uploadedImg?: string;
    }>;
  };
  teamMembers?: Array<{
    name: string;
    role: string;
    img: string;
    uploadedImg?: string;
    instagramLink?: string;
    behanceLink?: string;
    githubLink?: string;
  }>;
  // حقول جديدة لتمبليت Programmer
  programmerHeaderGreeting?: string; // "Hello, I'm"
  programmerHeaderName?: string; // "Zayn Haddad"
  programmerHeaderRoles?: string[]; // ["Web Developer", "Mobile Developer", "UI/UX Designer"]
  programmerHeaderDescription?: string; // الوصف في HeroSection
  programmerHeaderButtonText?: string; // "Hire Me"
  programmerHeaderImage?: string; // الصورة في HeroSection
  programmerAchievements?: Array<{ num: number; text: string }>; // الإنجازات (Projects, Users, Awards, Years)
  programmerAboutTitle?: string; // "About Me"
  programmerAboutDescription?: string; // الوصف في AboutSection
  programmerAboutImage?: string; // الصورة في AboutSection
  programmerSkills?: string[]; // قائمة المهارات
  programmerEducation?: string[]; // قائمة التعليم
  programmerCertifications?: string[]; // قائمة الشهادات
  programmerProjectsTitle?: string; // "My Projects"
  programmerProjects?: Array<{
    title: string;
    description: string;
    image: string;
    tag: string[];
    gitUrl: string;
    previewUrl: string;
  }>; // قائمة المشاريع
  programmerContactTitle?: string; // "Let's Connect"
  programmerContactDescription?: string; // الوصف في EmailSection
  programmerGithubLink?: string; // رابط GitHub
  programmerLinkedinLink?: string; // رابط LinkedIn
  programmerContactEmailLabel?: string; // "Your email"
  programmerContactSubjectLabel?: string; // "Subject"
  programmerContactMessageLabel?: string; // "Message"
  programmerContactEmailPlaceholder?: string; // "jacob@google.com"
  programmerContactSubjectPlaceholder?: string; // "Just saying hi"
  programmerContactMessagePlaceholder?: string; // "Let's talk about..."
  programmerContactSubmitButtonText?: string; // "Send Message"
  programmerFooterText?: string; // "© 2025 . All Rights Reserved" 
}