'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Navigation from '@/components/Navigation'
import { 
  ArrowLeft,
  Play,
  Pause,
  CheckCircle,
  Clock,
  BookOpen,
  FileText,
  Target,
  Award,
  Heart,
  Star,
  Lightbulb,
  Users,
  MessageCircle,
  Download,
  Share2,
  Save,
  Edit,
  Trash2,
  Plus,
  Minus,
  ChevronDown,
  ChevronRight,
  Volume2,
  VolumeX
} from 'lucide-react'

export default function LesPage() {
  const params = useParams()
  const moduleId = parseInt(params.id as string)
  const lesId = parseInt(params.lesId as string)
  const [currentSection, setCurrentSection] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [notes, setNotes] = useState('')
  const [showNotes, setShowNotes] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [exerciseAnswers, setExerciseAnswers] = useState<{[key: string]: string}>({})
  const [savedAnswers, setSavedAnswers] = useState(false)

  // Load saved answers on component mount
  useEffect(() => {
    const saved = localStorage.getItem(`lesson-${moduleId}-${lesId}-answers`)
    if (saved) {
      try {
        setExerciseAnswers(JSON.parse(saved))
      } catch (error) {
        console.error('Error loading saved answers:', error)
      }
    }
  }, [moduleId, lesId])

  // Lesson data based on module and lesson ID
  const lessonsData = {
    1: { // Zelfkennis & Identiteit
      1: {
        id: 1,
        title: 'Introductie: Wie ben ik?',
        description: 'Een eerste kennismaking met jezelf en het concept van zelfkennis',
        duration: '30 min',
        type: 'video',
        completed: true,
        objectives: [
          'Begrijpen wat zelfkennis betekent',
          'De belangrijkheid van zelfkennis erkennen',
          'Je eerste stappen zetten in zelfontdekking'
        ],
        content: {
          video: {
            url: '/videos/intro-zelfkennis.mp4',
            duration: '18:45',
            thumbnail: '/images/lessons/intro-zelfkennis.jpg'
          },
          sections: [
            {
              title: 'Wat is zelfkennis?',
              type: 'theory',
              content: `Zelfkennis is het vermogen om jezelf te begrijpen - je gedachten, gevoelens, motivaties, sterke punten en zwakke punten. Het is de basis van persoonlijke groei en ontwikkeling.

Zelfkennis helpt je om:
• Betere beslissingen te nemen
• Gezonde relaties op te bouwen
• Je doelen effectiever te bereiken
• Emotionele intelligentie te ontwikkelen

Zonder zelfkennis loop je het risico om te leven op de automatische piloot, zonder echt te begrijpen waarom je doet wat je doet.`
            },
            {
              title: 'Waarom is zelfkennis belangrijk?',
              type: 'theory',
              content: `Zelfkennis is de fundering waarop alle andere persoonlijke ontwikkeling rust. Het stelt je in staat om:

1. **Authentiek te leven**: Weten wie je bent helpt je om keuzes te maken die bij je passen
2. **Grenzen te stellen**: Begrijpen wat je nodig hebt helpt je om gezonde grenzen te stellen
3. **Relaties te verbeteren**: Zelfkennis verbetert je communicatie en empathie
4. **Stress te verminderen**: Weten wat je triggert helpt je om stress beter te beheren
5. **Doelen te bereiken**: Begrijpen van je motivaties helpt je om volhardend te blijven`
            },
            {
              title: 'De eerste stappen',
              type: 'exercise',
              content: `Laten we beginnen met een eenvoudige oefening om je zelfkennis te verkennen:

**Oefening: De Drie Vragen**
Neem 10 minuten de tijd om deze vragen te beantwoorden:

1. **Wie ben ik?** (Schrijf 10 dingen op die je over jezelf weet)
2. **Wat maakt me uniek?** (Wat onderscheidt jou van anderen?)
3. **Wat zijn mijn kernwaarden?** (Wat is voor jou het belangrijkst in het leven?)

Vul je antwoorden hieronder in zonder te oordelen. Er zijn geen goede of foute antwoorden - alleen jouw waarheid.`,
              exercise: {
                questions: [
                  {
                    id: 'wie-ben-ik',
                    question: 'Wie ben ik?',
                    description: 'Schrijf 10 dingen op die je over jezelf weet',
                    type: 'textarea',
                    placeholder: '1. Ik ben...\n2. Ik ben...\n3. Ik ben...\n\n(voeg meer punten toe tot je 10 hebt)'
                  },
                  {
                    id: 'uniek',
                    question: 'Wat maakt me uniek?',
                    description: 'Wat onderscheidt jou van anderen?',
                    type: 'textarea',
                    placeholder: 'Beschrijf wat jou uniek maakt. Denk aan je persoonlijkheid, ervaringen, talenten, perspectieven...'
                  },
                  {
                    id: 'kernwaarden',
                    question: 'Wat zijn mijn kernwaarden?',
                    description: 'Wat is voor jou het belangrijkst in het leven?',
                    type: 'textarea',
                    placeholder: 'Lijst je belangrijkste waarden op. Bijvoorbeeld: Familie, Vrijheid, Creativiteit, Integriteit, Groei...'
                  }
                ]
              }
            }
          ],
          resources: [
            {
              title: 'Zelfkennis Werkblad',
              type: 'pdf',
              url: '/resources/zelfkennis-werkblad.pdf',
              size: '2.1 MB'
            },
            {
              title: 'Aanbevolen Boek: "De Kracht van Nu"',
              type: 'book',
              url: 'https://example.com/book',
              author: 'Eckhart Tolle'
            }
          ]
        }
      },
      2: {
        id: 2,
        title: 'Kernwaarden Ontdekken',
        description: 'Identificeer de waarden die het belangrijkst voor je zijn',
        duration: '45 min',
        type: 'oefening',
        completed: true,
        objectives: [
          'Je persoonlijke kernwaarden identificeren',
          'Begrijpen hoe waarden je gedrag beïnvloeden',
          'Een waardenhiërarchie opstellen'
        ],
        content: {
          video: null,
          sections: [
            {
              title: 'Wat zijn kernwaarden?',
              type: 'theory',
              content: `Kernwaarden zijn de fundamentele overtuigingen die je gedrag en beslissingen sturen. Ze zijn als een innerlijk kompas dat je helpt navigeren door het leven.

**Karakteristieken van kernwaarden:**
• Ze zijn diepgeworteld en veranderen zelden
• Ze beïnvloeden je dagelijkse keuzes
• Ze geven richting aan je leven
• Ze helpen je prioriteiten stellen

**Voorbeelden van kernwaarden:**
Integriteit, Vrijheid, Familie, Creativiteit, Prestaties, Balans, Liefde, Respect, Avontuur, Vrede, Wijsheid, Vriendschap, Groei, Dienstbaarheid, Onafhankelijkheid`
            },
            {
              title: 'Waarden vs. Doelen',
              type: 'theory',
              content: `Het is belangrijk om het verschil te begrijpen tussen waarden en doelen:

**Waarden:**
• Richtingsgevend en blijvend
• Geen eindpunt
• Geven betekenis aan je leven
• Bijvoorbeeld: "Ik waardeer creativiteit"

**Doelen:**
• Specifiek en tijdgebonden
• Hebben een eindpunt
• Zijn meetbaar
• Bijvoorbeeld: "Ik wil een boek schrijven"

Waarden geven richting aan je doelen. Als je waarde creativiteit is, dan zou een doel kunnen zijn om een creatief project te voltooien.`
            },
            {
              title: 'Waarden Inventarisatie',
              type: 'exercise',
              content: `**Oefening: Waarden Ontdekken**

**Stap 1: Waarden Lijst**
Hieronder vind je een lijst met mogelijke waarden. Lees ze door en selecteer de waarden die je aanspreken.

**Stap 2: Selectie**
Kies de 10 waarden die het meest belangrijk voor je zijn.

**Stap 3: Prioritering**
Rangschik deze 10 waarden van meest naar minst belangrijk.

**Stap 4: Reflectie**
Voor elke van je top 5 waarden, beantwoord de reflectie vragen.`,
              exercise: {
                questions: [
                  {
                    id: 'waarden-selectie',
                    question: 'Selecteer je top 10 waarden',
                    description: 'Kies de 10 waarden die het meest belangrijk voor je zijn uit de lijst hieronder',
                    type: 'multiselect',
                    options: [
                      'Integriteit', 'Vrijheid', 'Familie', 'Creativiteit', 'Prestaties', 'Balans', 'Liefde', 'Respect', 
                      'Avontuur', 'Vrede', 'Wijsheid', 'Vriendschap', 'Groei', 'Dienstbaarheid', 'Onafhankelijkheid', 
                      'Zekerheid', 'Passie', 'Harmonie', 'Leiderschap', 'Nieuwsgierigheid', 'Moed', 'Eenvoud', 
                      'Genereusheid', 'Discipline', 'Flexibiliteit', 'Authenticiteit', 'Loyaliteit', 'Innovatie', 
                      'Traditie', 'Spirituele groei'
                    ],
                    maxSelections: 10
                  },
                  {
                    id: 'waarden-prioritering',
                    question: 'Rangschik je geselecteerde waarden',
                    description: 'Zet je 10 geselecteerde waarden in volgorde van belangrijkheid (1 = belangrijkst)',
                    type: 'textarea',
                    placeholder: '1. [meest belangrijke waarde]\n2. [tweede belangrijkste waarde]\n3. [derde belangrijkste waarde]\n...\n10. [minst belangrijke waarde]'
                  },
                  {
                    id: 'waarden-reflectie',
                    question: 'Reflectie op je top 5 waarden',
                    description: 'Voor elke van je top 5 waarden, beantwoord de volgende vragen',
                    type: 'textarea',
                    placeholder: 'Waarde 1: [naam van waarde]\n• Waarom is dit belangrijk voor mij?\n• Hoe uit deze waarde zich in mijn dagelijks leven?\n• Welke keuzes heb ik gemaakt gebaseerd op deze waarde?\n\nWaarde 2: [naam van waarde]\n• Waarom is dit belangrijk voor mij?\n• Hoe uit deze waarde zich in mijn dagelijks leven?\n• Welke keuzes heb ik gemaakt gebaseerd op deze waarde?\n\n(herhaal voor waarden 3, 4 en 5)'
                  }
                ]
              }
            }
          ],
          resources: [
            {
              title: 'Waarden Inventaris Werkblad',
              type: 'pdf',
              url: '/resources/waarden-inventaris.pdf',
              size: '1.8 MB'
            }
          ]
        }
      },
      3: {
        id: 3,
        title: 'Persoonlijkheid Assessment',
        description: 'Ontdek je persoonlijkheidstype en karaktereigenschappen',
        duration: '60 min',
        type: 'assessment',
        completed: true,
        objectives: [
          'Je persoonlijkheidstype identificeren',
          'Begrijpen hoe persoonlijkheid je gedrag beïnvloedt',
          'Je sterke punten en ontwikkelpunten herkennen'
        ],
        content: {
          video: null,
          sections: [
            {
              title: 'Persoonlijkheid begrijpen',
              type: 'theory',
              content: `Persoonlijkheid is de unieke combinatie van gedachten, gevoelens en gedragingen die je kenmerken. Het is relatief stabiel door de tijd heen, maar kan evolueren.

**De Big Five Persoonlijkheidsdimensies:**

1. **Openheid voor ervaring**: Creativiteit, nieuwsgierigheid, verbeeldingskracht
2. **Consciëntieusheid**: Organisatie, discipline, doelgerichtheid
3. **Extraversie**: Sociale energie, assertiviteit, gezelligheid
4. **Meegevendheid**: Vertrouwen, empathie, samenwerking
5. **Neuroticisme**: Emotionele stabiliteit, stressbestendigheid

Elke dimensie heeft sterke en zwakke punten. Het doel is niet om een "perfect" persoonlijkheidstype te hebben, maar om jezelf beter te begrijpen.`
            },
            {
              title: 'Persoonlijkheid Assessment',
              type: 'exercise',
              content: `**Big Five Persoonlijkheidstest**

Beantwoord de volgende vragen op een schaal van 1 (helemaal niet waar) tot 5 (heel waar):

**Openheid voor ervaring:**
1. Ik geniet van nieuwe ervaringen en ideeën
2. Ik ben creatief en verbeeldingsrijk
3. Ik hou van abstracte concepten
4. Ik ben nieuwsgierig naar verschillende culturen
5. Ik waardeer kunst en schoonheid

**Consciëntieusheid:**
1. Ik ben georganiseerd en ordelijk
2. Ik volg plannen en schema's
3. Ik ben betrouwbaar en punctueel
4. Ik werk hard om doelen te bereiken
5. Ik let op details

**Extraversie:**
1. Ik geniet van sociale situaties
2. Ik voel me energiek in groepen
3. Ik ben assertief en direct
4. Ik zoek opwinding en variatie
5. Ik ben spraakzaam en uitbundig

**Meegevendheid:**
1. Ik vertrouw anderen
2. Ik ben behulpzaam en genereus
3. Ik ben empathisch en begripvol
4. Ik vermijd conflicten
5. Ik ben bescheiden en nederig

**Neuroticisme:**
1. Ik maak me vaak zorgen
2. Ik ben gevoelig voor stress
3. Ik heb stemmingswisselingen
4. Ik voel me vaak angstig
5. Ik ben kritisch op mezelf

**Scoring:**
Tel je scores per dimensie op en deel door 5 voor je gemiddelde score.`
            }
          ],
          resources: [
            {
              title: 'Persoonlijkheid Assessment Resultaten',
              type: 'pdf',
              url: '/resources/persoonlijkheid-assessment.pdf',
              size: '3.2 MB'
            }
          ]
        }
      },
      4: {
        id: 4,
        title: 'Sterke Punten Inventaris',
        description: 'Maak een overzicht van je talenten en vaardigheden',
        duration: '40 min',
        type: 'oefening',
        completed: true,
        objectives: [
          'Je natuurlijke talenten identificeren',
          'Je vaardigheden en competenties in kaart brengen',
          'Een actieplan maken voor talentontwikkeling'
        ],
        content: {
          video: null,
          sections: [
            {
              title: 'Talenten vs. Vaardigheden',
              type: 'theory',
              content: `**Talenten** zijn natuurlijke aanleg en potentieel - dingen waar je van nature goed in bent of gemakkelijk leert.

**Vaardigheden** zijn geleerde capaciteiten die je door oefening en ervaring hebt ontwikkeld.

**Het verschil:**
• Talenten zijn aangeboren en moeilijk te veranderen
• Vaardigheden kunnen worden ontwikkeld en verbeterd
• De beste combinatie is om je talenten te gebruiken om vaardigheden te ontwikkelen

**Voorbeelden:**
Talent: Natuurlijke empathie → Vaardigheid: Actief luisteren
Talent: Analytisch denken → Vaardigheid: Probleem oplossen
Talent: Creativiteit → Vaardigheid: Design en innovatie`
            },
            {
              title: 'Sterke Punten Inventarisatie',
              type: 'exercise',
              content: `**Oefening: Talenten Ontdekken**

**Stap 1: Reflectie op jeugd**
Denk terug naar je kindertijd en beantwoord de vragen hieronder.

**Stap 2: Huidige sterke punten**
Bekijk je huidige leven en identificeer je sterke punten.

**Stap 3: Feedback verzamelen**
Vraag 3-5 mensen die je goed kennen om feedback te geven.

**Stap 4: Patronen identificeren**
Analyseer de patronen en consistentie in je talenten.`,
              exercise: {
                questions: [
                  {
                    id: 'jeugd-reflectie',
                    question: 'Reflectie op jeugd',
                    description: 'Denk terug naar je kindertijd en beantwoord deze vragen',
                    type: 'textarea',
                    placeholder: '• Waar was ik als kind al goed in?\n• Waar kreeg ik complimenten over?\n• Wat deed ik graag in mijn vrije tijd?\n• Welke activiteiten gaven me energie?\n• Wat vonden anderen bijzonder aan mij?'
                  },
                  {
                    id: 'huidige-sterke-punten',
                    question: 'Huidige sterke punten',
                    description: 'Bekijk je huidige leven en identificeer je sterke punten',
                    type: 'textarea',
                    placeholder: '• Waar krijg ik nu complimenten over?\n• Wat doe ik gemakkelijk terwijl anderen het moeilijk vinden?\n• Waar voel ik me energiek en gemotiveerd?\n• Welke taken geven me voldoening?\n• Wat zijn mijn natuurlijke talenten?'
                  },
                  {
                    id: 'feedback-verzamelen',
                    question: 'Feedback van anderen',
                    description: 'Vraag 3-5 mensen die je goed kennen om feedback te geven',
                    type: 'textarea',
                    placeholder: 'Feedback van [Naam]:\n• Wat zijn mijn grootste sterke punten?\n• Waar ben ik goed in?\n• Welke kwaliteiten waardeer je aan mij?\n\nFeedback van [Naam]:\n• Wat zijn mijn grootste sterke punten?\n• Waar ben ik goed in?\n• Welke kwaliteiten waardeer je aan mij?\n\n(herhaal voor andere personen)'
                  },
                  {
                    id: 'patronen-identificeren',
                    question: 'Patronen identificeren',
                    description: 'Analyseer de patronen en consistentie in je talenten',
                    type: 'textarea',
                    placeholder: '• Welke thema\'s komen steeds terug?\n• Welke talenten worden door meerdere mensen genoemd?\n• Waar zie ik consistentie tussen jeugd en nu?\n• Wat zijn mijn top 5 sterke punten?\n• Hoe kan ik deze sterke punten meer gebruiken?'
                  }
                ]
              }
            }
          ],
          resources: [
            {
              title: 'Sterke Punten Werkblad',
              type: 'pdf',
              url: '/resources/sterke-punten.pdf',
              size: '2.5 MB'
            }
          ]
        }
      },
      5: {
        id: 5,
        title: 'Ontwikkelpunten Identificeren',
        description: 'Gebieden waar je wilt groeien en verbeteren',
        duration: '35 min',
        type: 'reflectie',
        completed: true,
        objectives: [
          'Gebieden voor groei identificeren',
          'Een groeimindset ontwikkelen',
          'Een persoonlijk ontwikkelplan maken'
        ],
        content: {
          video: null,
          sections: [
            {
              title: 'Groeimindset vs. Vaste mindset',
              type: 'theory',
              content: `**Vaste Mindset:**
• Intelligentie en talent zijn vaststaand
• Mislukking betekent dat je niet goed genoeg bent
• Je vermijdt uitdagingen uit angst te falen
• Kritiek wordt persoonlijk opgevat

**Groeimindset:**
• Intelligentie en talent kunnen worden ontwikkeld
• Mislukking is een kans om te leren
• Uitdagingen worden omarmd als groeikansen
• Kritiek wordt gezien als feedback voor verbetering

**De voordelen van een groeimindset:**
• Meer veerkracht bij tegenslag
• Betere prestaties op lange termijn
• Hogere motivatie en doorzettingsvermogen
• Meer openheid voor feedback en leren`
            },
            {
              title: 'Ontwikkelpunten identificeren',
              type: 'exercise',
              content: `**Oefening: Groeigebieden Ontdekken**

**Stap 1: Reflectie op uitdagingen**
Identificeer gebieden waar je tegenaan loopt of wilt verbeteren.

**Stap 2: Gebiedscategorieën**
Organiseer je ontwikkelpunten in verschillende categorieën.

**Stap 3: Prioritering**
Beoordeel elk ontwikkelpunt op belangrijkheid en haalbaarheid.

**Stap 4: Actieplan**
Maak een concreet plan voor je top 3 ontwikkelpunten.`,
              exercise: {
                questions: [
                  {
                    id: 'uitdagingen-reflectie',
                    question: 'Reflectie op uitdagingen',
                    description: 'Identificeer gebieden waar je tegenaan loopt of wilt verbeteren',
                    type: 'textarea',
                    placeholder: '• Waar loop ik regelmatig tegenaan?\n• Welke feedback heb ik gekregen over verbeterpunten?\n• Wat zou ik willen kunnen dat ik nu niet kan?\n• Welke situaties vermijd ik omdat ik me onzeker voel?\n• Waar voel ik me gefrustreerd of geforceerd?'
                  },
                  {
                    id: 'gebiedscategorieen',
                    question: 'Gebiedscategorieën',
                    description: 'Organiseer je ontwikkelpunten in verschillende categorieën',
                    type: 'textarea',
                    placeholder: 'Professioneel (werk-gerelateerde vaardigheden):\n• [ontwikkelpunt 1]\n• [ontwikkelpunt 2]\n\nPersoonlijk (persoonlijke eigenschappen en gedrag):\n• [ontwikkelpunt 1]\n• [ontwikkelpunt 2]\n\nRelatie (communicatie en sociale vaardigheden):\n• [ontwikkelpunt 1]\n• [ontwikkelpunt 2]\n\nLichaam (fysieke gezondheid en welzijn):\n• [ontwikkelpunt 1]\n• [ontwikkelpunt 2]\n\nGeest (mentale gezondheid en mindset):\n• [ontwikkelpunt 1]\n• [ontwikkelpunt 2]'
                  },
                  {
                    id: 'prioritering',
                    question: 'Prioritering ontwikkelpunten',
                    description: 'Beoordeel elk ontwikkelpunt op belangrijkheid en haalbaarheid',
                    type: 'textarea',
                    placeholder: 'Ontwikkelpunt: [naam]\n• Belangrijkheid voor mij (1-10): [score]\n• Gemakkelijk te verbeteren (1-10): [score]\n• Impact bij verbetering (1-10): [score]\n• Totaal: [som van scores]\n\nOntwikkelpunt: [naam]\n• Belangrijkheid voor mij (1-10): [score]\n• Gemakkelijk te verbeteren (1-10): [score]\n• Impact bij verbetering (1-10): [score]\n• Totaal: [som van scores]\n\n(herhaal voor alle ontwikkelpunten)'
                  },
                  {
                    id: 'actieplan',
                    question: 'Actieplan voor top 3 ontwikkelpunten',
                    description: 'Maak een concreet plan voor je belangrijkste ontwikkelpunten',
                    type: 'textarea',
                    placeholder: 'Ontwikkelpunt 1: [naam]\n• Wat ga ik doen om dit te verbeteren?\n• Wanneer ga ik dit aanpakken?\n• Hoe ga ik mijn voortgang meten?\n• Welke hulpmiddelen heb ik nodig?\n\nOntwikkelpunt 2: [naam]\n• Wat ga ik doen om dit te verbeteren?\n• Wanneer ga ik dit aanpakken?\n• Hoe ga ik mijn voortgang meten?\n• Welke hulpmiddelen heb ik nodig?\n\nOntwikkelpunt 3: [naam]\n• Wat ga ik doen om dit te verbeteren?\n• Wanneer ga ik dit aanpakken?\n• Hoe ga ik mijn voortgang meten?\n• Welke hulpmiddelen heb ik nodig?'
                  }
                ]
              }
            }
          ],
          resources: [
            {
              title: 'Ontwikkelplan Template',
              type: 'pdf',
              url: '/resources/ontwikkelplan.pdf',
              size: '1.9 MB'
            }
          ]
        }
      },
      6: {
        id: 6,
        title: 'Zelfbeeld Integratie',
        description: 'Alles samenbrengen in een coherent zelfbeeld',
        duration: '50 min',
        type: 'synthese',
        completed: true,
        objectives: [
          'Alle inzichten integreren in een coherent zelfbeeld',
          'Een persoonlijke missie statement ontwikkelen',
          'Een actieplan maken voor verdere groei'
        ],
        content: {
          video: null,
          sections: [
            {
              title: 'Zelfbeeld samenstellen',
              type: 'theory',
              content: `Nu je alle aspecten van jezelf hebt onderzocht, is het tijd om alles samen te brengen in een coherent zelfbeeld.

**Een gezond zelfbeeld bevat:**
• **Zelfkennis**: Begrip van je waarden, persoonlijkheid en sterke punten
• **Zelfacceptatie**: Accepteren van zowel je sterke als zwakke punten
• **Zelfrespect**: Waardering voor jezelf als uniek individu
• **Zelfvertrouwen**: Vertrouwen in je vermogen om uitdagingen aan te gaan

**Het proces van integratie:**
1. **Verzamelen**: Alle inzichten uit de voorgaande lessen
2. **Organiseren**: Patronen en thema's identificeren
3. **Synthetiseren**: Een samenhangend verhaal maken
4. **Activeren**: Concrete stappen nemen voor groei`
            },
            {
              title: 'Persoonlijke Missie Statement',
              type: 'exercise',
              content: `**Oefening: Missie Statement Ontwikkelen**

Gebruik alle informatie die je hebt verzameld om een persoonlijke missie statement te schrijven.

**Template:**
"Ik ben [wie je bent] die [wat je doet/waardeert]. Mijn doel is [je doel] door [je aanpak/methode]. Ik streef ernaar om [je impact/legacy] te creëren."

**Voorbeeld:**
"Ik ben een creatieve en empathische persoon die waarde hecht aan authenticiteit en groei. Mijn doel is om anderen te helpen hun potentieel te realiseren door actief luisteren en inspirerende verhalen te delen. Ik streef ernaar om een positieve impact te maken op de levens van de mensen om me heen."

**Reflectie vragen:**
• Spreekt deze missie je aan?
• Voelt het authentiek en waar?
• Geeft het richting aan je keuzes?
• Inspireert het je om actie te ondernemen?`,
              exercise: {
                questions: [
                  {
                    id: 'missie-statement',
                    question: 'Persoonlijke Missie Statement',
                    description: 'Schrijf je persoonlijke missie statement met behulp van de template',
                    type: 'textarea',
                    placeholder: 'Template: "Ik ben [wie je bent] die [wat je doet/waardeert]. Mijn doel is [je doel] door [je aanpak/methode]. Ik streef ernaar om [je impact/legacy] te creëren."\n\nMijn missie statement:\n\n'
                  },
                  {
                    id: 'missie-reflectie',
                    question: 'Reflectie op je missie statement',
                    description: 'Beantwoord de reflectie vragen over je missie statement',
                    type: 'textarea',
                    placeholder: '• Spreekt deze missie me aan? Waarom wel/niet?\n• Voelt het authentiek en waar? Leg uit.\n• Geeft het richting aan mijn keuzes? Hoe?\n• Inspireert het me om actie te ondernemen? Welke acties?\n• Wat zou ik willen toevoegen of veranderen?'
                  },
                  {
                    id: 'integratie-samenvatting',
                    question: 'Integratie Samenvatting',
                    description: 'Breng alle inzichten samen in een samenhangend zelfbeeld',
                    type: 'textarea',
                    placeholder: 'Mijn kernwaarden: [lijst je top 5 waarden]\n\nMijn sterke punten: [lijst je top 5 sterke punten]\n\nMijn ontwikkelpunten: [lijst je top 3 ontwikkelpunten]\n\nMijn persoonlijkheid: [beschrijf je persoonlijkheid in je eigen woorden]\n\nMijn missie: [je missie statement]\n\nHoe alles samenkomt:\n[beschrijf hoe alle elementen samen een coherent beeld vormen van wie je bent]'
                  }
                ]
              }
            }
          ],
          resources: [
            {
              title: 'Zelfbeeld Integratie Werkblad',
              type: 'pdf',
              url: '/resources/zelfbeeld-integratie.pdf',
              size: '3.1 MB'
            }
          ]
        }
      }
    }
  }

  const currentLesson = lessonsData[moduleId as keyof typeof lessonsData]?.[lesId as keyof typeof lessonsData[1]]

  if (!currentLesson) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="lg:ml-64 p-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-text">Les niet gevonden</h1>
            <a href={`/groei/module/${moduleId}`} className="text-primary-blue hover:text-primary-blue/80">← Terug naar module</a>
          </div>
        </div>
      </div>
    )
  }

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'video': return Play
      case 'oefening': return Target
      case 'assessment': return Award
      case 'reflectie': return Lightbulb
      case 'synthese': return BookOpen
      default: return FileText
    }
  }

  const getSectionIcon = (type: string) => {
    switch (type) {
      case 'theory': return BookOpen
      case 'exercise': return Target
      case 'video': return Play
      case 'assessment': return Award
      default: return FileText
    }
  }

  const handleCompleteLesson = () => {
    setCompleted(true)
    // In een echte app zou dit een API call zijn
    console.log(`Lesson ${lesId} completed`)
  }

  const handleAnswerChange = (questionId: string, value: string) => {
    setExerciseAnswers(prev => ({
      ...prev,
      [questionId]: value
    }))
  }

  const handleMultiSelectChange = (questionId: string, value: string[]) => {
    setExerciseAnswers(prev => ({
      ...prev,
      [questionId]: JSON.stringify(value)
    }))
  }

  const saveAnswers = () => {
    // In een echte app zou dit een API call zijn
    localStorage.setItem(`lesson-${moduleId}-${lesId}-answers`, JSON.stringify(exerciseAnswers))
    setSavedAnswers(true)
    setTimeout(() => setSavedAnswers(false), 2000)
  }

  const getMultiSelectValues = (questionId: string): string[] => {
    try {
      return JSON.parse(exerciseAnswers[questionId] || '[]')
    } catch {
      return []
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Main Content */}
      <div className="lg:ml-64 transition-all duration-300">
        {/* Header */}
        <header className="bg-surface border-b border-gray-800">
          <div className="px-6 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <a 
                  href={`/groei/module/${moduleId}`}
                  className="flex items-center space-x-2 text-text-muted hover:text-text transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Terug naar module</span>
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setShowNotes(!showNotes)}
                  className="flex items-center space-x-2 px-4 py-2 bg-surface-light border border-gray-700 rounded-xl hover:bg-gray-700 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>Notities</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-surface-light border border-gray-700 rounded-xl hover:bg-gray-700 transition-colors">
                  <Share2 className="w-4 h-4" />
                  <span>Delen</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="px-6 py-8">
          {/* Lesson Header */}
          <div className="glass-effect rounded-2xl p-8 mb-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-blue-dark rounded-2xl flex items-center justify-center">
                  {(() => {
                    const Icon = getLessonIcon(currentLesson.type)
                    return <Icon className="w-8 h-8 text-white" />
                  })()}
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-text mb-2">{currentLesson.title}</h1>
                  <p className="text-text-secondary text-lg mb-4">{currentLesson.description}</p>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-text-muted" />
                      <span className="text-text-muted">{currentLesson.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="px-3 py-1 bg-primary-blue/20 text-primary-blue rounded-full text-sm font-medium">
                        {currentLesson.type}
                      </span>
                    </div>
                    {currentLesson.completed && (
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-green-500 font-medium">Voltooid</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Objectives */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-text mb-3">Leerdoelen</h3>
              <ul className="space-y-2">
                {currentLesson.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-primary-blue to-primary-blue-dark h-2 rounded-full transition-all duration-500"
                style={{ width: `${(currentSection / currentLesson.content.sections.length) * 100}%` }}
              ></div>
            </div>
            <p className="text-text-muted text-sm mt-2">
              Sectie {currentSection + 1} van {currentLesson.content.sections.length}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Video Section */}
              {currentLesson.content.video && (
                <div className="glass-effect rounded-2xl p-6 mb-8">
                  <div className="aspect-video bg-gray-800 rounded-xl mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button 
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-20 h-20 bg-primary-blue rounded-full flex items-center justify-center hover:bg-primary-blue-dark transition-colors"
                      >
                        {isPlaying ? <Pause className="w-8 h-8 text-white" /> : <Play className="w-8 h-8 text-white" />}
                      </button>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white text-sm">
                        <span>{currentLesson.content.video.duration}</span>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
                            <Volume2 className="w-4 h-4" />
                          </button>
                          <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-text mb-2">Les Video</h3>
                  <p className="text-text-secondary">Bekijk de video voor een uitgebreide uitleg van de lesstof.</p>
                </div>
              )}

              {/* Content Sections */}
              <div className="space-y-6">
                {currentLesson.content.sections.map((section, index) => (
                  <div 
                    key={index}
                    className={`glass-effect rounded-2xl p-6 transition-all duration-200 ${
                      index === currentSection ? 'border-l-4 border-l-primary-blue' : ''
                    }`}
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-blue-dark rounded-xl flex items-center justify-center flex-shrink-0">
                        {(() => {
                          const Icon = getSectionIcon(section.type)
                          return <Icon className="w-6 h-6 text-white" />
                        })()}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-text mb-2">{section.title}</h3>
                        <span className="px-3 py-1 bg-primary-blue/20 text-primary-blue rounded-full text-sm font-medium">
                          {section.type}
                        </span>
                      </div>
                    </div>
                    
                    <div className="prose prose-invert max-w-none">
                      <div className="text-text-secondary whitespace-pre-line leading-relaxed">
                        {section.content}
                      </div>
                    </div>

                    {/* Exercise Form */}
                    {section.exercise && (
                      <div className="mt-6 p-6 bg-surface border border-gray-700 rounded-xl">
                        <h4 className="text-lg font-semibold text-text mb-4">Oefening Invoer</h4>
                        <div className="space-y-6">
                          {section.exercise.questions.map((question, qIndex) => (
                            <div key={question.id} className="space-y-3">
                              <div>
                                <h5 className="text-text font-medium">{question.question}</h5>
                                <p className="text-text-muted text-sm">{question.description}</p>
                              </div>
                              
                              {question.type === 'textarea' && (
                                <textarea
                                  value={exerciseAnswers[question.id] || ''}
                                  onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                                  placeholder={question.placeholder}
                                  className="w-full h-32 px-4 py-3 bg-background border border-gray-600 rounded-xl text-text placeholder-text-muted focus:border-primary-blue focus:ring-1 focus:ring-primary-blue/50 transition-colors resize-none"
                                />
                              )}
                              
                              {question.type === 'multiselect' && (
                                <div className="space-y-3">
                                  <div className="text-sm text-text-muted">
                                    Geselecteerd: {getMultiSelectValues(question.id).length} van {question.maxSelections}
                                  </div>
                                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-h-48 overflow-y-auto">
                                    {question.options?.map((option) => {
                                      const isSelected = getMultiSelectValues(question.id).includes(option)
                                      return (
                                        <button
                                          key={option}
                                          onClick={() => {
                                            const currentValues = getMultiSelectValues(question.id)
                                            if (isSelected) {
                                              const newValues = currentValues.filter(v => v !== option)
                                              handleMultiSelectChange(question.id, newValues)
                                            } else if (currentValues.length < (question.maxSelections || 10)) {
                                              const newValues = [...currentValues, option]
                                              handleMultiSelectChange(question.id, newValues)
                                            }
                                          }}
                                          disabled={!isSelected && getMultiSelectValues(question.id).length >= (question.maxSelections || 10)}
                                          className={`p-2 text-sm rounded-lg border transition-colors text-left ${
                                            isSelected
                                              ? 'bg-primary-blue text-white border-primary-blue'
                                              : 'bg-surface text-text border-gray-600 hover:border-primary-blue/50 disabled:opacity-50 disabled:cursor-not-allowed'
                                          }`}
                                        >
                                          {option}
                                        </button>
                                      )
                                    })}
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                          
                          <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                            <div className="flex items-center space-x-2">
                              {savedAnswers && (
                                <span className="text-green-400 text-sm flex items-center space-x-1">
                                  <CheckCircle className="w-4 h-4" />
                                  <span>Antwoorden opgeslagen</span>
                                </span>
                              )}
                            </div>
                            <button
                              onClick={saveAnswers}
                              className="flex items-center space-x-2 px-4 py-2 bg-primary-blue text-white rounded-xl hover:bg-primary-blue-dark transition-colors"
                            >
                              <Save className="w-4 h-4" />
                              <span>Antwoorden Opslaan</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {index === currentSection && (
                      <div className="mt-6 flex items-center justify-between">
                        <button 
                          onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
                          disabled={currentSection === 0}
                          className="px-4 py-2 bg-surface border border-gray-700 rounded-xl text-text hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Vorige
                        </button>
                        <button 
                          onClick={() => setCurrentSection(Math.min(currentLesson.content.sections.length - 1, currentSection + 1))}
                          disabled={currentSection === currentLesson.content.sections.length - 1}
                          className="px-4 py-2 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {currentSection === currentLesson.content.sections.length - 1 ? 'Voltooien' : 'Volgende'}
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Complete Lesson Button */}
              {currentSection === currentLesson.content.sections.length - 1 && !completed && (
                <div className="glass-effect rounded-2xl p-6 mt-8">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-text mb-4">Les Voltooien</h3>
                    <p className="text-text-secondary mb-6">
                      Je hebt alle secties van deze les doorgenomen. Klik op de knop hieronder om de les te markeren als voltooid.
                    </p>
                    <button 
                      onClick={handleCompleteLesson}
                      className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 font-semibold"
                    >
                      Les Voltooien
                    </button>
                  </div>
                </div>
              )}

              {completed && (
                <div className="glass-effect rounded-2xl p-6 mt-8 border border-green-500/30">
                  <div className="text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-green-500 mb-2">Les Voltooid!</h3>
                    <p className="text-text-secondary">
                      Gefeliciteerd! Je hebt deze les succesvol afgerond. Je kunt nu doorgaan naar de volgende les.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Navigation */}
              <div className="glass-effect rounded-2xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-text mb-4">Les Navigatie</h3>
                <div className="space-y-2">
                  {currentLesson.content.sections.map((section, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSection(index)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        index === currentSection
                          ? 'bg-primary-blue text-white'
                          : 'text-text-muted hover:text-text hover:bg-surface-light'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        {index === currentSection ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                        <span className="text-sm">{section.title}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Resources */}
              <div className="glass-effect rounded-2xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-text mb-4">Bronnen</h3>
                <div className="space-y-3">
                  {currentLesson.content.resources?.map((resource, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-surface rounded-xl border border-gray-700">
                      <div className="flex items-center space-x-3">
                        <FileText className="w-5 h-5 text-primary-blue" />
                        <div>
                          <p className="text-text font-medium text-sm">{resource.title}</p>
                          <p className="text-text-muted text-xs">{resource.size || resource.author}</p>
                        </div>
                      </div>
                      <button className="px-3 py-1 bg-primary-blue/20 text-primary-blue rounded-lg hover:bg-primary-blue/30 transition-colors text-xs">
                        <Download className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notes */}
              {showNotes && (
                <div className="glass-effect rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-text mb-4">Notities</h3>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Schrijf hier je notities..."
                    className="w-full h-32 px-4 py-3 bg-surface border border-gray-700 rounded-xl text-text placeholder-text-muted focus:border-primary-blue focus:ring-1 focus:ring-primary-blue/50 transition-colors resize-none"
                  />
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-text-muted text-sm">{notes.length} karakters</span>
                    <button className="flex items-center space-x-2 px-3 py-2 bg-primary-blue/20 text-primary-blue rounded-lg hover:bg-primary-blue/30 transition-colors text-sm">
                      <Save className="w-4 h-4" />
                      <span>Opslaan</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
