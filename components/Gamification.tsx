"use client";

import { Trophy, Star, Target, Award, Flame, Medal } from 'lucide-react';

const gamificationFeatures = [
  {
    icon: Trophy,
    title: "Sistema de Conquistas",
    description: "Desbloqueie conquistas ao atingir metas financeiras e desenvolver hábitos saudáveis.",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    icon: Star,
    title: "Pontos de Experiência",
    description: "Ganhe XP ao registrar transações, atingir objetivos e completar desafios.",
    gradient: "from-purple-400 to-pink-500"
  },
  {
    icon: Target,
    title: "Metas Personalizadas",
    description: "Defina objetivos financeiros e acompanhe seu progresso de forma visual e motivadora.",
    gradient: "from-blue-400 to-purple-500"
  },
  {
    icon: Flame,
    title: "Sequências (Streaks)",
    description: "Mantenha sua sequência diária de controle financeiro e ganhe recompensas especiais.",
    gradient: "from-orange-400 to-red-500"
  },
  {
    icon: Medal,
    title: "Níveis e Ranking",
    description: "Suba de nível e compare seu desempenho com outros usuários de forma amigável.",
    gradient: "from-green-400 to-blue-500"
  },
  {
    icon: Award,
    title: "Recompensas Exclusivas",
    description: "Desbloqueie temas, badges e recursos premium conforme você progride.",
    gradient: "from-pink-400 to-purple-500"
  }
];

export default function Gamification() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-950/30 via-purple-900/20 to-background">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-neon-purple rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-neon-pink rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-purple-900/50 border border-purple-500/30 mb-4 sm:mb-6 backdrop-blur-sm">
            <Trophy className="w-3 sm:w-4 h-3 sm:h-4 text-neon-purple" />
            <span className="text-xs sm:text-sm text-purple-200">Gamificação</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-transparent bg-gradient-neon bg-clip-text px-4">
            Finanças Nunca Foram Tão Divertidas
          </h2>
          <p className="text-base sm:text-lg text-purple-200/80 max-w-2xl mx-auto px-4">
            Transforme controle financeiro em um jogo envolvente e alcance suas metas de forma divertida
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {gamificationFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-5 sm:p-6 rounded-2xl bg-purple-950/50 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 backdrop-blur-sm overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                <div className="relative">
                  <div className={`inline-flex p-2.5 sm:p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mb-3 sm:mb-4 shadow-lg`}>
                    <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-purple-100 group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-purple-200/70 group-hover:text-purple-200/90 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-purple-900/30 to-purple-950/30 border border-purple-500/20 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="flex-1 w-full">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-purple-100">Exemplo de Progresso</h3>
              <p className="text-sm sm:text-base text-purple-200/70 mb-4 sm:mb-6">
                Veja como seu progresso é visualizado de forma clara e motivadora
              </p>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-xs sm:text-sm text-purple-200">Nível 12 - Investidor Consciente</span>
                    <span className="text-xs sm:text-sm text-neon-purple">75%</span>
                  </div>
                  <div className="h-2.5 sm:h-3 bg-purple-950 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-purple-500 to-neon-purple rounded-full"></div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-3 sm:pt-4">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-neon-purple">1,250</div>
                    <div className="text-xs text-purple-300">XP Total</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-neon-pink">15</div>
                    <div className="text-xs text-purple-300">Conquistas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-neon-blue">30</div>
                    <div className="text-xs text-purple-300">Dias Streak</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
