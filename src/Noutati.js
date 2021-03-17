import './Noutati.css';
import React, {useState} from 'react';
import {Tabs, Tab} from 'react-bootstrap';

function Noutati() {
    const [key, setKey] = useState('Masuri preventie COVID');

    return (<div className="parent">
        <div className="titl">
            <b>Aici gasiti cele mai recente anunturi:</b></div>

            <Tabs className="noutati-tabs"
                id="tab-ex"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >

                <Tab className="noutati-tab" eventKey="Masuri preventie COVID" title="Masuri preventie COVID">
                    <p>Anunt 18 mai 2020</p>
                    <p><b>Stimati pacienti,</b></p>
                    <p> Va prezentam cele mai importante masuri pe care trebuie sa le aveti in vedere in ceea ce
                        priveste vizita dumneavoastra si desfasurarea activitatii in cadrul
                        clinicii <b>DentaWEB</b> in perioada ce urmeaza. Mentionam ca toate aceste masuri sunt
                        valabile incepand cu data de 18 mai 2020, avand rolul de a asigura protectia si sanatatea
                        pacientilor si personalului, conform legislatiei in vigoare.
                    </p><p><b>Programarea pentru tratamentul stomatologic</b>
                </p><p> Accesul in clinica pentru orice tratament stomatologic se va realiza exclusiv in baza unei
                    programari telefonice prealabile si dupa un triaj.
                </p><p> Va rugam sa intelegeti ca aceste reguli au rolul de a va proteja atat pe dvs, cat si pe
                    personalul medical si este foarte important sa respectati cu strictete ora programarii
                    stabilite!
                </p><p><b>Stationarea in sala de asteptare din interiorul clinicii NU este permisa</b>
                </p><p> Daca ati ajuns inaintea orei programarii, veti astepta in afara clinicii sau in masina
                    proprie, urmand a fi anuntati telefonic de personalul clinicii cand pot intra in cabinet.
                </p><p> in timpul asteptarii in afara clinicii, veti respecta normele in vigoare (purtarea
                    obligatorie a unei masti care sa acopere gura si nasul, asigurarea unei distante de minim 1.5 m
                    intre persoane).
                </p><p><b> Masuri la intrarea in clinica</b>
                </p><p> Accesul in cabinetul propriu zis de tratament se va permite doar pacientului, apartinatorii
                    putand astepta in afara clinicii. Exceptie constituie situatiile speciale (copii, persoane
                    dependente etc), caz in care se va limita accesul la o singura persoana insotitoare.
                </p><p> Fiecare pacient si apartinator, dupa caz, va purta propria masca de protectie si manusi, la
                    intrarea in clinica.
                </p><p> La intrarea in clinica, pacientilor li se va verifica temperatura, isi vor dezinfecta
                    mainile, se vor imbraca cu echipament de protectie (halat, botosei, boneta) pus la dispozitie de
                    DetaWEB, iar lucrurile personale vor fi puse intr-un loc special amenajat.
                </p><p> Evitati pe cat posibil contactul cu personalul ( mentineti distanta de 1.5 m in timpul
                    discutiei), mobilierul, manerele usilor.
                </p><p><b> Masuri la intrarea in cabinet</b>
                </p><p> inainte de inceperea interventiei stomatologice, pacientul va completa obligatoriu
                    chestionarul de evaluare a starii generale de sanatate.
                </p><p> Atat inainte, cat si la finalul interventiei ,stomatologice, pacientul isi va clati gura cu
                    solutie de apa oxigenata (diluata 1 %) sau isobetadina, pusa la dispozitie de clinica AnaDent.
                </p><p><b> Va multumim pentru intelegere si incredere!</b></p>
                </Tab>

                <Tab className="noutati-tab" eventKey="Reluare activitate" title="Reluare activitate">
                    <p>Anunt 10 mai 2020</p>
                    <p><b>Stimati pacienti,</b></p>
                    <p> Ne bucuram sa va anuntam ca, incepand cu data de 18 mai 2020, clinica <b>DentaWEB</b> isi va
                        redeschide
                        portile. Va suntem recunoscatori tuturor pentru rabdare, stiind cat de provocatoare a fost
                        aceasta perioada pentru noi toti.
                    </p><p><b>Siguranta si sanatatea pacientilor si a personalului</b>
                    raman pe primul loc pentru noi, de aceea facem demersurile necesare si ne pregatim pentru a
                    indeplini toate standardele de protectie impuse de contextul pandemiei de COVID-19. Noile
                    reglementari ce vor impune o serie de schimbari privind modul de lucru vor fi afisate pe website-ul
                    nostru si la cabinet.
                </p><p><b>Programarile se vor putea face telefonic incepand cu data de 14 mai 2020!</b>
                </p><p> intre timp, ramanem la dispozitia dumneavoastra la numerele de telefon din pagina de contact
                    pentru a va oferi
                    in continuare suport pentru urgentele aparute .
                </p><p><b>Va multumim si sa ne revedem cu bine!</b></p>
                </Tab>

                <Tab className="noutati-tab" eventKey="Stopare temporara activitate" title="Stopare temporara activitate">
                    <p>Anunt 15 martie 2020</p>
                    <p><b>Stimati pacienti,</b></p>
                    <p> Pe fondul instituirii starii de urgenta decretata de autoritati, va aducem la cunostinta ca
                        incepand de marti, 17 martie 2020, clinica <b>DentaWEB</b> va fi inchisa. Aceasta masura va fi
                        aplicata
                        pana la ridicarea restrictiilor impuse de raspandirea infectiei cu virusul COVID-19.
                    </p><p><b>Totusi, dorim sa va anuntam ca am deschis o linie telefonica de asistenta, ce va fi
                    disponibila de
                    luni pana vineri, in intervalul orar 9-15: 0744 144 097.</b>
                </p><p>La acest nr. de telefon pentru urgente (dureri, sangerari, infectii) vor raspunde cadrele
                    medicale avizate ale clinicii noastre si veti putea primi telefonic o serie de indrumari sau
                    posibile tratamente in vederea solutionarii problemei dvs. de sanatate dentara.
                </p><p><b>Va multumim si sa ne revedem cu bine!</b></p>
                </Tab>

            </Tabs>

        </div>
    );
}

export default Noutati;