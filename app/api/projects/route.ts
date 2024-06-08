import getProjectsMeta from "@/lib/getProjects";

export async function GET() {
  const projectsMeta = await getProjectsMeta();

  return Response.json(projectsMeta);
}
