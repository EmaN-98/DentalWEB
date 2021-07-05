import './Servicii-tarife.css';
import {Table} from 'react-bootstrap';
import {useTranslation} from "react-i18next";
import i18next from "i18next";

export default function ServiciiTarife() {

    const { t } = useTranslation();

    function handleClick(lang) {
        i18next.changeLanguage(lang)
    }

    return (<div className="parent">

            <div className="titl">
                <b>{t('Title.7')}</b>
            </div>
            <div className="tabel">
                <Table striped bordered hover size="sm">
                    <thead>
                    <tr>
                        <th></th>
                        <th>{t('Table.1')}</th>
                        <th>Cost (lei)</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>{t('Table.2')}</td>
                        <td>70</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>{t('Table.3')}</td>
                        <td>70</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>{t('Table.4')}</td>
                        <td>50</td>
                    </tr>
                    </tbody>

                    <thead>
                    <tr>
                        <th></th>
                        <th>{t('Table.5')}</th>
                        <th>Cost (lei)</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>{t('Table.6')}</td>
                        <td>220</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>{t('Table.7')}</td>
                        <td>70</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>{t('Table.8')}</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>{t('Table.9')}</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>{t('Table.10')}</td>
                        <td>120/dinte</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>{t('Table.11')}</td>
                        <td>100/arcada</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>{t('Table.12')}</td>
                        <td>120</td>
                    </tr>
                    </tbody>

                    <thead>
                    <tr>
                        <th></th>
                        <th>{t('Table.13')}</th>
                        <th>Cost (lei)</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>{t('Table.14')}</td>
                        <td>800</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>{t('Table.15')}</td>
                        <td>200/arcada</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Coroana integral ceramica</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Fatetare compozit</td>
                        <td>300</td>
                    </tr>
                    </tbody>

                    <thead>
                    <tr>
                        <th></th>
                        <th>Ortodontie</th>
                        <th>Cost (lei)</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Aparat ortodontic mobil</td>
                        <td>700/arcada</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Control si activare aparat ortodontic mobil</td>
                        <td>70/arcada</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Disjunctor</td>
                        <td>900</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Aparat fix metalic</td>
                        <td>2400/arcada</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Aparat fix safir</td>
                        <td>3400/arcada</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Control si activare aparat ortodontic mobil</td>
                        <td>90/arcada</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Recolare bracket</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Inlocuire bracket metalic</td>
                        <td>80</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Inlocuire bracket safir</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Aparat de contentie</td>
                        <td>500</td>
                    </tr>
                    </tbody>

                    <thead>
                    <tr>
                        <th></th>
                        <th>Odontoterapie</th>
                        <th>Cost (lei)</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Obturatie compozit</td>
                        <td>150-250/dinte</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Obturatie de baz SDR</td>
                        <td>50/dinte</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Obturatie glassionomer Fuji IX, Triage, II LC</td>
                        <td>200/dinte</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Obturatie provizorie</td>
                        <td>75/dinte</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Injectare compozit</td>
                        <td>300</td>
                    </tr>
                    </tbody>

                    <thead>
                    <tr>
                        <th></th>
                        <th>Chirurgie orala</th>
                        <th>Cost (lei)</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Extractie incisiv/canin</td>
                        <td>140/dinte</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Extractie premolar</td>
                        <td>180/dinte</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Extractie molar</td>
                        <td>230/dinte</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Extractie molar de minte</td>
                        <td>280/dinte</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Tratament alveolita</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Aplicare placute ortodontice</td>
                        <td>750</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Gingivectomie/Gingivoplastie</td>
                        <td>240</td>
                    </tr>
                    </tbody>

                    <thead>
                    <tr>
                        <th></th>
                        <th>Implantologie</th>
                        <th>Cost (lei)</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Miniimplant Straumann</td>
                        <td>1100</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Implant dentar Megagen</td>
                        <td>500/dinte</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Aditie osoasa 0.25g</td>
                        <td>500</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Aplicare membrana regenerare</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Coroana metalo-ceramica pe implant</td>
                        <td>900</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Coroana zirconiu-ceramica pe implant</td>
                        <td>1200</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Descoperire implant/bont vindecare</td>
                        <td>270</td>
                    </tr>
                    </tbody>

                    <thead>
                    <tr>
                        <th></th>
                        <th>Protetica</th>
                        <th>Cost (lei)</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Coroana metalo-ceramica total fizionomica</td>
                        <td>600</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Coroana metalo-ceramica semifizionomica</td>
                            <td>500</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Coroana zirconiu-ceramica</td>
                        <td>1200/arcada</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Coroana integral ceramica</td>
                            <td>1200/arcada</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Coroana metalica</td>
                        <td>300</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Reconstructie bont</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Pivot fibra de sticla si reconstructie bont</td>
                        <td>250</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Coroana provizorie scutan</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Proteza partiala elastica</td>
                        <td>2000</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Proteza partiala acrilica</td>
                        <td>1200</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Proteza totala acrilica</td>
                            <td>1500</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>Proteza totala pe magneti</td>
                        <td>2800</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>Proteza totala dinti compozit</td>
                        <td>1700</td>
                    </tr>
                    <tr>
                        <td>13</td>
                        <td>Rebazare proteza</td>
                        <td>250</td>
                    </tr>
                    <tr>
                        <td>14</td>
                        <td>Gutiera bruxism</td>
                        <td>200</td>
                    </tr>
                    </tbody>

                    <thead>
                    <tr>
                        <th></th>
                        <th>Edodontie</th>
                        <th>Cost (lei)</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Tratament endodontic  incisiv, canin(  aplicare diga, indepartare nerv, tratament rotativ si obturatie de canal cu con calibrat)</td>
                        <td>300/dinte</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Tratament endodontic premolar( aplicare diga, indepartare nerv, tratament rotativ si obturatie de canal cu con calibrat)- 2 canale</td>
                        <td>370/dinte</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Tratament endodontic molar( aplicare diga, indepartare nerv, tratament rotativ si obturatie de canal cu con calibrat) – 3-4 canale</td>
                        <td>450/dinte</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Retratament incisiv, canin(aplicare diga,dezobturare,tratament rotativ si obturatie de canal cu con calibrat)</td>
                        <td>320/dinte</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Retratament premolar(aplicare diga,dezobturare,tratament rotativ si obturatie de canal cu con calibrat)</td>
                        <td>390/dinte</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Retratament molar(aplicare diga,dezobturare,tratament rotativ si obturatie de canal cu con calibrat)</td>
                        <td>500/dinte</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Refacere perete</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Drenaj endodontic</td>
                        <td>200</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Pansament calmant</td>
                        <td>160</td>
                    </tr>
                    </tbody>

                    <thead>
                    <tr>
                        <th></th>
                        <th>Pedodontie</th>
                        <th>Cost (lei)</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Extractie dinte decidual(de lapte) anestezic topic</td>
                        <td>90</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Extractie dinte decidual(de lapte) anestezie locala</td>
                        <td>120</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Tratament endodontic dinti deciduali monoradiculari/pluriradiculari</td>
                        <td>200-250</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Obturatie glassionomer/compozit dinte decidual</td>
                        <td>120-200</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Periaj profesional</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Sigilare largita</td>
                        <td>150</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Sigilare santuri si fosete</td>
                        <td>100</td>
                    </tr>
                    </tbody>

                </Table>
            </div>
        </div>
    );
}