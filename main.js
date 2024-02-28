import { apoio } from "./src/Modulos/EventoTeclado";
import { gerarPalavra } from "./src/Modulos/Palavra";
import { clickComeco } from "./src/Modulos/escutadores";

const gerar = gerarPalavra()
export const palavra = gerar.palavra;
export const dica = gerar.dica;

clickComeco()
apoio()
