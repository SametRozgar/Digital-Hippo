'use client'

import { trpc } from '@/trpc/client'
import { Loader2, XCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from './ui/button'

interface VerifyEmailProps {
  token: string
}

const VerifyEmail = ({ token }: VerifyEmailProps) => {
  const { data, isLoading, isError } =
  trpc.auth.verifyEmail.useQuery({
    token,
  })

  /* isError True False data?.success isLoading */
  if (isError) {
    return (
      <div className='flex flex-col items-center gap-2'>
        <XCircle className='h-8 w-8 text-red-600' />
        <h3 className='font-semibold text-xl'>
          Bir Sorun Oluştu
        </h3>
        <p className='text-muted-foreground text-sm'>
        Bu Kod Geçersiz Veya Kullanılmış Olabilir ... Lütfen Tekrar Deneyiniz
        </p>
      </div>
    )
  }

  if (data?.success) {
    return (
      <div className='flex h-full flex-col items-center justify-center'>
        <div className='relative mb-4 h-60 w-60 text-muted-foreground'>
          <Image
            src='/hippo-email-sent.png'
            fill
            alt='the email was sent'
          />
        </div>

        <h3 className='font-semibold text-2xl'>
         Şimdi Tamamen Hazırsınız!!        </h3>
        <p className='text-muted-foreground text-center mt-1'>
          Maili Onayladığınız İçin Teşekkür Ederiz..
        </p>
        <Link
          className={buttonVariants({ className: 'mt-4' })}
          href='/sign-in'>
          Giriş Yap
        </Link>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className='flex flex-col items-center gap-2'>
        <Loader2 className='animate-spin h-8 w-8 text-zinc-300' />
        <h3 className='font-semibold text-xl'>
          Onaylanıyor...
        </h3>
        <p className='text-muted-foreground text-sm'>
          Bu Biraz Zaman Alabilir
        </p>
      </div>
    )
  }

 
}

export default VerifyEmail
