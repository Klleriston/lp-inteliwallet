# 🚀 IntelliWallet - Landing Page

Landing page para o **IntelliWallet**, uma planilha financeira gamificada que transforma gestão de dinheiro em diversão.

## ✨ Características

- 🎨 Design moderno com tema roxo futurista
- 🎮 Apresentação do sistema de gamificação
- 🏆 Seção de desafios mensais
- 📧 Sistema de lista de espera integrado com backend Spring Boot
- ⚡ Desenvolvido com Next.js 15, TypeScript e Tailwind CSS
- 📱 Totalmente responsivo para todas as telas

## 🛠️ Tecnologias

- [Next.js 15](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) - Ícones
- Spring Boot (Backend)

## 📦 Instalação

1. Clone o repositório
```bash
git clone <seu-repositorio>
cd lpintelliwallet
```

2. Instale as dependências
```bash
npm install
```

3. Configure as variáveis de ambiente
```bash
cp .env.example .env
```

4. Edite o arquivo `.env` e configure a URL do seu backend:
```env
NEXT_PUBLIC_BACKEND_URL=https://seu-backend.com
```

5. Execute o projeto em modo de desenvolvimento
```bash
npm run dev
```

6. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 🔌 Integração com Backend

A landing page se integra com o backend Spring Boot para salvar usuários na lista de espera.

### Endpoint Necessário no Spring Boot

Crie um controller no seu backend Spring Boot:

```java
package com.inteliwallet.controller;

import com.inteliwallet.entity.User;
import com.inteliwallet.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/waitlist")
@CrossOrigin(origins = "*") // Configure CORS apropriadamente
public class WaitlistController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping
    public ResponseEntity<?> addToWaitlist(@RequestBody WaitlistRequest request) {
        try {
            // Verifica se o email já existe
            if (userRepository.existsByEmail(request.getEmail())) {
                return ResponseEntity.status(409).body(new ErrorResponse("Email já cadastrado"));
            }

            // Cria novo usuário
            User user = new User();
            user.setUsername(request.getUsername());
            user.setEmail(request.getEmail());
            user.setPassword(passwordEncoder.encode(request.getPassword()));
            user.setHasCompletedOnboarding(false);
            user.setTotalPoints(0);
            user.setLevel(1);

            userRepository.save(user);

            return ResponseEntity.ok(new SuccessResponse("Usuário cadastrado com sucesso!"));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(new ErrorResponse("Erro ao cadastrar usuário"));
        }
    }

    // Classes auxiliares
    static class WaitlistRequest {
        private String username;
        private String email;
        private String password;
        private Boolean hasCompletedOnboarding;

        // Getters e Setters
        public String getUsername() { return username; }
        public void setUsername(String username) { this.username = username; }
        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }
        public String getPassword() { return password; }
        public void setPassword(String password) { this.password = password; }
        public Boolean getHasCompletedOnboarding() { return hasCompletedOnboarding; }
        public void setHasCompletedOnboarding(Boolean hasCompletedOnboarding) {
            this.hasCompletedOnboarding = hasCompletedOnboarding;
        }
    }

    static class SuccessResponse {
        private String message;
        public SuccessResponse(String message) { this.message = message; }
        public String getMessage() { return message; }
    }

    static class ErrorResponse {
        private String message;
        public ErrorResponse(String message) { this.message = message; }
        public String getMessage() { return message; }
    }
}
```

### Adicione o método no UserRepository:

```java
public interface UserRepository extends JpaRepository<User, String> {
    boolean existsByEmail(String email);
    // ... outros métodos
}
```

### Configure CORS no Spring Boot:

```java
@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:3000", "https://seu-dominio-frontend.com")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}
```

## 📧 Sistema de Lista de Espera

Quando um usuário se cadastra:
1. Os dados (nome e email) são enviados para a API Next.js
2. A API valida os dados
3. Os dados são enviados para o backend Spring Boot
4. O backend salva o usuário no banco PostgreSQL
5. O usuário recebe feedback de sucesso

**Nota:** Os usuários são salvos com senha temporária gerada automaticamente. Você pode enviar emails posteriormente para que eles criem suas próprias senhas quando o SaaS estiver pronto.

## 🎨 Personalização

### Cores

As cores do tema roxo futurista estão configuradas em `tailwind.config.ts`. Você pode personalizar:

- `purple`: Tons de roxo principais
- `neon`: Cores neon (purple, pink, blue)

### Componentes

Os componentes da landing page estão organizados em:

- `components/Hero.tsx` - Seção inicial
- `components/Features.tsx` - Funcionalidades
- `components/Gamification.tsx` - Sistema de gamificação
- `components/Challenges.tsx` - Desafios mensais
- `components/CTA.tsx` - Call to Action com formulário
- `components/Footer.tsx` - Rodapé

## 🚀 Deploy

### Vercel (Recomendado para Frontend)

1. **Prepare o projeto:**
   ```bash
   npm run build  # Teste o build localmente
   ```

2. **Faça push do código para o GitHub:**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

3. **Deploy na Vercel:**
   - Acesse [Vercel](https://vercel.com) e faça login
   - Clique em "New Project"
   - Importe seu repositório do GitHub
   - Configure as variáveis de ambiente:
     - `NEXT_PUBLIC_BACKEND_URL` - URL do seu backend Spring Boot
   - Clique em "Deploy"

4. **Configurações de segurança incluídas:**
   - ✅ Headers de segurança (CSP, X-Frame-Options, etc.)
   - ✅ HTTPS automático
   - ✅ Proteção contra XSS
   - ✅ Validação robusta de inputs
   - ✅ Rate limiting configurável
   - ✅ Região otimizada (GRU1 - São Paulo)

### Backend Spring Boot

Seu backend já está em produção no Render:
- URL: `dpg-d3uhkn7diees73e9qip0-a.oregon-postgres.render.com`
- Configure esta URL na variável de ambiente do frontend

### Outras Plataformas

O frontend pode ser deployado em qualquer plataforma que suporte Next.js:
- Netlify
- Railway
- AWS Amplify

## 📝 Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Cria a build de produção
npm run start    # Inicia o servidor de produção
npm run lint     # Executa o linter
```

## 🔒 Segurança

### Implementações de Segurança

**Frontend:**
- ✅ Headers de segurança configurados (X-Frame-Options, CSP, etc.)
- ✅ Validação rigorosa de inputs (email, nome, tamanho)
- ✅ Sanitização de dados antes do envio
- ✅ Proteção contra XSS
- ✅ Content-Type validation
- ✅ Timeout em requisições (10s)
- ✅ HTTPS enforced
- ✅ Geração segura de senhas temporárias usando crypto.getRandomValues()

**Backend:**
- ✅ Senhas criptografadas com BCrypt
- ✅ CORS configurado para domínios específicos
- ✅ Proteção contra SQL injection com JPA
- ✅ Validação de dados

### Checklist de Segurança Antes do Deploy

- [ ] Arquivo `.env` não está commitado (verificar .gitignore)
- [ ] Variáveis de ambiente configuradas na Vercel
- [ ] URL do backend atualizada em produção
- [ ] CORS configurado no backend para aceitar o domínio da Vercel
- [ ] Certificado SSL ativo (automático na Vercel)
- [ ] Headers de segurança configurados (já incluídos no next.config.ts)

## 📱 Responsividade

A landing page é totalmente responsiva e otimizada para:
- 📱 Mobile (320px+)
- 📱 Tablet (640px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📄 Licença

Este projeto está sob a licença MIT.

---

Desenvolvido com 💜 para o IntelliWallet
