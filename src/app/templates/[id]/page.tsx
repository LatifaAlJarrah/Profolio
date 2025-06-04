import Image from "next/image";
import { auth } from "@/auth";

// Define proper session type
interface ExtendedSession {
  user: {
    id?: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
  accessToken?: string;
  apiAccessToken?: string;
  expires: string;
}

interface Template {
  id: string;
  name: string;
  templateType: string;
  description?: string;
  media?: Array<{ 
    url: string; 
    fileName: string; 
    fileType: string; 
    fileSize: number 
  }>;
  createdAt: string;
  updatedAt: string;
  templateData?: {
    title?: string;
    subtitle?: string;
    content?: string;
    image?: string;
    sections?: Array<{ 
      type: string; 
      text?: string; 
      image?: string; 
      items?: string[] 
    }>;
  };
}

interface TemplateRendererProps {
  templateData: Template["templateData"];
}

interface TemplateSection {
  type: string;
  text?: string;
  image?: string;
  items?: string[];
}

function TemplateRenderer({ templateData }: TemplateRendererProps) {
  if (!templateData) {
    return <p className="text-gray-500">No template content available.</p>;
  }

  const renderSection = (section: TemplateSection, index: number) => {
    switch (section.type) {
      case "hero":
        return (
          <div key={index} className="text-center mb-8">
            {section.image && (
              <Image
                src={section.image}
                alt={section.text || "Section Image"}
                width={600}
                height={300}
                className="mx-auto rounded-lg mb-4 object-cover"
                loading="lazy"
              />
            )}
            {section.text && (
              <h3 className="text-2xl font-semibold text-gray-800">{section.text}</h3>
            )}
          </div>
        );
      case "menu":
        return (
          <div key={index} className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Menu</h3>
            {section.items && (
              <ul className="list-disc list-inside">
                {section.items.map((item: string, i: number) => (
                  <li key={i} className="text-gray-700">{item}</li>
                ))}
              </ul>
            )}
          </div>
        );
      default:
        return (
          <div key={index} className="mb-8">
            {section.text && (
              <p className="text-gray-700">{section.text}</p>
            )}
          </div>
        );
    }
  };

  return (
    <div className="w-full bg-gray-50">
      {/* Header Section */}
      {(templateData.title || templateData.subtitle || templateData.image) && (
        <section className="bg-gradient-to-r from-blue-100 to-purple-100 py-16 text-center">
          {templateData.image && (
            <Image
              src={templateData.image}
              alt={templateData.title || "Template Image"}
              width={800}
              height={400}
              className="mx-auto rounded-lg mb-6 object-cover"
              loading="lazy"
            />
          )}
          {templateData.title && (
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{templateData.title}</h2>
          )}
          {templateData.subtitle && (
            <p className="text-xl text-gray-600">{templateData.subtitle}</p>
          )}
        </section>
      )}

      {/* Content Section */}
      {templateData.content && (
        <section className="container mx-auto py-8 px-4">
          <p className="text-lg text-gray-700">{templateData.content}</p>
        </section>
      )}

      {/* Dynamic Sections */}
      {templateData.sections && templateData.sections.length > 0 && (
        <section className="container mx-auto py-8 px-4">
          {templateData.sections.map((section, index) => renderSection(section, index))}
        </section>
      )}
    </div>
  );
}

async function fetchTemplate(id: string, token?: string): Promise<Template> {
  try {
    const headers: HeadersInit = { "Content-Type": "application/json" };
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    
    console.log("Fetching template with ID:", id, "Token:", token || "No token provided");
    
    const response = await fetch(`http://localhost:3001/api/templates/${id}`, {
      method: "GET",
      headers,
      cache: "no-store",
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error("API response error:", errorText, "Status:", response.status);
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }
    
    const data: Template = await response.json();
    console.log("Template fetched successfully:", data);
    return data;
  } catch (error) {
    console.error("Error fetching template:", error);
    throw error;
  }
}

interface TemplatePageProps {
  params: { 
    id: string 
  };
}

export default async function TemplatePage({ params }: TemplatePageProps) {
  const session = await auth() as ExtendedSession | null;
  console.log("Session data:", session);

  if (!session || !session.user) {
    return (
      <div className="container mx-auto p-6 text-center">
        <p className="text-lg text-red-500">Please log in to view this template.</p>
        <a href="/login" className="text-blue-500 underline">Go to Login</a>
      </div>
    );
  }

  let template: Template;
  try {
    // Extract token with proper typing
    const token = session.accessToken || session.apiAccessToken;
    if (!token) {
      console.warn("No token found in session");
    }
    template = await fetchTemplate(params.id, token);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred.";
    
    return (
      <div className="container mx-auto p-6 text-center">
        <p className="text-lg text-red-500">Error loading template.</p>
        <p className="text-gray-400 mt-2">{errorMessage}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );
  }

  const defaultImage = template.media?.[0]?.url;
  const templateTypeInitial = template.templateType.charAt(0).toUpperCase();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{template.name}</h1>
      {template.description && (
        <p className="text-gray-600 mb-4">{template.description}</p>
      )}
      
      {defaultImage ? (
        <Image
          src={defaultImage}
          alt={template.name}
          width={800}
          height={600}
          className="rounded-lg mb-4 object-cover"
          loading="lazy"
        />
      ) : (
        <div className="w-[800px] h-[600px] flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-4">
          <span className="text-6xl font-bold text-gray-600">
            {templateTypeInitial}
          </span>
        </div>
      )}
      
      <div className="space-y-2 mb-6">
        <p className="text-sm text-gray-500">
          Type: <span className="capitalize">{template.templateType}</span> Template
        </p>
        <p className="text-sm text-gray-500">
          Created: {new Date(template.createdAt).toLocaleDateString("en-US")}
        </p>
        <p className="text-sm text-gray-500">
          Last Updated: {new Date(template.updatedAt).toLocaleDateString("en-US")}
        </p>
      </div>
      
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Template Preview</h2>
        <TemplateRenderer templateData={template.templateData} />
      </div>
    </div>
  );
}