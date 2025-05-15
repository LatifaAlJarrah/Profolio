import { templates } from "@/app/components/data/templates";
import { auth } from "@/auth";
import { NextResponse } from "next/server";

// GET endpoint to retrieve templates
export async function GET() {
    return new Response(JSON.stringify(templates));
}

// POST endpoint to update templates (protected)
export async function POST(request) {
    // Check if user is authenticated
    const session = await auth();

    // If user is NOT authenticated, prevent template updates
    if (!session) {
        return NextResponse.json(
            { error: "Authentication required to update templates" },
            { status: 401 }
        );
    }

    // Process the template update (this would be your actual update logic)
    try {
        // Here you would process the request body and update the template
        const data = await request.json();

        // For now, just return a success message
        // In a real implementation, you would update the template data here
        return NextResponse.json(
            { message: "Template updated successfully", data },
            { status: 200 }
        );
    } catch (err) {
        console.error("Error updating template:", err);
        return NextResponse.json(
            { error: "Failed to update template" },
            { status: 500 }
        );
    }
}

// PUT endpoint to update templates (protected)
export async function PUT(request) {
    // Reuse the same protection logic as POST
    return POST(request);
}

// PATCH endpoint to update templates (protected)
export async function PATCH(request) {
    // Reuse the same protection logic as POST
    return POST(request);
}