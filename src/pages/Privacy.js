import React from "react";
import Article from "components/Article";

export default function Privacy() {
  const content = (
    <div>
      <p>
        Die Nutzung unserer Webseite ist in der Regel ohne Angabe
        personenbezogener Daten möglich. Soweit auf unseren Seiten
        personenbezogene Daten (beispielsweise Name, Anschrift oder eMail
        Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf
        freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
        Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass
        die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail)
        Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor
        dem Zugriff durch Dritte ist nicht möglich. Der Nutzung von im Rahmen
        der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur
        Übersendung von nicht ausdrücklich angeforderter Werbung und
        Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die
        Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im
        Falle der unverlangten Zusendung von Werbeinformationen, etwa durch
        Spam-Mails, vor.
      </p>
      <p>
        Diese Website benutzt Google Analytics, einen Webanalysedienst der
        Google Inc. (''Google''). Google Analytics verwendet sog. ''Cookies'',
        Textdateien, die auf Ihrem Computer gespeichert werden und die eine
        Analyse der Benutzung der Website durch Sie ermöglicht. Die durch den
        Cookie erzeugten Informationen über Ihre Benutzung dieser Website
        (einschließlich Ihrer IP-Adresse) wird an einen Server von Google in den
        USA übertragen und dort gespeichert. Google wird diese Informationen
        benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die
        Websiteaktivitäten für die Websitebetreiber zusammenzustellen und um
        weitere mit der Websitenutzung und der Internetnutzung verbundene
        Dienstleistungen zu erbringen. Auch wird Google diese Informationen
        gegebenenfalls an Dritte übertragen, sofern dies gesetzlich
        vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google
        verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen
        Daten der Google in Verbindung bringen. Sie können die Installation der
        Cookies durch eine entsprechende Einstellung Ihrer Browser Software
        verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall
        gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich
        nutzen können. Durch die Nutzung dieser Website erklären Sie sich mit
        der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor
        beschriebenen Art und Weise und zu dem zuvor benannten Zweck
        einverstanden.
      </p>
      <p>
        Diese Website benutzt Google Adsense, einen Webanzeigendienst der Google
        Inc., USA (''Google''). Google Adsense verwendet sog. ''Cookies''
        (Textdateien), die auf Ihrem Computer gespeichert werden und die eine
        Analyse der Benutzung der Website durch Sie ermöglicht. Google Adsense
        verwendet auch sog. ''Web Beacons'' (kleine unsichtbare Grafiken) zur
        Sammlung von Informationen. Durch die Verwendung des Web Beacons können
        einfache Aktionen wie der Besucherverkehr auf der Webseite aufgezeichnet
        und gesammelt werden. Die durch den Cookie und/oder Web Beacon erzeugten
        Informationen über Ihre Benutzung dieser Website (einschließlich Ihrer
        IP-Adresse) werden an einen Server von Google in den USA übertragen und
        dort gespeichert. Google wird diese Informationen benutzen, um Ihre
        Nutzung der Website im Hinblick auf die Anzeigen auszuwerten, um Reports
        über die Websiteaktivitäten und Anzeigen für die Websitebetreiber
        zusammenzustellen und um weitere mit der Websitenutzung und der
        Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird
        Google diese Informationen gegebenenfalls an Dritte übertragen, sofern
        dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag
        von Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit
        anderen Daten der Google in Verbindung bringen. Das Speichern von
        Cookies auf Ihrer Festplatte und die Anzeige von Web Beacons können Sie
        verhindern, indem Sie in Ihren Browser-Einstellungen ''keine Cookies
        akzeptieren'' wählen (Im MS Internet-Explorer unter ''Extras &gt;
        Internetoptionen &gt; Datenschutz &gt; Einstellung''; im Firefox unter
        ''Extras &gt; Einstellungen &gt; Datenschutz &gt; Cookies''); wir weisen
        Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht
        sämtliche Funktionen dieser Website voll umfänglich nutzen können. Durch
        die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der
        über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und
        Weise und zu dem zuvor benannten Zweck einverstanden.
      </p>
    </div>
  );
  return <Article title="Privacy Policy" content={content} />;
}
