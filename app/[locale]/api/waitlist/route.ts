import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return NextResponse.json(
        { error: 'Content-Type inválido' },
        { status: 400 }
      );
    }

    const body = await request.json();
    const { email, name } = body;

    if (!email || !name) {
      return NextResponse.json(
        { error: 'Nome e email são obrigatórios' },
        { status: 400 }
      );
    }

    if (typeof email !== 'string' || typeof name !== 'string') {
      return NextResponse.json(
        { error: 'Formato de dados inválido' },
        { status: 400 }
      );
    }

    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { error: 'Nome deve ter entre 2 e 100 caracteres' },
        { status: 400 }
      );
    }

    if (email.length > 254) {
      return NextResponse.json(
        { error: 'Email muito longo' },
        { status: 400 }
      );
    }

    const sanitizedName = name.trim();
    const sanitizedEmail = email.trim().toLowerCase();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedEmail)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const response = await fetch(`${backendUrl}/waitlist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: sanitizedName.toLowerCase().replace(/\s+/g, '_'),
        email: sanitizedEmail,
        password: generateTemporaryPassword(),
        hasCompletedOnboarding: false,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Erro ao cadastrar no servidor');
    }

    const successResponse = NextResponse.json(
      { message: 'Cadastro realizado com sucesso!' },
      { status: 200 }
    );

    successResponse.headers.set('X-Content-Type-Options', 'nosniff');
    successResponse.headers.set('X-Frame-Options', 'DENY');
    successResponse.headers.set('X-XSS-Protection', '1; mode=block');

    return successResponse;
  } catch (error) {
    console.error('Erro ao cadastrar:', error);

    if (error instanceof Error && error.name === 'AbortError') {
      return NextResponse.json(
        { error: 'Tempo de resposta esgotado. Tente novamente.' },
        { status: 504 }
      );
    }

    if (error instanceof Error && error.message.includes('duplicate')) {
      return NextResponse.json(
        { error: 'Este email já está cadastrado' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: 'Erro ao cadastrar. Tente novamente mais tarde.' },
      { status: 500 }
    );
  }
}

function generateTemporaryPassword(): string {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
  let password = '';
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);

  for (let i = 0; i < 16; i++) {
    password += charset[array[i] % charset.length];
  }

  return password;
}
