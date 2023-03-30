import { FC } from "react";
import { IconMessageChatbot, IconMapPin, IconUser } from "@tabler/icons-react";

interface MenuItem {
  icon: any;
  label: string;
}

const menuItems: MenuItem[] = [
  {
    icon: <IconMessageChatbot size={24} />,
    label: "Chat",
  },
  {
    icon: <IconMapPin size={24} />,
    label: "Trips",
  },
  {
    icon: <IconUser size={24} />,
    label: "Account",
  },
];

export const Footer: FC = () => {
  return (
    <div className="flex h-[30px] sm:h-[50px] border-t border-neutral-300 py-2 px-8 items-center sm:justify-between justify-center">
      <div className="hidden sm:flex gap-4">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="hover:cursor-pointer flex flex-col items-center justify-center text-neutral-400 focus:outline-none focus:text-blue-500"
          >
            {item.icon}
            <span className="text-xs">{item.label}</span>
          </button>
        ))}
      </div>
      <div className="sm:hidden flex gap-8">
        <button className="hover:cursor-pointer">
          <IconMessageChatbot size={24} />
        </button>
        <button className="hover:cursor-pointer">
          <IconMapPin size={24} />
        </button>
        <button className="hover:cursor-pointer">
          <IconUser size={24} />
        </button>
      </div>
    </div>
  );
};
