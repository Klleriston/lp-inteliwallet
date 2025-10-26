"use client";

import { Mail, ArrowRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao cadastrar');
      }

      setSuccess(true);
      setEmail('');
      setName('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao cadastrar. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waitlist" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-950/20 to-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-purple rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-pink rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-purple-900/50 border border-purple-500/30 mb-4 sm:mb-6 backdrop-blur-sm">
          <Mail className="w-3 sm:w-4 h-3 sm:h-4 text-neon-purple" />
          <span className="text-xs sm:text-sm text-purple-200">Lançamento em Breve</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-transparent bg-gradient-neon bg-clip-text px-4">
          Seja um dos Primeiros a Usar
        </h2>

        <p className="text-base sm:text-lg text-purple-200/80 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          Cadastre-se na lista de espera e seja notificado quando o IntelliWallet estiver disponível.
          Usuários iniciais receberão benefícios exclusivos!
        </p>

        {success ? (
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-green-900/30 to-green-800/30 border border-green-500/30 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
            <CheckCircle className="w-12 sm:w-16 h-12 sm:h-16 text-green-400 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold text-green-100 mb-2">Bem-vindo à lista de espera!</h3>
            <p className="text-sm sm:text-base text-green-200/80">
              Você será notificado quando o IntelliWallet estiver disponível!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome"
                required
                className="w-full px-5 sm:px-6 py-3 sm:py-4 rounded-full bg-purple-950/50 border border-purple-500/30 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white placeholder-purple-300/50 backdrop-blur-sm text-sm sm:text-base"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                required
                className="w-full px-5 sm:px-6 py-3 sm:py-4 rounded-full bg-purple-950/50 border border-purple-500/30 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white placeholder-purple-300/50 backdrop-blur-sm text-sm sm:text-base"
              />
            </div>

            {error && (
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg bg-red-900/30 border border-red-500/30 text-red-200 text-xs sm:text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="group w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-neon-purple rounded-full text-white font-semibold text-base sm:text-lg hover:scale-105 transition-transform duration-200 glow-box flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                'Enviando...'
              ) : (
                <>
                  Entrar na Lista de Espera
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        )}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16">
          <div className="p-4 rounded-xl bg-purple-900/20 border border-purple-500/20 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl mb-2">🎁</div>
            <h4 className="text-sm sm:text-base font-semibold text-purple-100 mb-1">Acesso Antecipado</h4>
            <p className="text-xs sm:text-sm text-purple-200/70">Seja um dos primeiros a usar</p>
          </div>
          <div className="p-4 rounded-xl bg-purple-900/20 border border-purple-500/20 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl mb-2">⭐</div>
            <h4 className="text-sm sm:text-base font-semibold text-purple-100 mb-1">Bônus Especiais</h4>
            <p className="text-xs sm:text-sm text-purple-200/70">XP e conquistas exclusivas</p>
          </div>
          <div className="p-4 rounded-xl bg-purple-900/20 border border-purple-500/20 backdrop-blur-sm sm:col-span-2 md:col-span-1">
            <div className="text-2xl sm:text-3xl mb-2">💎</div>
            <h4 className="text-sm sm:text-base font-semibold text-purple-100 mb-1">Recursos Premium</h4>
            <p className="text-xs sm:text-sm text-purple-200/70">Grátis por tempo limitado</p>
          </div>
        </div>
      </div>
    </section>
  );
}
