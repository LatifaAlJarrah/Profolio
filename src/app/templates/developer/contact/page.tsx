import Contact from "./Contact";
<<<<<<< HEAD
import { IconType } from "react-icons/lib";

interface ContactPageProps {
  developerInfo?: Array<{
    icon: IconType;
    title?: string;
    description?: string;
  }>;
  
  developerContact?: {
    title?: string;
    description?: string;
  };
}

export default function Page({ developerInfo, developerContact }: ContactPageProps) {
  return (
    <Contact
      developerInfo={developerInfo}
      developerContact={developerContact}
    />
  );
=======

export default function Page() {
  return <Contact />;
>>>>>>> 458d433c80df4797d81f2ca8607e794ff77ae393
}