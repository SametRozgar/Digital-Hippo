import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const perks = [
  {
    name: 'Anında Teslimat',
    Icon: ArrowDownToLine,
    description:
      'Varlıklarınızın saniyeler içinde e-posta adresinize teslim edilmesini sağlayın ve hemen indirin.',
  },
  {
    name: 'Garantili Kalite',
    Icon: CheckCircle,
    description:
      'Platformumuzdaki her varlık, en yüksek kalite standartlarımızı sağlamak için ekibimiz tarafından doğrulanır. Memnun olmaz iseniz 30 günlük iade garantisi sunuyoruz.',
  },
  {
    name: 'Gezegen için',
    Icon: Leaf,
    description:
      "Doğal çevrenin korunması ve restorasyonuna satışların %1'ini taahhüt ettik.",
  },
]
export default function Home() {
  return (
    <>
    <MaxWidthWrapper>
      <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            Yüksek Kalite İçin Kendi Market alanınız{' '}
            <span className='text-blue-600'>
              Dijital Market
            </span>
            .
          </h1>
          <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
            Dijitalhippo'ya Hoşgeldiniz
          </p>
          <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            <Link
              href='/products'
              className={buttonVariants()}>
              Trendleri göster
            </Link>
            <Button variant='ghost'>
              Kalite Anlayışımız &rarr;
            </Button>
          </div>
        </div>
        <ProductReel
          query={{ sort: 'desc', limit: 4 }}
          href='/products'
          title='Yeni Ürünler'
        />
    </MaxWidthWrapper>

    <section className='border-t border-gray-200 bg-gray-50'>
        <MaxWidthWrapper className='py-20'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {perks.map((perk) => (
              <div
                key={perk.name}
                className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900'>
                    {<perk.Icon className='w-1/3 h-1/3' />}
                  </div>
                </div>

                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className='text-base font-medium text-gray-900'>
                    {perk.name}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

    </>
  );
}
