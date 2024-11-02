import { FlipWords } from '@/components/ui/flip-words';
import { GlareCard } from '@/components/ui/glare-card';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import FeaturesSectionDemo from '@/components/blocks/features-section-demo-2';
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { FaGithub } from 'react-icons/fa6';
import {
  SiWindows,
  SiTypescript,
  SiPython,
  SiElectron,
  SiLinux,
} from 'react-icons/si';

export default function Home() {
  const words = [
    'Grand Theft Auto V',
    'The Last of Us',
    'The Witcher 3: Wild Hunt',
    'Cyberpunk 2077',
    'Red Dead Redemption 2',
  ];

  return (
    <main className="">
      <section className="h-screen bg-[radial-gradient(circle,#252525_1.1px,rgba(0,0,0,0)_2px)] bg-[length:25px_25px]">
        <div className="container mx-auto flex flex-col lg:flex-row gap-6 h-full">
          <div className="lg:w-1/2 flex flex-col gap-7 justify-center max-lg:mt-28">
            <h1 className="text-5xl font-bold max-lg:text-center">
              Все игры — в одном месте. Начни свое приключение
              <br className="max-lg:hidden" /> с <span className='lg:hidden'>Hydra</span>
              <FlipWords
                words={words}
                className="max-lg:text-center max-lg:hidden"
              />
            </h1>
            <div className="w-full flex gap-2 max-lg:justify-center">
              <Button className="w-max" asChild>
                <Link href={'#download'}>Скачать и установить</Link>
              </Button>
              <Button className="w-max" asChild>
                <Link href={'https://github.com/hydralauncher/hydra'}>
                  GitHub <FaGithub />
                </Link>
              </Button>
            </div>
            <div className="w-full flex justify-center lg:justify-start  text-3xl gap-12 opacity-30">
              <SiTypescript />
              <SiPython />
              <SiElectron />
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center">
            <GlareCard className="flex flex-col items-center justify-center">
              <Image
                src="/assets/screenshot.png"
                alt="Hydra Launcher"
                width={500}
                height={500}
                className="w-full h-full rounded"
              />
            </GlareCard>
          </div>
        </div>
      </section>
      <section className="mt-20 flex container gap-4 flex-col lg:flex-row">
        <div className="w-full lg:1/2">
          <Image
            src="/assets/icon.webp"
            alt="Hydra Launcher"
            width={156}
            height={156}
            className="mx-auto"
          />
        </div>
        <div className="w-full lg:1/2 flex items-center">
          <h2 className="font-medium text-xl max-lg:text-center">
            <b>Hydra</b> - это игровой лаунчер с встроенным{' '}
            <b>BitTorrent-клиентом</b> и{' '}
            <b>системой автоматического сбора репаков</b>.<br /> Лаунчер написан
            на TypeScript (Electron) и Python, который управляет системой
            торрентов с использованием libtorrent.
          </h2>
        </div>
      </section>
      <section className="mt-48">
        <h3 className="text-3xl text-center font-bold">Преимущества</h3>
        <FeaturesSectionDemo />
      </section>
      <section>
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Готов попробовать <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Hydra Launcher?
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`/assets/screenshot.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </section>
      <section className="container mx-auto mb-20">
        <h3 className="text-4xl text-center font-bold mb-4">
          Скачать и установить
        </h3>
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="w-full bg-white dark:bg-neutral-900 rounded-xl p-6">
            <p className="text-3xl font-bold flex items-center justify-center gap-2">
              Windows <SiWindows />
            </p>
            <div className="w-full flex flex-col lg:flex-row gap-4 mt-4">
              <div className="w-full">
                <Button className="w-full">Протативная версия</Button>
                <p className="mt-3">
                  Портативная версия приложения, которая не требует установки.
                </p>
              </div>
              <div className="w-full">
                <Button className="w-full">Уставновочная версия</Button>
                <p className="mt-3">
                  Установочный файл. При его запуске происходит установка
                  приложения на компьютер.
                </p>
              </div>
            </div>
          </div>
          <div
            id="download"
            className="w-full bg-white dark:bg-neutral-900 rounded-xl p-6"
          >
            <p className="text-3xl font-bold flex items-center justify-center gap-2">
              Linux <SiLinux />
            </p>
            <div className="w-full flex flex-col lg:flex-row gap-4 mt-4">
              <div className="w-full">
                <Button className="w-full">Pacman</Button>
                <p className="mt-3">
                  Пакет для менеджера пакетов pacman, используемого в Arch Linux
                  и его производных.
                </p>
              </div>
              <div className="w-full">
                <Button className="w-full">RPM</Button>
                <p className="mt-3">
                  RPM-пакет для установки на дистрибутивы, такие как Fedora и
                  CentOS
                </p>
              </div>
              <div className="w-full">
                <Button className="w-full">DEB</Button>
                <p className="mt-3">
                  DEB-пакет для установки на дистрибутивы, такие как Ubuntu и
                  Debian.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='container mx-auto'>
        <TextHoverEffect text="HYDRA" />
      </section>
    </main>
  );
}
