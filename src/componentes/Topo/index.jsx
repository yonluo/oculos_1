import estilos from './Topo.module.css';

export default function Topo() {
  return (
    <header className={estilos.topo}>
      <div className={estilos.logo}>
        <img src="/logo.png" alt="Óticas Vida" />
        <span>Óticas Vida</span>
      </div>
      <nav className={estilos.nav}>
        <a href="#produtos">PRODUTOS</a>
        <a href="#sobre">SOBRE</a>
        <a href="#contato">CONTATO</a>
      </nav>
    </header>
  );
}
