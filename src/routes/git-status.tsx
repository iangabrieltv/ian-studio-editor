import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, CheckCircle2, GitBranch, GitCommit, RefreshCw, XCircle } from "lucide-react";
import { getGithubSyncStatus } from "@/lib/github-sync.functions";

export const Route = createFileRoute("/git-status")({
  head: () => ({
    meta: [
      { title: "Status do Repositório — Ian Gabriel" },
      { name: "description", content: "Status de sincronização do repositório GitHub do portfólio de Ian Gabriel." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: GitStatusPage,
});

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(new Date(iso));
}

function GitStatusPage() {
  const { data, isLoading, isFetching, refetch, dataUpdatedAt } = useQuery({
    queryKey: ["github-sync-status"],
    queryFn: () => getGithubSyncStatus(),
    refetchInterval: 60_000,
  });

  return (
    <main className="min-h-screen bg-[#0b0b10] text-white px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
        >
          <ArrowLeft size={16} /> Voltar ao portfólio
        </Link>

        <h1 className="mt-6 text-3xl font-bold tracking-tight">Status do repositório</h1>
        <p className="mt-2 text-sm text-white/50">
          Sincronização com o GitHub — atualizado automaticamente a cada minuto.
        </p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          {isLoading ? (
            <p className="text-white/60">Verificando conexão…</p>
          ) : !data?.connected ? (
            <div className="flex items-start gap-3">
              <XCircle className="mt-0.5 shrink-0 text-red-400" size={22} />
              <div>
                <p className="font-semibold text-red-300">Repositório não acessível</p>
                <p className="mt-1 text-sm text-white/60">
                  {data?.error ?? "Não foi possível conectar ao GitHub."}
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-400" size={22} />
                <div>
                  <p className="font-semibold text-emerald-300">Conectado e atualizado</p>
                  <a
                    href={data.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block text-sm text-white/60 underline decoration-white/20 hover:text-white"
                  >
                    {data.repoFullName}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <GitBranch className="mt-0.5 shrink-0 text-white/50" size={20} />
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40">Branch principal</p>
                  <p className="mt-0.5 font-mono text-sm">{data.defaultBranch}</p>
                </div>
              </div>

              {data.lastCommit && (
                <div className="flex items-start gap-3">
                  <GitCommit className="mt-0.5 shrink-0 text-white/50" size={20} />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/40">
                      Último commit sincronizado
                    </p>
                    <a
                      href={data.lastCommit.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-0.5 block font-medium hover:underline"
                    >
                      {data.lastCommit.message}
                    </a>
                    <p className="mt-1 text-sm text-white/60">
                      <span className="font-mono text-white/80">{data.lastCommit.sha}</span>
                      {" · "}
                      {data.lastCommit.author}
                      {" · "}
                      {formatDate(data.lastCommit.date)}
                    </p>
                  </div>
                </div>
              )}

              <div className="rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-white/60">
                <p>
                  <span className="font-medium text-white/80">Alterações pendentes: </span>
                  nenhuma detectável aqui — enquanto a sincronização Lovable ↔ GitHub estiver
                  ativa, cada alteração feita no editor vira um commit automaticamente. Se a data
                  do último commit estiver antiga, a sincronização ainda não foi conectada.
                </p>
              </div>
            </div>
          )}

          <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
            <p className="text-xs text-white/40">
              Verificado pela última vez: {formatDate(new Date(dataUpdatedAt).toISOString())}
            </p>
            <button
              type="button"
              onClick={() => refetch()}
              disabled={isFetching}
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-1.5 text-xs font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-50"
            >
              <RefreshCw size={13} className={isFetching ? "animate-spin" : ""} />
              Atualizar agora
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
