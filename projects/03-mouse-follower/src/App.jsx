import { useEffect, useState } from 'react';

const Followmouse = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // pointer moive
  useEffect(() => {
    console.log('useEffect');
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      console.log('handleMove', { clientX, clientY });
      setPosition({ x: clientX, y: clientY });
    };
    if (enabled) {
      window.addEventListener('pointermove', handleMove);
    }

    // Cleanup:
    // --> cuando el componente se desmonta
    // --> cuando cambian las dependencias, antes de ejecutar el efecto de nuevo
    return () => {
      window.removeEventListener('pointermove', handleMove);
      console.log('cleanup');
    };
  }, [enabled]);

  //useEffect behavior
  //dos parámetros
  //1. callback: es el efecto o funciona que se va a ejecutar
  //2. dependencias: es una arreglo de elementos
  // [] --> solo se ejecuta una vez cuando se monta el componente
  // [enabled] --> se ejecuta cada vez que enabled cambia y cuando se monta el componente
  // undefined --> se ejecuta cada vez que se renderiza el componente
  /*el return del useEffect tiene como función limpiar el efecto del hook
    es decir que cuando cambiar la dependencia, se ejecuta el efecto de nuevo pero antes se limpia el efecto anterior*/

  // change body classname
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled);

    return () => {
      document.body.classList.remove('no-cursor');
    };
  }, [enabled]);

  return (
    <>
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid #fff',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>
  );
};

function App() {
  return (
    <main>
      <Followmouse />
    </main>
  );
}

export default App;
