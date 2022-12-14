import { useState } from "react";
import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import { getLanguageFlag } from "../../helpers/getLanguageFlag";
import { useRouter } from "next/router";
import { getLanguageName } from "../../helpers/getLanguageNames";
import useTranslation from 'next-translate/useTranslation'
import Link from "next/link";

'use client';

const LanguageButton = () => {
  const { t } = useTranslation()
  const [isClicked] = useState(true);
  const router = useRouter();
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className=" bg-transparent w-20 h-7 rounded-full mx-auto object-center flex items-center justify-center opacity-60 hover:opacity-100 transition duration-200 z-9990"
          aria-label="Customise options"
        >
          <img
            className="w-7 h-7 rounded-full mx-auto object-cover"
            src={getLanguageFlag(router.locale)}
            alt={router.locale}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`${isClicked ? "rotate-90" : ""} w-6 h-6 `}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          <DropdownMenu.Separator className="DropdownMenuSeparator" />
            {router.locales?.map((locale, i) => (
                <DropdownMenu.CheckboxItem
                key={i}
                className="DropdownMenuCheckboxItem"
                checked={locale === router.locale}
                >
                <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                <CheckIcon />
                </DropdownMenu.ItemIndicator>
                <Link href="/" locale={locale}>
                {getLanguageName(locale,t)}
                </Link>
                </DropdownMenu.CheckboxItem>
            ))}
          <DropdownMenu.Separator className="DropdownMenuSeparator" />

          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default LanguageButton;
