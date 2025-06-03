"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import * as React from "react";
import { templates } from "@/app/components/data/templates";
import MainEditor from "@/app/components/controltemplate/MainEditor";
import {
  Roboto,
  Poppins,
  Montserrat,
  Palanquin_Dark,
  JetBrains_Mono,
} from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const palanquinDark = Palanquin_Dark({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const jetBrains_Mono = JetBrains_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

interface PublicTemplate {
  id: string;
  name: string;
  description?: string;
  templateType: string;
  templateData?: Record<string, unknown>; // Use a safer type than any for templateData
  thumbnail?: string;
  publishedAt: string;
  views: number;
  author: string;
  isPublic: boolean;
  publishUrl: string;
}

interface PublicTemplatePageProps {
  params: Promise<{
    publishUrl: string;
  }>;
}

const getFontClassName = (fontFamily?: string) => {
  switch (fontFamily) {
    case "Roboto":
      return roboto.className;
    case "Poppins":
      return poppins.className;
    case "Montserrat":
      return montserrat.className;
    case "Palanquin Dark":
      return palanquinDark.className;
    case "JetBrains Mono":
      return jetBrains_Mono.className;
    case "Arial":
    case "Times New Roman":
      return "";
    default:
      return roboto.className;
  }
};

async function fetchPublicTemplate(
  publishUrl: string
): Promise<PublicTemplate | null> {
  try {
    console.log("Fetching template with publishUrl:", publishUrl);

    const response = await fetch(
      `http://localhost:3001/api/templates/public/${publishUrl}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    console.log("Response status:", response.status);

    if (!response.ok) {
      if (response.status === 404) {
        console.log("Template not found (404)");
        return null;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Raw API response:", data);

    const template: PublicTemplate = {
      id: data.id,
      name: data.name,
      description: data.description,
      templateType: data.templateType,
      templateData: data.templateData,
      publishUrl: data.publishUrl,
      isPublic: data.isPublic,
      publishedAt: data.publishedAt || data.createdAt,
      views: data.views || 0,
      author: data.user?.name || data.author || "Unknown",
      thumbnail:
        data.templateData?.headerImage ||
        data.templateData?.backgroundImage ||
        null,
    };

    console.log("Processed template data:", template);
    return template;
  } catch (error) {
    console.error("Error fetching public template:", error);
    throw error;
  }
}

export default function PublicTemplatePage({
  params,
}: PublicTemplatePageProps) {
  const [template, setTemplate] = useState<PublicTemplate | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const { publishUrl } = React.use(params);

  useEffect(() => {
    const loadTemplate = async () => {
      try {
        console.log("Starting to load template...");
        setLoading(true);
        setError(null);

        if (!publishUrl) {
          console.error("No publishUrl provided");
          setError("Invalid template URL");
          return;
        }

        console.log("PublishUrl:", publishUrl);
        const templateData = await fetchPublicTemplate(publishUrl);

        if (!templateData) {
          console.log("No template data returned");
          setError("Template not found or no longer published");
          return;
        }

        console.log("Template loaded successfully:", templateData);
        setTemplate(templateData);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to load template";
        console.error("Error in loadTemplate:", err);
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    if (publishUrl) {
      loadTemplate();
    }
  }, [publishUrl]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading template...</p>
          <p className="text-xs text-gray-400 mt-2">PublishUrl: {publishUrl}</p>
        </div>
      </div>
    );
  }

  if (error || !template) {
    return (
      <div className="min-h-screen bg-gray-50 ">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-6xl mb-4">😞</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Template Not Found
          </h1>
          <p className="text-gray-600 mb-4">
            {error ||
              "This template may have been removed or is no longer published."}
          </p>
          <div className="bg-gray-100 p-3 rounded mb-4 text-xs text-left">
            <p>
              <strong>Debug Info:</strong>
            </p>
            <p>PublishUrl: {publishUrl}</p>
            <p>Error: {error}</p>
          </div>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  // جلب الـ Component بناءً على templateType
  const selectedTemplate = templates.find(
    (t) => t.name.toLowerCase() === template.templateType.toLowerCase()
  );

  if (!selectedTemplate) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-6xl mb-4">😞</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Template Type Not Supported
          </h1>
          <p className="text-gray-600 mb-4">
            The template type `{template.templateType}` is not supported.
          </p>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="mx-auto min-h-screen">
      <MainEditor>
        {selectedTemplate.Component ? (
          React.cloneElement(
            <selectedTemplate.Component
              {...template.templateData}
              fontFamilyClass={getFontClassName(
                template.templateData?.fontFamily as string | undefined
              )}
            />,
            {},
            null
          )
        ) : (
          <p className="text-center text-gray-600">
            Template component not found
          </p>
        )}
      </MainEditor>
    </main>
  );
}
