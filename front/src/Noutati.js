import './Noutati.css';
import React, {useState} from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import {useTranslation} from "react-i18next";
import i18next from "i18next";

function Noutati() {
    const [key, setKey] = useState('Masuri preventie COVID');

    const {t} = useTranslation();

    function handleClick(lang) {
        i18next.changeLanguage(lang)
    }

    return (<div className="parent">
            <div className="titl">
                <b>{t('Title.2')}</b></div>

            <Tabs className="noutati-tabs"
                  id="tab-ex"
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
            >

                <Tab className="noutati-tab" eventKey="Masuri preventie COVID" title={t('Tab.1')}>
                    <p>{t('Announce.1')}</p>
                    <p><b>{t('Beginning.1')}</b></p>
                    <p> {t('Text.1')}
                    </p><p><b>{t('Text.2')}</b>
                </p><p> {t('Text.3')}
                </p><p> {t('Text.4')}
                </p><p><b>{t('Text.5')}</b>
                </p><p> {t('Text.6')}
                </p><p> {t('Text.7')}
                </p><p><b> {t('Text.8')}</b>
                </p><p> {t('Text.9')}
                </p><p> {t('Text.10')}
                </p><p> {t('Text.11')}
                </p><p> {t('Text.12')}
                </p><p><b> {t('Text.13')}</b>
                </p><p> {t('Text.14')}
                </p><p> {t('Text.15')}
                </p><p><b> {t('Text.16')}</b></p>
                </Tab>

                <Tab className="noutati-tab" eventKey="Reluare activitate" title={t('Tab.2')}>
                    <p>{t('Announce.2')}</p>
                    <p><b>{t('Beginning.1')}</b></p>
                    <p> {t('Text.17')}
                    </p><p>{t('Text.18')}
                </p><p><b>{t('Text.19')}</b>
                </p><p> {t('Text.20')}
                </p><p><b>{t('Text.21')}</b></p>
                </Tab>

                <Tab className="noutati-tab" eventKey="Stopare temporara activitate" title={t('Tab.3')}>
                    <p>{t('Announce.3')}</p>
                    <p><b>{t('Beginning.1')}</b></p>
                    <p>{t('Text.22')}
                    </p><p><b>{t('Text.23')}</b>
                </p><p>{t('Text.24')}
                </p><p><b>{t('Text.21')}</b></p>
                </Tab>

            </Tabs>

        </div>
    );
}

export default Noutati;