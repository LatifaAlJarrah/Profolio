import { templates } from "@/app/components/data/templates";
export async function GET(){
    return new Response(JSON.stringify(templates));
}