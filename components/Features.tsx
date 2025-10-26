"use client";

import { Table2, Users, TrendingUp, Shield, Zap, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Table2,
    title: "Planilha Financeira Completa",
    description: "Gerencie suas receitas, despesas e investimentos com uma interface intuitiva e poderosa.",
    color: "text-purple-400"
  },
  {
    icon: Users,
    title: "Multi-usuário",
    description: "Adicione familiares ou amigos para gerenciar finanças compartilhadas de forma colaborativa.",
    color: "text-neon-purple"
  },
  {
    icon: TrendingUp,
    title: "Análises Inteligentes",
    description: "Visualize gráficos e relatórios detalhados sobre seus hábitos financeiros e progresso.",
    color: "text-neon-pink"
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Seus dados financeiros protegidos com criptografia de ponta e máxima privacidade.",
    color: "text-purple-300"
  },
  {
    icon: Zap,
    title: "Sincronização em Tempo Real",
    description: "Todas as mudanças sincronizadas instantaneamente entre todos os usuários.",
    color: "text-neon-blue"
  },
  {
    icon: Smartphone,
    title: "Acesso em Qualquer Lugar",
    description: "Use no computador, tablet ou smartphone. Suas finanças sempre à mão.",
    color: "text-purple-400"
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-purple-950/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-transparent bg-gradient-to-r from-purple-200 to-neon-purple bg-clip-text px-4">
            Funcionalidades Poderosas
          </h2>
          <p className="text-base sm:text-lg text-purple-200/80 max-w-2xl mx-auto px-4">
            Tudo que você precisa para ter controle total das suas finanças
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-5 sm:p-6 rounded-2xl bg-purple-900/20 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <div className={`inline-flex p-2.5 sm:p-3 rounded-lg bg-purple-900/50 mb-3 sm:mb-4 ${feature.color}`}>
                  <Icon className="w-5 sm:w-6 h-5 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-purple-100">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-purple-200/70">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
