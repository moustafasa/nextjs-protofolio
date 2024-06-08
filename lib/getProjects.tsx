import { compileMDX } from "next-mdx-remote/rsc";

export default async function getProjectsMeta() {
  const res = await fetch(`https://api.github.com/users/moustafasa/repos`);
  if (!res.ok) return undefined;
  const myRepos: ProjectMeta[] = await res.json();

  return myRepos.map((repo) => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    img: `https://raw.githubusercontent.com/moustafasa/${repo.name}/master/testimg.jpeg`,
  }));
}
