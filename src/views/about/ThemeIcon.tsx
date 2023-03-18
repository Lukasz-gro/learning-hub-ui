import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Theme } from "./About";

type Props = {
    currentTheme: Theme
    setTheme: (nextTheme: Theme) => void;
}

export function ThemeIcon(props:Props){
    return (
      <FontAwesomeIcon 
        onClick={() => props.currentTheme === Theme.DARK ? props.setTheme(Theme.LIGHT) : props.setTheme(Theme.DARK)} 
        icon={props.currentTheme === Theme.DARK ? faSun : faMoon} />
    )
  }