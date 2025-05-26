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
}

interface UserTemplatesProps {
  fallbackProjects?: Array<{
    name: string;
    source: string;
    alt: string;
  }>;
}

async function getUserInfo() {
  try {
    const session = await getSession();

    if (!session) {
      return { user: null, token: null };
    }

    const token =
      (session as any).apiAccessToken ||
      (session as any).accessToken ||
      (session.user as any)?.accessToken;

    return {
      user: {
        id: session.user?.id,
        email: session.user?.email,
        name: session.user?.name,
        role: (session.user as any)?.role,
      },
      token: token,
      session: session,
    };
  } catch (error) {
    console.error("Error getting user info:", error);
    return { user: null, token: null };
  }
}

async function fetchUserTemplates(userId: string, token?: string) {
  try {
    console.log("جاري جلب التمبليتات للمستخدم:", userId);
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

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
      console.error("استجابة الـ API:", errorText);
      throw new Error(
        `HTTP error! status: ${response.status}, message: ${errorText}`
      );
    }

    const templates = await response.json();
    console.log("تم جلب التمبليتات بنجاح:", templates);

    return templates.map((template: any) => ({
      id: template.id,
      name: template.name,
      description: template.description || "",
      templateType: template.templateType || "GENERAL",
      thumbnail: template.media?.[0]?.url || "/assets/default-cover.png",
      createdAt: template.createdAt,
      updatedAt: template.updatedAt,
      templateData: template.templateData,
    }));
  } catch (error) {
    console.error("خطأ في استدعاء API:", error);
    throw error;
  }
}

export default function UserTemplates({
  fallbackProjects = [],
}: UserTemplatesProps) {
  const [templates, setTemplates] = useState<UserTemplate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUserTemplates = async () => {
      try {
        setLoading(true);
        setError(null);

        const { user, token } = await getUserInfo();
        console.log("معلومات المستخدم:", user, "التوكن:", token);

        if (!user?.id) {
          console.log("المستخدم غير مسجل دخول");
          setError("يجب تسجيل الدخول لعرض التمبليتات");
          setLoading(false);
          return;
        }

        const templatesData = await fetchUserTemplates(user.id, token);
        setTemplates(templatesData);
        console.log("تم تحديث التمبليتات:", templatesData);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "فشل في جلب التمبليتات";
        setError(errorMessage);
        console.error("خطأ في جلب التمبليتات:", errorMessage);
      } finally {
        setLoading(false);
      }
    };

    loadUserTemplates();
  }, []);

  if (loading) {
    return (
      <div className="mt-6">
        <h3 className="text-[32px] font-medium mb-4 font-roboto">مشاريعك</h3>
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
        <h3 className="text-[32px] font-medium mb-4 font-roboto">مشاريعك</h3>
        <div className="text-center py-12">
          <p className="text-red-500 text-lg mb-4">خطأ في تحميل التمبليتات</p>
          <p className="text-gray-400 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            إعادة المحاولة
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <h3 className="text-[32px] font-medium mb-4 font-roboto">مشاريعك</h3>
      {templates.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {templates.map((template) => (
            <div key={template.id} className="group">
              <Link
                href={`/controltemplate?template=${template.templateType.toLowerCase()}&id=${
                  template.id
                }`}
              >
                <div className="bg-white rounded-lg shadow-md relative w-[350px] h-[250px] hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200 group-hover:border-blue-300">
                  {template.thumbnail ? (
                    <Image
                      src={template.thumbnail}
                      alt={template.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg">
                      <span className="text-4xl font-bold text-gray-600">
                        {template.templateType.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <p className="text-lg font-semibold">عرض التمبليت</p>
                    </div>
                  </div>
                </div>
                <div className="mt-3 px-2">
                  <h4 className="text-lg font-semibold text-gray-800 truncate">
                    {template.name}
                  </h4>
                  <p className="text-sm text-blue-600 capitalize font-medium">
                    {template.templateType} Template
                  </p>
                  {template.description && (
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                      {template.description}
                    </p>
                  )}
                  <p className="text-xs text-gray-400 mt-2">
                    آخر تحديث:{" "}
                    {new Date(template.updatedAt).toLocaleDateString("ar-SA")}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">📄</div>
          <p className="text-gray-500 text-lg mb-4">لا توجد تمبليتات محفوظة</p>
          <p className="text-gray-400">
            قم بإنشاء أول تمبليت لك بالضغط على زر + أعلاه
          </p>
        </div>
      )}
      {fallbackProjects.length > 0 && (
        <>
          <h3 className="text-[24px] font-medium mb-4 font-roboto mt-8">
            مشاريع تجريبية
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
