// صفحة عرض التمبليت المنشور
// pages/public/[publishUrl].tsx أو app/public/[publishUrl]/page.tsx

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface PublicTemplate {
  id: string;
  name: string;
  description?: string;
  templateType: string;
  templateData?: any;
  thumbnail?: string;
  publishedAt: string;
  views: number;
  author: string;
}

interface PublicTemplatePageProps {
  params: {
    publishUrl: string;
  };
}

async function fetchPublicTemplate(
  publishUrl: string
): Promise<PublicTemplate | null> {
  try {
    const response = await fetch(
      `http://localhost:3001/api/templates/public/${publishUrl}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.template;
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

  useEffect(() => {
    const loadTemplate = async () => {
      try {
        setLoading(true);
        setError(null);

        const templateData = await fetchPublicTemplate(params.publishUrl);

        if (!templateData) {
          setError("Template not found or no longer published");
          return;
        }

        setTemplate(templateData);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to load template";
        setError(errorMessage);
        console.error("Error loading template:", errorMessage);
      } finally {
        setLoading(false);
      }
    };

    if (params.publishUrl) {
      loadTemplate();
    }
  }, [params.publishUrl]);

  //   const handleUseTemplate = () => {
  //     // توجيه المستخدم لصفحة التسجيل أو استخدام التمبليت
  //     router.push(`/signup?template=${params.publishUrl}`);
  //   };

  const handleCloneTemplate = async () => {
    // إذا كان المستخدم مسجل دخول، يمكن نسخ التمبليت
    try {
      const response = await fetch(
        `http://localhost:3000/api/templates/${template?.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        alert("Template cloned successfully!");
        router.push("/dashboard");
      } else {
        alert("Please sign in to clone this template");
        router.push("/signin");
      }
    } catch (error) {
      console.error("Error cloning template:", error);
      alert("Error occurred while cloning template");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading template...</p>
        </div>
      </div>
    );
  }

  if (error || !template) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-6xl mb-4">😞</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Template Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            {error ||
              "This template may have been removed or is no longer published."}
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={() => router.push("/")}
                className="text-xl font-bold text-blue-600 hover:text-blue-700"
              >
                YourApp
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={handleUseTemplate}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Use This Template
              </button>
              <button
                onClick={handleCloneTemplate}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Clone Template
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Template Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Template Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {template.name}
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  {template.description || "No description provided"}
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {template.views} views
                  </span>
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    By {template.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Published{" "}
                    {new Date(template.publishedAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <div className="ml-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {template.templateType} Template
                </span>
              </div>
            </div>
          </div>

          {/* Template Preview */}
          <div className="p-6">
            {template.thumbnail && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Preview
                </h3>
                <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={template.thumbnail}
                    alt={template.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            {/* Template Data Preview */}
            {template.templateData && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Template Details
                </h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <pre className="text-sm text-gray-700 overflow-x-auto">
                    {JSON.stringify(template.templateData, null, 2)}
                  </pre>
                </div>
              </div>
            )}

            {/* Call to Action */}
            <div className="text-center py-8 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Ready to use this template?
              </h3>
              <p className="text-gray-600 mb-6">
                Sign up now and start customizing this template for your needs
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={handleUseTemplate}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Get Started Now
                </button>
                <button
                  onClick={handleCloneTemplate}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Clone to My Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
