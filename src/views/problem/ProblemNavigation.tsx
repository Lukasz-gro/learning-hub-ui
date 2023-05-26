import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBell, faClockRotateLeft, faComments, faFileLines } from "@fortawesome/free-solid-svg-icons"
import {  } from "@fortawesome/free-solid-svg-icons"

export default function ProblemNavigation() {
    return (
        <div className="problem-navigation">
            <div className="navigation-option">
                <FontAwesomeIcon icon={faFileLines} size="lg" />
            </div>
            <div className="navigation-option">
                <FontAwesomeIcon icon={faBell} size="lg"/>
            </div>
            <div className="navigation-option">
                <FontAwesomeIcon  icon={faComments}  size="lg" />
            </div>
            <div className="navigation-option">
                <FontAwesomeIcon icon={faClockRotateLeft} size="lg" />
            </div>
            <div className="navigation-option">
                <FontAwesomeIcon icon={faArrowLeft} size="lg" />
            </div>
        </div>
      )
}