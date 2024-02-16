import { Times } from "@/icons";
import { OrganizationSwitcher, SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center h-20 gap-4 px-4 border-b border-black border-solid sm:px-8 border-opacity-20">
      <Link href="/" className="flex items-center h-20 gap-2 sm:gap-4">
        <Image
          src=""
          alt=""
          width={102}
          height={32}
          priority
        />
        <Times />
        <Image
          src=""
          alt=""
          width={90}
          height={18}
          priority
        />
      </Link>
      <div className="grow" />
      <div className="text-center">
        <p className="text-sm text-purple-500">
          Update! Please expect frequent game site outages over the weekend! We will be upgrading our site so that our websites will be faster and more efficient! We will also be making some of the following updates: Removing Ultimate v2. Adding up to 30 new games to Ultimate v1.! Thanks for your patience!
        </p>
      </div>
      <SignedIn>
        <div className="hidden sm:block">
          <OrganizationSwitcher afterCreateOrganizationUrl="/dashboard" />
        </div>
        <div className="block sm:hidden">
          <OrganizationSwitcher
            afterCreateOrganizationUrl="/dashboard"
            appearance={{
              elements: {
                organizationSwitcherTriggerIcon: `hidden`,
                organizationPreviewTextContainer: `hidden`,
                organizationSwitcherTrigger: `pr-0`,
              },
            }}
          />
        </div>
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              userButtonTrigger: {
                "&:focus": {
                  boxShadow: "#7857FF 0px 0px 0px 3px",
                },
              },
            },
          }}
        />
      </SignedIn>
    </header>
  );
}
