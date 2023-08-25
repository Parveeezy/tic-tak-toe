import {SYMBOL_X, SYMBOL_O} from './constants.js'
import styles from './game.module.css'

export function GameSymbol({ symbol }) {
    const getSymbolClassName = (symbol) => {
      if (symbol === SYMBOL_O) return styles["symbol--o"];
      if (symbol === SYMBOL_X) return styles["symbol--x"];
      return "";
    };
    return (
      <span className={`${styles['symbol']} ${getSymbolClassName(symbol)}`}>{symbol}</span>
    );
  }
  