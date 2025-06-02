import Contact from "./Contact";
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
}