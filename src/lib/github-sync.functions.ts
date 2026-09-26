import { createServerFn } from "@tanstack/react-start";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/github";
const OWNER = "iangabrieltv";
const REPO = "ian-studio-editor";

export interface GithubSyncStatus {
  connected: boolean;
  repoFullName?: string;
  repoUrl?: string;
  defaultBranch?: string;
  lastCommit?: {
    sha: string;
    message: string;
    author: string;
    date: string;
    url: string;
  } | undefined;
  pushedAt?: string;
  error?: string;
}

export const getGithubSyncStatus = createServerFn({ method: "GET" }).handler(
  async (): Promise<GithubSyncStatus> => {
    const LOVABLE_API_KEY = process.env["LOVABLE_API_KEY"];
    const GITHUB_API_KEY = process.env["GITHUB_API_KEY"];
    if (!LOVABLE_API_KEY || !GITHUB_API_KEY) {
      return { connected: false, error: "Conexão com o GitHub não configurada." };
    }

    const headers = {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "X-Connection-Api-Key": GITHUB_API_KEY,
    };

    const repoRes = await fetch(`${GATEWAY_URL}/repos/${OWNER}/${REPO}`, { headers });
    if (!repoRes.ok) {
      const body = await repoRes.text();
      console.error(`GitHub repo fetch failed [${repoRes.status}]: ${body}`);
      return {
        connected: false,
        error: `Não foi possível acessar o repositório (erro ${repoRes.status}).`,
      };
    }
    const repo = (await repoRes.json()) as {
      full_name: string;
      html_url: string;
      default_branch: string;
      pushed_at: string;
    };

    const commitsRes = await fetch(
      `${GATEWAY_URL}/repos/${OWNER}/${REPO}/commits?sha=${encodeURIComponent(repo.default_branch)}&per_page=1`,
      { headers },
    );
    if (!commitsRes.ok) {
      const body = await commitsRes.text();
      console.error(`GitHub commits fetch failed [${commitsRes.status}]: ${body}`);
      return {
        connected: true,
        repoFullName: repo.full_name,
        repoUrl: repo.html_url,
        defaultBranch: repo.default_branch,
        pushedAt: repo.pushed_at,
        error: `Não foi possível ler os commits (erro ${commitsRes.status}).`,
      };
    }
    const commits = (await commitsRes.json()) as Array<{
      sha: string;
      html_url: string;
      commit: { message: string; author: { name: string; date: string } };
    }>;

    const last = commits[0];
    return {
      connected: true,
      repoFullName: repo.full_name,
      repoUrl: repo.html_url,
      defaultBranch: repo.default_branch,
      pushedAt: repo.pushed_at,
      lastCommit: last
        ? {
            sha: last.sha.slice(0, 7),
            message: last.commit.message.split("\n")[0] ?? "",
            author: last.commit.author.name,
            date: last.commit.author.date,
            url: last.html_url,
          }
        : undefined,
    };
  },
);
