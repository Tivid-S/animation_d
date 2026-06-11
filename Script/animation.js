/* Animación de texto */
import { animate, stagger, splitText } from 'https://esm.sh/animejs';
import { createTimeline } from 'https://esm.sh/animejs';


/* Animación de texto */
export function animarTexto(selector) {
  const { chars } = splitText(selector, {
    words: false,
    chars: true
  });

  animate(chars, {
    // Property keyframes
    y: [
      { to: '-1rem', ease: 'outExpo', duration: 700 },
      { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
    ],
    // Property specific parameters
    rotate: {
      from: '-1turn',
      delay: 0
    },
    delay: stagger(50),
    ease: 'inOutCirc',
    loopDelay: 1000,
    loop: true
  });
}


export function animateTextPop(target) {
  const elements = document.querySelectorAll(target);

  elements.forEach(el => {
    const { words, chars } = splitText(el, {
      words: { wrap: 'clip' },
      chars: true,
    });

    createTimeline({
      loop: true,
      defaults: { ease: 'inOut(3)', duration: 650 },
    })
      .add(words, {
        y: [$el => +$el.dataset.line % 2 ? '100%' : '-100%', '0%'],
      }, stagger(125))
      .add(chars, {
        y: $el => +$el.dataset.line % 2 ? '100%' : '-100%',
      }, stagger(10, { from: 'random' }))
      .init();
  });
}

export async function scrambleTexto(selector) {
  const { animate, scrambleText } = await import('https://esm.sh/animejs');
  const elements = document.querySelectorAll(selector);

  elements.forEach(el => {
    animate(el, {
      innerHTML: scrambleText(),
      loop: true,
      loopDelay: 1000,
    });
  });
}






