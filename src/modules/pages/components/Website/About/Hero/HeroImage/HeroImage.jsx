/* @flow */
/* eslint-disable max-len, prettier/prettier */

import React, { useRef } from 'react';

import { useElementHeight } from '../../../../../../core/hooks';

import styles from './HeroImage.module.css';

const displayName = 'pages.Website.About.Hero.HeroImage';

const HeroImage = () => {
  const ref = useRef(null);
  const pathHeight = useElementHeight(ref);
  // move the svg down so the bottom path aligns with bottom of container
  const style = { bottom: `${-1 * pathHeight}px` };
  return (
    <div className={styles.main} style={style}>
      <svg className={styles.image} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 697 589">
        <path fill="#fff" d="M69.92 30.44v103.64H38.38V30.44H1.5V3.52h105.3v26.92zM203.61 134.08V79.49h-50.9v54.59h-31.53V3.52h31.53v49.42h50.9V3.52h31.53v130.56zM262.06 134.08V3.52h31.72v130.56zM403.69 134.08L351.13 48.7h-.55l.73 85.38H320.7V3.52h36L409 88.71h.56l-.74-85.19h30.61v130.56zM560 134.26a117.51 117.51 0 0 1-28 3.14 81.05 81.05 0 0 1-28.86-5 66.51 66.51 0 0 1-22.68-14 63.89 63.89 0 0 1-14.85-21.67 71.48 71.48 0 0 1-5.34-28.12 71.55 71.55 0 0 1 5.44-28.4 63.07 63.07 0 0 1 15-21.66 66.8 66.8 0 0 1 22.5-13.74A79.3 79.3 0 0 1 531.11 0a85.43 85.43 0 0 1 28.76 4.71q13.29 4.69 21.58 12.63L561.53 40a34.58 34.58 0 0 0-12.17-8.76 41.35 41.35 0 0 0-17.15-3.41 38 38 0 0 0-15.3 3 36.8 36.8 0 0 0-12.17 8.48 38.32 38.32 0 0 0-8 12.91 45.21 45.21 0 0 0-2.86 16.32 51.1 51.1 0 0 0 2.58 16.6 35.73 35.73 0 0 0 7.65 13 34.78 34.78 0 0 0 12.54 8.48 44.87 44.87 0 0 0 17.06 3 64.26 64.26 0 0 0 10.51-.82 39.52 39.52 0 0 0 9.22-2.68V82.44h-24.91V57h53.84v69.15a100.28 100.28 0 0 1-22.37 8.11zM677.16 37.45a28.61 28.61 0 0 0-10.61-8.21 29.85 29.85 0 0 0-12.63-3 37.44 37.44 0 0 0-6.36.55 16.55 16.55 0 0 0-5.81 2.12 14.34 14.34 0 0 0-4.33 4.06 10.79 10.79 0 0 0-1.76 6.36 10.18 10.18 0 0 0 1.39 5.53 12.3 12.3 0 0 0 4.05 3.88 36.44 36.44 0 0 0 6.37 3c2.45.92 5.22 1.88 8.29 2.86q6.65 2.2 13.83 4.88a52 52 0 0 1 13.1 7.1 37.37 37.37 0 0 1 9.77 11q3.87 6.54 3.87 16.32 0 11.25-4.15 19.45A38.68 38.68 0 0 1 681 126.88a47.75 47.75 0 0 1-16 7.93 67.47 67.47 0 0 1-18.62 2.59 77.12 77.12 0 0 1-27.11-4.89 57.5 57.5 0 0 1-21.76-13.92l20.66-21a37.93 37.93 0 0 0 12.63 9.87 34.18 34.18 0 0 0 15.58 4 31.46 31.46 0 0 0 6.82-.73 16.87 16.87 0 0 0 5.81-2.4 12.06 12.06 0 0 0 4-4.43 13.93 13.93 0 0 0 1.47-6.63 10.56 10.56 0 0 0-1.84-6.27 18.09 18.09 0 0 0-5.26-4.71 42.54 42.54 0 0 0-8.48-3.87q-5.07-1.75-11.53-3.78a110 110 0 0 1-12.26-4.79 41 41 0 0 1-10.69-7.1 32.88 32.88 0 0 1-7.57-10.51 35.73 35.73 0 0 1-2.85-15q0-10.89 4.42-18.63A38.55 38.55 0 0 1 620 9.79a49.88 49.88 0 0 1 16.22-7.29A73.86 73.86 0 0 1 654.47.2a67.62 67.62 0 0 1 22.59 4.06 58.12 58.12 0 0 1 20.19 12zM409.83 289.74c-8.54 2.09-12.85 3.13-22.93 3.13-10.45 0-25.07-1.66-33.86-5a66.48 66.48 0 0 1-22.68-14 63.84 63.84 0 0 1-14.85-21.67 76.71 76.71 0 0 1 .09-56.52 63.37 63.37 0 0 1 15-21.67 66.42 66.42 0 0 1 22.5-13.73 79.24 79.24 0 0 1 27.84-4.8 85.7 85.7 0 0 1 28.77 4.7q13.27 4.71 21.58 12.64l-19.89 22.69a34.33 34.33 0 0 0-12.17-8.76 41.19 41.19 0 0 0-17.15-3.41 38 38 0 0 0-15.3 3 36.84 36.84 0 0 0-12.18 8.48 38.63 38.63 0 0 0-8 12.91 45.42 45.42 0 0 0-2.86 16.32 50.83 50.83 0 0 0 2.59 16.6 35.73 35.73 0 0 0 7.65 13 34.91 34.91 0 0 0 12.54 8.48 44.87 44.87 0 0 0 17.06 3 63.24 63.24 0 0 0 10.51-.83 39 39 0 0 0 9.22-2.67v-23.71h-24.9v-25.45h53.85v69.15a100.36 100.36 0 0 1-22.43 8.12zM594.15 223.72A72.93 72.93 0 0 1 588.8 252a64.52 64.52 0 0 1-14.8 22 66 66 0 0 1-22.59 14.11c-8.73 3.32-13.19 5-23.39 5s-24.64-1.66-33.31-5A66.15 66.15 0 0 1 472.16 274a64.35 64.35 0 0 1-14.84-22 72.75 72.75 0 0 1-5.32-28.28 71.82 71.82 0 0 1 5.35-28.3 61.94 61.94 0 0 1 14.84-21.49 66 66 0 0 1 22.5-13.64 86.12 86.12 0 0 1 56.7 0A65.84 65.84 0 0 1 574 173.93a62.1 62.1 0 0 1 14.85 21.49 72 72 0 0 1 5.3 28.3zm-33.75 0a44.71 44.71 0 0 0-2.77-15.86 37.71 37.71 0 0 0-7.63-12.63 35.42 35.42 0 0 0-11.8-8.3 37.33 37.33 0 0 0-15.21-3 36.26 36.26 0 0 0-26.99 11.3 35.86 35.86 0 0 0-7.65 12.63 49 49 0 0 0 .09 32.18 38.94 38.94 0 0 0 7.65 12.82 35 35 0 0 0 11.71 8.39 39.15 39.15 0 0 0 30.25 0 36.13 36.13 0 0 0 11.8-8.39 37.81 37.81 0 0 0 7.78-12.86 46.52 46.52 0 0 0 2.77-16.28zM665.33 185.92v103.63h-31.54V185.92h-36.88V159h105.3v26.92zM575.28 396.58a59.93 59.93 0 0 1-5.58-25 29.56 29.56 0 0 1 .32-5l3.49-24.27a26.88 26.88 0 0 0-.85-12.3c-3.15-9.43-11.38-16.17-21-16.17l-56.68.15a3 3 0 0 0-3 2.89c-.76 24.7-11.18 25.65-11.18 52.17 0 27.55 11.23 27.55 11.23 55.1 0 15.79-3.7 22.51-6.85 30.59h84.51a46.32 46.32 0 0 0 11.22-30.59c-.02-4.44-1.59-18.15-5.63-27.57zM556 428.52c-.5 13-12.22 15-20.55 15h-17.71c.14-.49.31-1 .45-1.54a66.44 66.44 0 0 0 2.15-17.89c0-27.55-11.22-27.55-11.22-55.1 0-6.08 2.14-14.23 3-18.22a12.44 12.44 0 0 1 11.88-9.62h14.29c2.16 0 5.4 1.73 7 3.1 3 2.54 4 7 3 11l-1.76 6.75a47.49 47.49 0 0 0-.92 18.88c2.62 16.48 10.38 20.33 10.38 43.24.01.32.01 4.1.01 4.4zM469 424.12c0 15.8-3.69 22.53-6.84 30.6h-28.35c3.15-8.07 6.84-14.8 6.84-30.6 0-27.54-11.22-27.54-11.22-55.08 0-26.52 10.42-27.49 11.17-52.16a3 3 0 0 1 3-2.89h22.31a3 3 0 0 1 3 3.13c-.82 24.44-11.17 25.48-11.17 51.92.01 27.54 11.26 27.54 11.26 55.08zM685.14 388.49c0-22.57 5.25-23.27 5.25-45.84l-.08-2.18c-.46-14.64-11.37-26.46-28.69-26.46h-60.1a3 3 0 0 0-3 2.9 62.92 62.92 0 0 1-1.94 14.37c-3.22 12.24-9.24 17.64-9.24 37.79 0 27.54 11.22 27.54 11.22 55.08 0 15.76-3.68 22.49-6.82 30.54h29.46c3.14-8.05 6.82-14.78 6.82-30.54 0-27.54-11.22-27.54-11.22-55.08 0-12.75 2.4-19.61 5-26h33.53c4.68 0 8.95 4.8 8.86 10.65v.28c-1.28 17.42-5.07 13.76-5.07 34.47 0 22.58 9.2 22.58 9.2 45.16 0 10.28-1.91 15.88-4 21.07h26c2.08-5.19 4-10.79 4-21.07.02-22.56-9.18-22.56-9.18-45.14zM413.81 406.08c6.17 9.83-2.89 26.06-2.89 26.06a2.5 2.5 0 0 1-2.1 1.51h-27.3c-1.14 9.41-3.9 14.84-6.33 21.07h-28.32c3.15-8.07 6.84-14.8 6.84-30.6 0-27.54-11.22-27.54-11.22-55.08 0-24.56 8.94-27.21 10.86-47.05.21-2.25.35-4.71.36-7.46a1.47 1.47 0 0 1 1.15-.54h62.74a1.51 1.51 0 0 1 1.51 1.51l-5.68 26.06a1.5 1.5 0 0 1-1.51 1.51H375.8c-2.59 6.4-5 13.24-5 26 0 18.86 5.27 24.81 8.58 35.53h32.12c1.33-.03 2.31 1.48 2.31 1.48zM190.83 368.85c3.09 27.53 17.39 30 17.39 55.07 0 16.31-3.47 21.5-5 30.8h-24.69c2.25-8.16 5.26-14.88 3.47-30.8-3.08-27.54-14.3-27.54-17.37-55.07-3-27 7.69-27.52 5.22-53.43a1.48 1.48 0 0 1 1.48-1.62h23.22a1.49 1.49 0 0 1 1.49 1.33c2.56 26.2-8.23 26.65-5.21 53.72zM260.91 370.58c6 26.05 22.57 32.08 22.57 56.4 0 12.34-2.84 19.63-5.36 27.74h-21c2.88-8.71 6.39-15.33 6.39-27.59 0-11.95-5.81-17-9.66-20.16v6.79c0 18.51-5.84 30.8-10.59 41h-22.74c4.6-10.14 12-17 14.28-35.43 3.38-26.85-2.68-23.06.23-48.38a2.28 2.28 0 0 1 2.24-2h21.44a2.25 2.25 0 0 1 2.2 1.63zM329.14 423.92c-.46 15.93-4.41 22.64-7.82 30.8h-26.87c3.33-7.93 7.07-15.86 7.51-30.8.8-27.54-10.41-27.54-9.62-55.07.8-27 11.64-27.52 12.79-53.62a1.48 1.48 0 0 1 1.49-1.43h24.2a1.49 1.49 0 0 1 1.49 1.56c-1.18 26-12 26.5-12.78 53.49-.8 27.53 10.47 27.53 9.61 55.07z" />
        <path fill="#fff" d="M548.52 473.56v-6.15a39 39 0 0 0 21.16-12.69h-84.51c-2.34 6-4.38 12.73-4.38 24.47 0 27.55 11.23 27.55 11.23 55.09 0 26.46-10.36 27.5-11.18 52a3 3 0 0 0 3 3.14h22.33a3 3 0 0 0 3-2.89c.75-24.7 11.18-25.66 11.18-52.21 0-27.54-11.22-27.54-11.22-55.09a26.76 26.76 0 0 1 2.36-11H521v5.34c0 27.55 31.81 38 31.81 65.5 0 26.46-10.35 23.09-11.17 47.18a3 3 0 0 0 3 3.13h21.6a3 3 0 0 0 3-2.9c.75-24.63 11.17-24.79 11.17-51.33-.02-27.56-31.89-43.05-31.89-61.59zM469 534.27c0 26.55-10.42 27.51-11.18 52.2a3 3 0 0 1-3 2.9H432.5a3 3 0 0 1-3-3.14c.82-24.45 11.17-25.5 11.17-52 0-27.55-11.22-27.55-11.22-55.09 0-11.73 2-18.46 4.38-24.46h28.32c-2.34 6-4.38 12.73-4.38 24.46-.01 27.58 11.23 27.58 11.23 55.13zM685.15 478.8c0-12.29 2.73-17.89 5.21-24.08h-26c-2.48 6.19-5.21 11.79-5.21 24.08 0 22.59 12 30.29 12 52.88 0 19.2-12.41 26.94-27.27 26.94l-20-.17c2.29-5.92 4.24-12.6 4.24-24.12 0-27.55-11.22-27.55-11.22-55.1 0-11.77 2-18.5 4.4-24.51h-29.54c-2.35 6-4.4 12.74-4.4 24.51 0 27.55 11.22 27.55 11.22 55.1 0 26.45-10.34 27.5-11.16 52a3 3 0 0 0 3 3.13h67.36c22.57 0 39.56-31 39.56-54.11.01-22.7-12.19-33.7-12.19-56.55zM416.63 559.92l-5.68 28a1.5 1.5 0 0 1-1.49 1.51h-58.57v-.08h-5.33a3 3 0 0 1-3-3.13c.81-24.46 11.16-25.5 11.16-52 0-27.55-11.22-27.55-11.22-55.1 0-11.73 2-18.46 4.38-24.46h28.32c-2.34 6-4.38 12.73-4.38 24.46 0 27.55 11.23 27.55 11.23 55.1 0 11.53-2 18.22-4.26 24.13h37.34a1.5 1.5 0 0 1 1.5 1.57zM237.23 474c0 19.35 8.6 24.59 8.6 42.85 0 32.57-19.43 27.78-29.81 70.1a2.89 2.89 0 0 1-2.8 2.2h-21.64a2.56 2.56 0 0 1-2.52-2.32c-2.22-25.25 8.27-26 5.28-52.78C191.26 506.52 180 506.52 177 479c-1.3-11.61-.06-18.32 1.58-24.26h24.67c-.83 4.95-1.11 11.06 0 20.62 2.78 24.82 16.25 27.39 16.25 51.31 2-3.46 3.48-6.42 3.92-8.92 3.15-18-6.69-29.23-6.69-43.84a43.92 43.92 0 0 1 3.88-19.17h22.74c-3.35 6.97-6.12 12.95-6.12 19.26zM325.93 534.07c-.78 26.69-11.34 27.53-12.73 52.61a2.64 2.64 0 0 1-2.61 2.49h-25.82a2.89 2.89 0 0 1-2.9-2.89V574c0-45.56-28.48-67.37-28.48-95.49a71.38 71.38 0 0 1 3.7-23.82h21a74.34 74.34 0 0 0-3.85 24.06c0 23.22 17.79 34.84 24 62.26.22-2.12.39-4.42.46-7 .81-27.55-9.6-33.82-9.6-55.09 0-10.88 2.52-17.57 5.32-24.26h26.87c-2.48 5.95-4.66 12.66-5 24.26-.78 27.6 10.45 27.6 9.64 55.15z" />
        <path ref={ref} fill="#e9f6ff" d="M245.83 516.85c0 32.57-19.43 27.78-29.81 70.1a2.89 2.89 0 0 1-2.8 2.2h-21.64a2.56 2.56 0 0 1-2.52-2.32c-2.22-25.25 8.27-26 5.28-52.78C191.26 506.52 180 506.52 177 479c-1.3-11.61-.06-18.32 1.58-24.26h24.67c-.83 4.95-1.11 11.06 0 20.62 2.78 24.82 16.25 27.39 16.25 51.31 2-3.46 3.48-6.42 3.92-8.92 3.15-18-6.69-29.23-6.69-43.84a43.92 43.92 0 0 1 3.88-19.17h22.74c-3.28 7-6 13-6 19.28-.12 19.33 8.48 24.57 8.48 42.83zM325.93 534.07c-.78 26.69-11.34 27.53-12.73 52.61a2.64 2.64 0 0 1-2.61 2.49h-25.82a2.89 2.89 0 0 1-2.9-2.89V574c0-45.56-28.48-67.37-28.48-95.49a71.38 71.38 0 0 1 3.7-23.82h21a74.34 74.34 0 0 0-3.85 24.06c0 23.22 17.79 34.84 24 62.26.22-2.12.39-4.42.46-7 .81-27.55-9.6-33.82-9.6-55.09 0-10.88 2.52-17.57 5.32-24.26h26.87c-2.48 5.95-4.66 12.66-5 24.26-.78 27.6 10.45 27.6 9.64 55.15zM416.63 559.92l-5.68 28a1.5 1.5 0 0 1-1.49 1.51h-58.57v-.08h-5.33a3 3 0 0 1-3-3.13c.81-24.46 11.16-25.5 11.16-52 0-27.55-11.22-27.55-11.22-55.1 0-11.73 2-18.46 4.38-24.46h28.32c-2.34 6-4.38 12.73-4.38 24.46 0 27.55 11.23 27.55 11.23 55.1 0 11.53-2 18.22-4.26 24.13h37.34a1.5 1.5 0 0 1 1.5 1.57zM469 534.27c0 26.55-10.42 27.51-11.18 52.2a3 3 0 0 1-3 2.9H432.5a3 3 0 0 1-3-3.14c.82-24.45 11.17-25.5 11.17-52 0-27.55-11.22-27.55-11.22-55.09 0-11.73 2-18.46 4.38-24.46h28.32c-2.34 6-4.38 12.73-4.38 24.46-.01 27.58 11.23 27.58 11.23 55.13zM580.39 535.14c0 26.54-10.42 26.7-11.17 51.33a3 3 0 0 1-3 2.9h-21.6a3 3 0 0 1-3-3.13c.82-24.09 11.17-20.72 11.17-47.18 0-27.54-31.81-37.95-31.81-65.5v-5.34h-9.47a26.76 26.76 0 0 0-2.36 11c0 27.55 11.22 27.55 11.22 55.09 0 26.55-10.43 27.51-11.18 52.21a3 3 0 0 1-3 2.89h-22.34a3 3 0 0 1-3-3.14c.82-24.46 11.18-25.5 11.18-52 0-27.54-11.23-27.54-11.23-55.09 0-11.74 2-18.47 4.38-24.47h84.51a39 39 0 0 1-21.16 12.69v6.15c-.01 18.55 31.86 34.04 31.86 61.59zM697.35 535.31c0 23.09-17 54.11-39.56 54.11h-67.36a3 3 0 0 1-3-3.13c.82-24.46 11.16-25.51 11.16-52 0-27.55-11.22-27.55-11.22-55.1 0-11.77 2-18.5 4.4-24.51h29.46c-2.35 6-4.4 12.74-4.4 24.51 0 27.55 11.22 27.55 11.22 55.1 0 11.52-1.95 18.2-4.24 24.12l20 .17c14.86 0 27.27-7.74 27.27-26.94 0-22.59-12-30.29-12-52.88 0-12.29 2.73-17.89 5.21-24.08h26c-2.48 6.19-5.21 11.79-5.21 24.08.07 22.89 12.27 33.89 12.27 56.55z" />
      </svg>
    </div>
  );
};

HeroImage.displayName = displayName;

export default HeroImage;
