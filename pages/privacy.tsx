import React from "react";
import Article from "../components/Article";
import { useTranslation } from "react-i18next";
import ReactHtmlParser from "react-html-parser";
import Page from "../layout/page";
import Head from "next/head";

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <Page>
      <Head>
        <title>Privacy — Devhaus Leipzig</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width; initial-scale=1; maximum-scale=1"
        />
        <meta
          name="author"
          content="Devhaus Leizpig — A learning community for tech professionals"
        />
      </Head>
      <div className="mb-6 grid grid-cols-3 gap-4">
        <div className="col-span-1 col-start-1">
          <h2 className="font-serif text-5xl">{t("privacy:header1")}</h2>
        </div>

        <div className="col-span-2 col-start-2">
          <p>{t("privacy:section1")}</p>
          <h2>{t("privacy:header2")}</h2>
          <p>{t("privacy:section2")}</p>
          <h2>{t("privacy:header3")}</h2>
          <p>{t("privacy:section3")}</p>
          <ul>
            <li>{t("privacy:section3bullet1")}</li>
            <li>{t("privacy:section3bullet2")}</li>
          </ul>
          <h2>{t("privacy:header4")}</h2>
          <p>{t("privacy:section4part1")}</p>
          <ul>
            <li>{t("privacy:section4part1bullet1")}</li>
            <li>{t("privacy:section4part1bullet2")}</li>
            <li>{t("privacy:section4part1bullet3")}</li>
            <li>{t("privacy:section4part1bullet4")}</li>
            <li>{t("privacy:section4part1bullet5")}</li>
            <li>{t("privacy:section4part1bullet6")}</li>
          </ul>
          <p>{t("privacy:section4part2")}</p>
          <p>{t("privacy:section4part3")}</p>
          <h2>{t("privacy:header5")}</h2>
          <p>{t("privacy:section5part1")}</p>
          <p>{t("privacy:section5part2")}</p>
          <p>{t("privacy:section5part3")}</p>
          <h2>{t("privacy:header6")}</h2>
          <p>{t("privacy:section6")}</p>
          <h2>{t("privacy:header7")}</h2>
          <p>{t("privacy:section7")}</p>
          <h2>{t("privacy:header8")}</h2>
          <p>{t("privacy:section8")}</p>
          <h2>{t("privacy:header9")}</h2>
          <p>{t("privacy:section9")}</p>
          <h2>{t("privacy:header10")}</h2>
          <p>{t("privacy:section10part1")}</p>
          <ul>
            <li>{t("privacy:section10part1bullet1")}</li>
            <li>{t("privacy:section10part1bullet2")}</li>
            <li>{t("privacy:section10part1bullet3")}</li>
            <li>{t("privacy:section10part1bullet4")}</li>
            <li>{t("privacy:section10part1bullet5")}</li>
            <li>{t("privacy:section10part1bullet6")}</li>
            <li>{t("privacy:section10part1bullet7")}</li>
          </ul>
          <p>{t("privacy:section10part2")}</p>
          <h2>{t("privacy:header11")}</h2>
          <p>{t("privacy:section11")}</p>
          <h2>{t("privacy:header12")}</h2>
          <p>{t("privacy:section12")}</p>
          <h2>{t("privacy:header13")}</h2>
          <p>{t("privacy:section13")}</p>
          <h2>{t("privacy:header14")}</h2>
          <p>{t("privacy:section14part1")}</p>
          <p>
            {ReactHtmlParser(
              t("privacy:section14part2").replace(
                "#",
                `<a
              target="_blank"
              rel="noreferrer"
              href="https://www.internetcookies.org"
            >
              internetcookies.org
            </a>`
              )
            )}
          </p>
          <h2>{t("privacy:header15")}</h2>
          <p>{t("privacy:section15")}</p>
          <h2>{t("privacy:header16")}</h2>
          <p>{t("privacy:section16")}</p>
          <h2>{t("privacy:header17")}</h2>
          <p>{t("privacy:section17part1")}</p>
          <p>{t("privacy:section17part2")}</p>
          <h2>{t("privacy:header18")}</h2>
          <p>{t("privacy:section18")}</p>
          <h2>{t("privacy:header19")}</h2>
          <p>{t("privacy:section19")}</p>
          <h2>{t("privacy:header20")}</h2>
          <p>{t("privacy:section20")}</p>
          <h2>{t("privacy:header21")}</h2>
          <p>{t("privacy:section21")}</p>
          <h2>{t("privacy:header22")}</h2>
          <p>{t("privacy:section22")}</p>
          <h2>{t("privacy:header23")}</h2>
          <p>{t("privacy:section23").replace("#", "info@devhausleipzig.de")}</p>
          <p> {t("privacy:section24").replace("#", "February 10, 2021")}</p>
        </div>
      </div>
    </Page>
  );
}
