export default {
    fonts: {
      body: 'system-ui, sans-serif',
      heading: '"Avenir Next", sans-serif',
      monospace: 'Menlo, monospace',
    },
    colors: {
      text: '#000',
      background: '#fff',
      primary: '#33e',
      secondary: '#33e',
      modes: {
        dark: {
          text: '#fff',
          background: '#000',
          primary: '#0cf',
        },
        light: {
          text: '#4a4a4a',
          background: '#FFFF',
          primary: '#0cf',
        }
      },
      styles: {
        h1: {
          fontSize: [4, 5, 6],
          color: 'primary',
        },
        a: {
          color: 'primary',
          textDecoration: 'none',
          ':hover': {
            color: 'secondary',
            textDecoration: 'underline',
          },
        },
      }
    },
  }