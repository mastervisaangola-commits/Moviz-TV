/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Download, ExternalLink, Film, Smartphone, Tablet, Tv } from 'lucide-react';

const DRIVE_FILE_ID = '1UqvBv1_r5AnOgeqyM0ILzmM5UAlvHLm-';
const DRIVE_VIEW_URL = `https://drive.google.com/file/d/${DRIVE_FILE_ID}/view?usp=drive_link`;
const DRIVE_DIRECT_URL = `https://drive.usercontent.google.com/download?id=${DRIVE_FILE_ID}&export=download&confirm=t`;
const MOVIZ_LOGO_PATH = '/assets/aistudio/moviz-logo_b84f4375.png';

const DEVICES = [
  {
    name: 'Android TV',
    description: 'Instale direto na sua Smart TV',
    Icon: Tv,
  },
  {
    name: 'Celular',
    description: 'Para qualquer smartphone Android',
    Icon: Smartphone,
  },
  {
    name: 'Tablet',
    description: 'Tela maior, mesma simplicidade',
    Icon: Tablet,
  },
];

export default function App() {
  const [logoFailed, setLogoFailed] = useState(false);
  const [downloadFeedback, setDownloadFeedback] = useState(false);

  const handleDownloadClick = () => {
    setDownloadFeedback(true);
    window.setTimeout(() => {
      setDownloadFeedback(false);
    }, 4500);
  };

  return (
    <main className="flex min-h-dvh w-full flex-col items-center justify-center bg-black px-6 py-14 text-neutral-100">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        {/* Moviz TV Logo */}
        <div className="mb-6 flex h-24 w-24 items-center justify-center">
          {!logoFailed ? (
            <img
              src={MOVIZ_LOGO_PATH}
              alt="Logotipo do Moviz TV"
              referrerPolicy="no-referrer"
              onError={() => setLogoFailed(true)}
              className="h-full w-full object-contain"
            />
          ) : (
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-950">
              <Film className="h-9 w-9 text-white" aria-hidden="true" />
            </div>
          )}
        </div>

        {/* Title & Subtitle */}
        <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl [text-wrap:balance]">
          Moviz TV
        </h1>
        <p className="mt-3 max-w-lg text-base leading-relaxed text-neutral-400 sm:text-lg">
          Filmes e séries no seu Android. Simples, direto e funcional.
        </p>

        {/* Two Action Buttons: Download directly & Open in Google Drive */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href={DRIVE_DIRECT_URL}
            target="_blank"
            rel="noopener noreferrer"
            download="MovizTV"
            onClick={handleDownloadClick}
            className="inline-flex min-h-[46px] items-center justify-center gap-2.5 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-colors duration-150 hover:bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white whitespace-nowrap shrink-0"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            <span>Baixar o Moviz TV</span>
          </a>

          <a
            href={DRIVE_VIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-neutral-800 bg-[#0A0A0A] px-6 py-3 text-sm font-medium text-neutral-200 transition-colors duration-150 hover:border-neutral-700 hover:bg-neutral-900 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400 whitespace-nowrap shrink-0"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            <span>Abrir no Google Drive</span>
          </a>
        </div>

        {/* Quiet Metadata */}
        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-neutral-500">
          <span>APK para Android</span>
          <span aria-hidden="true">·</span>
          <span>Google Drive</span>
        </div>

        {downloadFeedback && (
          <p role="status" className="mt-3 text-xs text-neutral-300">
            Transferência iniciada em uma nova aba. Caso não inicie, clique em Abrir no Google Drive.
          </p>
        )}

        {/* 3 Device Cards */}
        <div className="mt-12 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
          {DEVICES.map(({ name, description, Icon }) => (
            <div
              key={name}
              className="flex flex-col items-center rounded-2xl border border-neutral-800/80 bg-[#070707] px-6 py-7 text-center"
            >
              <Icon className="mb-3.5 h-6 w-6 text-neutral-300" aria-hidden="true" />
              <h2 className="font-display text-sm font-semibold text-white">
                {name}
              </h2>
              <p className="mt-1.5 text-xs leading-relaxed text-neutral-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
