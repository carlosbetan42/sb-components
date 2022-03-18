import "./myLabel.css";

export interface Props {
  /**
   * Este es el mensaje a mostrar en la etiqueta
   */
  label?: string;
  /**
   * Este es el tamaño de la etiqueta
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * Si quiere todo capitalizado
   */
  allCaps?: boolean;
  /**
   * Colores básicos del botón
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * Color personalizado de la fuente
   */
  fontColor?: string;
}

const MyLabel = ({ label = "No Label", size = "normal", allCaps = false, color = "primary", fontColor = "" }: Props) => {
  return (
    <span
      style={{
        color: fontColor,
      }}
      className={`label ${size} text-${color}`}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

export default MyLabel;
