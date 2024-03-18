import React, { useState, useEffect } from "react";

export const Icon = ({ iconName }) => {
  const [iconSrc, setIconSrc] = useState(null);

  useEffect(() => {
    // Se importa dinámicamente el archivo SVG correspondiente en función del nombre del icono
    import(`../../assets/Icons/${iconName}.svg`)
      .then((module) => {
        setIconSrc(module.default);
      })
      .catch((error) => {
        console.error(`Error importing icon: ${error}`);
      });
  }, [iconName]);

  // Retorna el componente de icono importado dinámicamente
  return iconSrc && <img src={iconSrc} alt={iconName} style={{ width: '24px', height: '24px'}} />;
};

