/** @type {import('tailwindcss').Config} */
const spacing = () => {
  let spacArr = {};
  for (let i = 0; i <= 375; i++) {
    spacArr[2 * i] = 2 * i + 'px';
  }
  spacArr = {
    ...spacArr,
    '100vh': '100vh',
    main: '1220px',
    '40b': '-40px',
    '100b': '-100px',
  };
  return spacArr;
};
export default {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      md: '768px',
    },
    fontSize: {
      8: '8px',
      10: '10px',
      12: '12px',
      13: '13px',
      14: '14px',
      15: '15px',
      16: '16px',
      18: '18px',
      20: '20px',
      22: '22px',
      24: '24px',
      26: '26px',
      28: '28px',
      30: '30px',
      32: '32px',
      36: '36px',
      40: '40px',
      64: '64px',
    },
    fontWeight: {
      // font-100
      100: 100,
      200: 200,
      300: 300,
      normal: 400,
      400: 400,
      500: 500,
      600: 600,
      700: 700,
      800: 800,
      900: 900,
    },
    lineHeight: {
      // leading-40
      40: '40px',
      1: 1,
      1.3: 1.3,
      1.5: 1.5,
      1.8: 1.8,
      2: 2,
    },
    borderWidth: {
      // border-0
      DEFAULT: '1px',
      0: '0',
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
      20: '20px',
    },
    borderRadius: {
      // rounded-4
      0: '0px',
      4: '4px',
      6: '6px',
      8: '8px',
      12: '12px',
      16: '16px',
      20: '20px',
      24: '24px',
      28: '28px',
      32: '32px',
      40: '40px',
      46: '46px',
      full: '1000px',
    },
    backgroundSize: {
      full: '100% 100%',
    },
    spacing: spacing(),
    extend: {
      colors: {
        main: '#ff4f4f',
        f0f0f0: '#f0f0f0',
        '1c1c1e': '#1c1c1e',
        '000': '#000',
        141414: '#141414',
        252525: '#252525',
        '444-8': 'rgba(4,4,4,.8)',
        fff: '#fff',
        'fff-9': 'rgba(255, 255, 255, 0.9)',
        '000-9': 'rgba(0,0,0,.9)',
        'fff-8': 'rgba(255, 255, 255, 0.8)',
        '000-8': 'rgba(0,0,0,.8)',
        'fff-7': 'rgba(255, 255, 255, 0.7)',
        '000-7': 'rgba(0,0,0,.7)',
        'fff-6': 'rgba(255, 255, 255, 0.6)',
        '000-6': 'rgba(0,0,0,.6)',
        'fff-5': 'rgba(255, 255, 255, 0.5)',
        '000-5': 'rgba(0,0,0,.5)',
        'fff-4': 'rgba(255, 255, 255, 0.4)',
        '000-4': 'rgba(0,0,0,.4)',
        'fff-2': 'rgba(255, 255, 255, 0.2)',
        '000-2': 'rgba(0,0,0,.2)',
        'fff-16': 'rgba(255, 255, 255, 0.16)',
        '000-16': 'rgba(0,0,0,.16)',
        'fff-12': 'rgba(255, 255, 255, 0.12)',
        '000-12': 'rgba(0,0,0,.12)',
        'fff-1': 'rgba(255, 255, 255, 0.1)',
        '000-1': 'rgba(0,0,0,.1)',
        'fff-08': 'rgba(255, 255, 255, 0.08)',
        '000-08': 'rgba(0,0,0,.08)',
        'fff-06': 'rgba(255, 255, 255, 0.06)',
        '000-06': 'rgba(0,0,0,.06)',
        'fff-05': 'rgba(255, 255, 255, 0.05)',
        '000-05': 'rgba(0,0,0,.05)',
        'fff-04': 'rgba(255, 255, 255, 0.04)',
        '000-04': 'rgba(0,0,0,.04)',
        'fff-0': 'rgba(255, 255, 255, 0)',
        '000-0': 'rgba(0,0,0,0)',
        linear: 'linear-gradient(135deg, #FE5351 0%, #FE345B 51%, #FE3964 100%)',
        ddd: '#ddd',
        ccc: '#ccc',
        secondary: {
          '000': 'linear-gradient(red, yellow, blue)',
          linear: 'linear-gradient(135deg, #FE5351 0%, #FE345B 51%, #FE3964 100%)',
        },
      },
      lineClamp: {
        10: '10',
      },
      transitionDuration: {
        400: '400ms',
      },
      boxShadow: {
        'bottom-blue-500':
          '0 0 0 1px rgba(255, 255, 255, 0.5), 0 0 0 2px rgba(16, 128, 255, 0.5), 0 0 2px 6px rgba(16, 128, 255, 0.5)',
      },
    },
  },

  plugins: [],
};
