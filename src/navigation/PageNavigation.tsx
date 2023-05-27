import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, faArrowLeft, faBell, faClockRotateLeft, faComments, faFileLines } from "@fortawesome/free-solid-svg-icons"
import "./PageNavigationStyle.css"

type Props = {
  selected: number;
  icons: IconDefinition[];
  onPositionClick: (postion: number) => void;
}

type NavigationOptionProps = {
  isSelected: boolean;
  icon: IconDefinition;
  onClick: () => void;
}

const NavigationOption = ({ icon, isSelected, onClick }: NavigationOptionProps) => {
  return (
    <div className={"navigation-option" + (isSelected ? " navigation-option-selected" : "")} onClick={onClick} >
        <FontAwesomeIcon icon={icon} size="lg" />
    </div>
  )
}

export default function PageNavigation({ selected, icons, onPositionClick }: Props) {
  return (
      <div className="problem-navigation">
          {icons.map((icon, index) => <NavigationOption 
              key={icon.iconName} 
              icon={icon} 
              isSelected={index === selected}
              onClick={() => onPositionClick(index)}/>)}
      </div>
    )
}