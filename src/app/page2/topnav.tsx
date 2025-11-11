import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../../components/ui/navigation-menu";

export default function Topnav() {
  return (
    <div className="flex justify-end bg-gray-800 p-4 text-white">
      <NavigationMenu>
        <NavigationMenuList className="gap-2">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="https://www.google.com">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem className="pl-20">
            <NavigationMenuLink asChild>
              <Link href="https://www.google.com">About</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem className="pl-20">
            <NavigationMenuLink asChild>
              <Link href="https://www.google.com">Contact</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
