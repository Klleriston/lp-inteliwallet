"use client";

import { Calendar, Users2, TrendingUp, Gift, CheckCircle2 } from 'lucide-react';

const challengeExamples = [
  {
    title: "Desafio do Café",
    description: "Economize R$ 200 reduzindo gastos com café fora de casa",
    participants: 1234,
    progress: 65,
    reward: "50 XP + Badge Exclusivo",
    icon: "☕"
  },
  {
    title: "Investidor Iniciante",
    description: "Invista pelo menos R$ 500 este mês",
    participants: 856,
    progress: 40,
    reward: "100 XP + Tema Premium",
    icon: "📈"
  },
  {
    title: "Economia Doméstica",
    description: "Reduza 15% dos gastos com mercado",
    participants: 2341,
    progress: 80,
    reward: "75 XP + Conquista Rara",
    icon: "🛒"
  }
];

export default function Challenges() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-purple-950/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-purple-900/50 border border-purple-500/30 mb-4 sm:mb-6 backdrop-blur-sm">
            <Calendar className="w-3 sm:w-4 h-3 sm:h-4 text-neon-purple" />
            <span className="text-xs sm:text-sm text-purple-200">Desafios Mensais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-transparent bg-gradient-to-r from-purple-200 to-neon-pink bg-clip-text px-4">
            Melhore Sua Economia com Desafios
          </h2>
          <p className="text-base sm:text-lg text-purple-200/80 max-w-2xl mx-auto px-4">
            Participe de desafios mensais, compete de forma saudável e alcance suas metas financeiras mais rápido
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gradient-to-r from-purple-600 to-neon-purple mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-purple-100">Escolha um Desafio</h3>
            <p className="text-xs sm:text-sm text-purple-200/70">Selecione entre diversos desafios mensais disponíveis</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gradient-to-r from-purple-600 to-neon-purple mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-purple-100">Participe</h3>
            <p className="text-xs sm:text-sm text-purple-200/70">Junte-se a outros usuários e comece o desafio</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gradient-to-r from-purple-600 to-neon-purple mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-purple-100">Acompanhe</h3>
            <p className="text-xs sm:text-sm text-purple-200/70">Veja seu progresso e compare com outros participantes</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gradient-to-r from-purple-600 to-neon-purple mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl font-bold text-white">4</span>
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-purple-100">Conquiste</h3>
            <p className="text-xs sm:text-sm text-purple-200/70">Complete e ganhe recompensas exclusivas</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-purple-100 px-2">Desafios em Destaque</h3>
          {challengeExamples.map((challenge, index) => (
            <div
              key={index}
              className="group p-4 sm:p-6 rounded-2xl bg-purple-950/30 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-neon-purple flex items-center justify-center text-2xl sm:text-3xl">
                    {challenge.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 sm:mb-3">
                    <h4 className="text-lg sm:text-xl font-semibold text-purple-100 mb-2 md:mb-0">
                      {challenge.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-purple-200/70">
                      <Users2 className="w-3 sm:w-4 h-3 sm:h-4" />
                      <span>{challenge.participants.toLocaleString('pt-BR')} participantes</span>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-purple-200/70 mb-3 sm:mb-4">{challenge.description}</p>

                  <div className="mb-2 sm:mb-3">
                    <div className="flex justify-between mb-1 sm:mb-2">
                      <span className="text-xs sm:text-sm text-purple-200">Progresso Médio</span>
                      <span className="text-xs sm:text-sm text-neon-purple font-semibold">{challenge.progress}%</span>
                    </div>
                    <div className="h-1.5 sm:h-2 bg-purple-950 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-neon-purple rounded-full transition-all duration-500"
                        style={{ width: `${challenge.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <Gift className="w-3 sm:w-4 h-3 sm:h-4 text-neon-pink" />
                    <span className="text-purple-200/80">Recompensa: {challenge.reward}</span>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <button className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-neon-purple rounded-full text-white font-semibold text-sm sm:text-base hover:scale-105 transition-transform duration-200 w-full md:w-auto">
                    Participar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16">
          <div className="p-5 sm:p-6 rounded-2xl bg-purple-900/20 border border-purple-500/20 backdrop-blur-sm">
            <TrendingUp className="w-7 sm:w-8 h-7 sm:h-8 text-neon-purple mb-3 sm:mb-4" />
            <h4 className="text-base sm:text-lg font-semibold mb-2 text-purple-100">Economia Acelerada</h4>
            <p className="text-xs sm:text-sm text-purple-200/70">
              Usuários que participam de desafios economizam em média 30% a mais
            </p>
          </div>
          <div className="p-5 sm:p-6 rounded-2xl bg-purple-900/20 border border-purple-500/20 backdrop-blur-sm">
            <Users2 className="w-7 sm:w-8 h-7 sm:h-8 text-neon-pink mb-3 sm:mb-4" />
            <h4 className="text-base sm:text-lg font-semibold mb-2 text-purple-100">Comunidade Ativa</h4>
            <p className="text-xs sm:text-sm text-purple-200/70">
              Compartilhe dicas e motive-se com uma comunidade engajada
            </p>
          </div>
          <div className="p-5 sm:p-6 rounded-2xl bg-purple-900/20 border border-purple-500/20 backdrop-blur-sm sm:col-span-2 md:col-span-1">
            <CheckCircle2 className="w-7 sm:w-8 h-7 sm:h-8 text-neon-blue mb-3 sm:mb-4" />
            <h4 className="text-base sm:text-lg font-semibold mb-2 text-purple-100">Hábitos Duradouros</h4>
            <p className="text-xs sm:text-sm text-purple-200/70">
              Desenvolva hábitos financeiros saudáveis que duram para sempre
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
