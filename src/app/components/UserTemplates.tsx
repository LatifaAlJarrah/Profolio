"use client";

import { useState, useEffect } from "react";
import { getSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

interface UserTemplate {
  id: string;
  name: string;
  templateType: string;
  description?: string;
  thumbnail?: string;
  createdAt: string;
  updatedAt: string;
  templateData?: any;
  publishUrl?: string;
  isPublic: boolean;
}

interface UserTemplatesProps {
  fallbackProjects?: Array<{
    name: string;
    source: string;
    alt: string;
  }>;
}

interface UserInfo {
  user: {
    id?: string;
    email?: string | null;
    name?: string | null;
    role?: string;
  } | null;
  token: string | null | undefined;
}

interface Template {
  id: string;
  name: string;
  description: string;
  templateType: string;
  media?: { url: string }[];
  createdAt: string;
  updatedAt: string;
  templateData: template.templateData,
  publishUrl: string,
  isPublic: boolean
}

async function getUserInfo(): Promise<UserInfo> {
  try {
    const session = await getSession();
    if (!session) return { user: null, token: null };

    const token =
      (session as unknown as { apiAccessToken: string | undefined })
        .apiAccessToken ||
      (session as unknown as { accessToken: string | undefined }).accessToken ||
      (session.user as unknown as { accessToken: string | undefined })
        ?.accessToken;

    return {
      user: {
        id: session.user?.id,
        email: session.user?.email,
        name: session.user?.name,
      },
      token,
    };
  } catch (error) {
    console.error("Error getting user info:", error);
    return { user: null, token: null };
  }
}

async function fetchUserTemplates(userId: string, token?: string) {
  try {
    console.log("Fetching templates for user:", userId);
    const headers: HeadersInit = { "Content-Type": "application/json" };
    if (token) headers["Authorization"] = `Bearer ${token}`;

    const response = await fetch(
      `http://localhost:3001/api/templates/user/${userId}`,
      {
        method: "GET",
        headers,
        cache: "no-store",
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("API response:", errorText);
      throw new Error(
        `HTTP error! status: ${response.status}, message: ${errorText}`
      );
    }

    const templates = await response.json();
    console.log("Templates fetched successfully:", templates);

    const defaultImagesMap: { [key: string]: string } = {
      RESTAURANT: "/assets/default-resturant.jpg",
      DENTIST: "/assets/default-dentist.jpg",
      DEVELOPER: "/assets/default-developer.jpg",
      COMPANY: "/assets/default-company.jpg",
      PROGRAMMER: "/assets/default-programmer.jpg",
      GENERAL: "/assets/default-restaurant.jpg",
    };

    return templates.map((template: Template) => ({
      id: template.id,
      name: template.name,
      description: template.description || "",
      templateType: template.templateType || "GENERAL",
      thumbnail:
        template.media?.[0]?.url ||
        defaultImagesMap[template.templateType.toUpperCase()] ||
        defaultImagesMap["GENERAL"],
      createdAt: template.createdAt,
      updatedAt: template.updatedAt,
      templateData: template.templateData,
      publishUrl: template.publishUrl,
      isPublic: template.isPublic || false,
    }));
  } catch (error) {
    console.error("Error fetching API:", error);
    throw error;
  }
}

export default function UserTemplates({
  fallbackProjects = [],
}: UserTemplatesProps) {
  const [templates, setTemplates] = useState<UserTemplate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [, setUserInfo] = useState<UserInfo>({
    user: null,
    token: null,
  });

  // حالة للتحكم في عرض/إخفاء الروابط فقط (لا تؤثر على قاعدة البيانات)
  const [visibleLinks, setVisibleLinks] = useState<Set<string>>(new Set());

  useEffect(() => {
    const loadUserTemplates = async () => {
      try {
        setLoading(true);
        setError(null);

        const info = await getUserInfo();
        setUserInfo(info);
        console.log("User info:", info.user, "Token:", info.token);

        if (!info.user?.id) {
          console.log("User not logged in");
          setError("You must be logged in to view templates");
          setLoading(false);
          return;
        }

        const templatesData = await fetchUserTemplates(
          info.user.id,
          info.token || undefined
        );
        setTemplates(templatesData);

        // Show links to templates that have publishUrl by default
        const templatesWithUrls = templatesData
          .filter((t: UserTemplate) => t.publishUrl)
          .map((t: UserTemplate) => t.id);
        setVisibleLinks(new Set(templatesWithUrls));

        console.log("Templates updated:", templatesData);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to fetch templates";
        setError(errorMessage);
        console.error("Error fetching templates:", errorMessage);
      } finally {
        setLoading(false);
      }
    };

    loadUserTemplates();
  }, []);

  // function to toggle display/hide link only (does not affect database)
  const handleLinkVisibilityToggle = (templateId: string) => {
    setVisibleLinks((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(templateId)) {
        newSet.delete(templateId);
      } else {
        newSet.add(templateId);
      }
      return newSet;
    });
  };

  const copyPublishUrl = (publishUrl: string) => {
    const fullUrl = `http://localhost:3000/public/${publishUrl}`;
    navigator.clipboard
      .writeText(fullUrl)
      .then(() => {
        alert("Publish URL copied to clipboard!");
      })
      .catch((err) => {
        console.error("Error copying URL:", err);
        alert("Failed to copy URL.");
      });
  };

  if (loading) {
    return (
      <div className="mt-6">
        <h3 className="text-[32px] font-medium mb-4 font-roboto">
          Your Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-200 rounded-lg w-[350px] h-[250px]"></div>
              <div className="mt-2 h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="mt-1 h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-6">
        <h3 className="text-[32px] font-medium mb-4 font-roboto">
          Your Projects
        </h3>
        <div className="text-center py-12">
          <p className="text-red-500 text-lg mb-4">Error loading templates</p>
          <p className="text-gray-400 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <h3 className="text-[32px] font-medium mb-4 font-roboto">
        Your Projects
      </h3>
      {templates.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {templates.map((template) => (
            <div key={template.id} className="group">
              <Link
                href={`/controltemplate?template=${template.name}&templateId=${template.id}`}
              >
                <div className="bg-white rounded-lg shadow-md relative w-[350px] h-[250px] mx-auto hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200 group-hover:border-blue-300">
                  <Image
                    src={template.thumbnail || "/assets/default-restaurant.jpg"}
                    alt={template.name}
                    fill
                    className="object-cover rounded-lg"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <p className="text-lg font-semibold">View Template</p>
                    </div>
                  </div>
                  {template.isPublic && (
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Public
                    </div>
                  )}
                </div>
              </Link>
              <div className="mt-3 px-2">
                <h4 className="text-lg font-semibold text-gray-800 truncate">
                  {template.name}
                </h4>
                <p className="text-sm text-blue-600 capitalize font-medium">
                  {template.templateType.toLowerCase()} Template
                </p>
                {template.description && (
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    {template.description}
                  </p>
                )}
                <p className="text-xs text-gray-400 mt-2">
                  Last Updated:{" "}
                  {new Date(template.updatedAt).toLocaleDateString("en-US")}
                </p>
                <div className="mt-3 flex flex-col gap-2">
                  {/* A button to control whether the link is shown/hide only if publishUrl exists */}
                  {template.publishUrl && (
                    <button
                      onClick={() => handleLinkVisibilityToggle(template.id)}
                      className={`px-3 py-1 text-xs rounded-full font-medium transition-colors ${
                        visibleLinks.has(template.id)
                          ? "bg-red-100 text-red-700 hover:bg-red-200"
                          : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                      }`}
                    >
                      {visibleLinks.has(template.id)
                        ? "Hide Link"
                        : "Show Link"}
                    </button>
                  )}

                  {/* Show the link if it is visible */}
                  {template.publishUrl && visibleLinks.has(template.id) && (
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={`http://localhost:3000/public/${template.publishUrl}`}
                        readOnly
                        className={`text-xs border p-1 rounded w-full truncate ${
                          template.isPublic
                            ? "border-green-300 bg-green-50"
                            : "border-orange-300 bg-orange-50"
                        }`}
                      />
                      <button
                        onClick={() => copyPublishUrl(template.publishUrl!)}
                        className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
                      >
                        Copy
                      </button>
                    </div>
                  )}

                  {/* A message explaining the situation */}
                  {template.publishUrl && visibleLinks.has(template.id) && (
                    <p
                      className={`text-xs italic ${
                        template.isPublic ? "text-green-600" : "text-orange-600"
                      }`}
                    >
                      {template.isPublic
                        ? "✓ Public: Template is live and accessible"
                        : "⚠ Draft: Template exists but not published"}
                    </p>
                  )}

                  {/* Message if there is no PublishUrl */}
                  {!template.publishUrl && (
                    <p className="text-xs text-gray-500 italic">
                      No publish URL available
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">📄</div>
          <p className="text-gray-500 text-lg mb-4">No templates saved</p>
          <p className="text-gray-400">
            Create your first template by clicking the + button above
          </p>
        </div>
      )}
      {fallbackProjects.length > 0 && (
        <>
          <h3 className="text-[24px] font-medium mb-4 font-roboto mt-8">
            Sample Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {fallbackProjects.map((project, index) => (
              <div key={index} className="">
                <div className="bg-gray-100 rounded-lg shadow-md relative w-[350px] h-[250px]">
                  <Image
                    src={project.source}
                    alt={project.alt}
                    fill
                    className="object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
                <h4 className="mt-2 text-lg font-roboto">{project.name}</h4>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
