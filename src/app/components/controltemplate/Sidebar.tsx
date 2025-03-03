import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faLink,
  faAlignLeft,
  faAlignCenter,
  faAlignRight,
  faBold,
  faItalic,
  faUnderline,
  faSquare,
  faCircle,
  faTriangleExclamation,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import { TextVector } from "@/app/assets/icons";

import ColorPicker from "./ColorPicker";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const BreakLine = () => {
  return <div className="border border-lightGrayShade2 my-4"></div>;
};

interface FontAwesomeProps {
  icon: IconProp;
}

const FontAwesome = ({ icon }: FontAwesomeProps) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      className="text-gray-600 text-xl cursor-pointer bg-transparent w-36 h-8"
    />
  );
};

const Sidebar = () => {
  return (
    <aside className="w-64 p-4 bg-lightGray">
      {/* Text Section */}
      <div className="flex flex-col bg-lightGrayShade2 p-2 rounded-lg mb-4 mx-8">
        <div className="flex items-center justify-around bg-lightGrayShade2 rounded-lg">
          <Image src={TextVector} alt="text vector" className="w-4 h-4" />
          <h3 className="text-lg font-normal">Text</h3>
        </div>
      </div>

      <div>
        <div className="flex justify-between mb-2 gap-2">
          <select className="p-1 border rounded-md w-1/2 bg-transparent text-charcoalGray">
            <option>Font</option>
            <option>Arial</option>
            <option>Roboto</option>
          </select>
          <select className="p-1 border rounded-md w-1/2 bg-transparent text-charcoalGray">
            <option>Size</option>
            <option>12</option>
            <option>14</option>
            <option>16</option>
          </select>
        </div>
        <div className="flex justify-between mb-2 gap-2">
          <select className="p-1 border rounded-md w-1/2 bg-transparent text-charcoalGray">
            <option>Regular</option>
            <option>Bold</option>
            <option>Light</option>
          </select>
          <ColorPicker defaultColor="#000000" />
        </div>
        <div className="flex justify-between mt-2 space-x-2">
          <FontAwesome icon={faAlignLeft} />
          <FontAwesome icon={faAlignCenter} />
          <FontAwesome icon={faAlignRight} />

          <span className="border border-lightGrayShade2 px-2 py-1 rounded text-sm">
            AG
          </span>
          <span className="border border-lightGrayShade2 px-2 py-1 rounded text-sm">
            Ag
          </span>
          <FontAwesome icon={faBold} />
          <FontAwesome icon={faItalic} />
          <FontAwesome icon={faUnderline} />
        </div>
      </div>

      <BreakLine />

      <div className="flex items-center justify-around mb-4 bg-lightGrayShade2 p-2 rounded-lg mx-8">
        <FontAwesomeIcon icon={faImage} className="w-5 h-5 text-charcoalGray" />
        <h3 className="text-lg font-normal">Photo</h3>
      </div>
      <div className="flex justify-between mb-2 gap-2 text-charcoalGray">
        <input
          type="text"
          placeholder="H"
          className="p-1 border rounded-md w-1/2 text-start bg-transparent"
        />
        <input
          type="text"
          placeholder="W"
          className="p-1 border rounded-md w-1/2 text-start bg-transparent"
        />
      </div>
      <div className="flex items-center gap-2">
        <input type="checkbox" id="background" className="w-4 h-4" />
        <label htmlFor="background" className="text-sm">
          Use as a background
        </label>
      </div>

      <BreakLine />

      {/* Link Section */}
      <div className="flex items-center justify-around mb-4 bg-lightGrayShade2 p-2 rounded-lg mx-8">
        <FontAwesomeIcon icon={faLink} className="w-5 h-5 text-charcoalGray" />
        <h3 className="text-lg font-normal">Link</h3>
      </div>

      <input
        type="text"
        placeholder="Add your link here..."
        className="p-1 border rounded-md w-full mb-2"
      />

      <div className="flex items-center justify-between gap-2">
        <h4 className="text-base font-normal">Color</h4>
        <ColorPicker defaultColor="#399BD0" />
      </div>

      <BreakLine />

      {/* Shape Selection */}
      <div className="flex justify-between mb-2 gap-2">
        <FontAwesome icon={faSquare} />
        <FontAwesome icon={faCircle} />
        <FontAwesome icon={faTriangleExclamation} />
        <FontAwesome icon={faStar} />
        <div className="text-gray-600 text-4xl cursor-pointer bg-transparent w-36 h-8">
          /
        </div>
      </div>

      <div className="flex justify-between mb-2 gap-2 text-charcoalGray">
        <input
          type="text"
          placeholder="H"
          className="p-1 border rounded-md w-1/2 text-start bg-transparent"
        />
        <input
          type="text"
          placeholder="W"
          className="p-1 border rounded-md w-1/2 text-start bg-transparent"
        />
      </div>

      {/* Fill and Stroke Colors */}
      <div className="flex justify-between mb-2 gap-2 items-center">
        <span className="text-sm">Fill</span>
        <ColorPicker defaultColor="#9A9A9A" />
      </div>
      <div className="flex justify-between mb-2 gap-2 items-center">
        <span className="text-sm">Stroke</span>
        <ColorPicker defaultColor="#000000" />
      </div>

      <BreakLine />

      {/* Background, Buttons, and Navbar Colors */}
      <div className="flex justify-between mb-2 gap-2 items-center">
        <span className="text-sm">Background color</span>
        <ColorPicker defaultColor="#FFFFFF"/>
      </div>
      <div className="flex justify-between mb-2 gap-2 items-center">
        <span className="text-sm">Buttons color</span>
        <ColorPicker defaultColor="#27445D" />
      </div>
      <div className="flex justify-between mb-2 gap-2 items-center">
        <span className="text-sm">Navbar color</span>
        <ColorPicker defaultColor="#FAA5CA" />
      </div>

      <BreakLine />

      {/* Delete Button */}
      <button className="text-red-700 w-full text-center font-bold">
        Delete
      </button>
    </aside>
  );
};

export default Sidebar;
