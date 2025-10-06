'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import { 
  Calendar,
  Clock,
  MapPin,
  Users,
  Heart,
  Target,
  Lightbulb,
  Compass,
  Star,
  BookOpen,
  Play,
  CheckCircle,
  ArrowRight,
  Sunrise,
  Sunset,
  Coffee,
  Utensils,
  Waves,
  Plane,
  Mountain,
  Building,
  TreePine,
  Bridge,
  Camera
} from 'lucide-react'

export default function Programma() {
  const [selectedDay, setSelectedDay] = useState(1)

  // 7-daags retraite programma gebaseerd op het echte PDF document
  const retraiteProgramma = [
    {
      dag: 1,
      datum: "Dag 1",
      thema: "Transfer AMS – CURAÇAO",
      beschrijving: "Aankomst en acclimatisatie",
      activiteiten: [
        {
          tijd: "Vroege ochtend",
          titel: "Vlucht Schiphol naar Curaçao",
          type: "reis",
          locatie: "Schiphol - Curaçao",
          beschrijving: "We vliegen vanaf Schiphol naar Curaçao. We komen begin van de avond aan bij onze accommodatie.",
          icon: Plane
        },
        {
          tijd: "Avond",
          titel: "Aankomst Morena Resort – Jan Thiel",
          type: "aankomst",
          locatie: "Morena Resort – Jan Thiel",
          beschrijving: "Je hebt hier de beschikking over je eigen appartement met één slaapkamer met een balkon/terras met uitzicht op de tropische tuin van het resort.",
          icon: Building
        },
        {
          tijd: "Avond",
          titel: "Acclimatisatie",
          type: "rust",
          locatie: "Morena Resort",
          beschrijving: "Nadat we ons hebben opgefrist is er ruimte voor een hapje en een drankje. Gezien de lange reis is het programma vrijblijvend met de groep.",
          icon: Coffee
        }
      ]
    },
    {
      dag: 2,
      datum: "Dag 2",
      thema: "KLEIN CURAÇAO (IKIGAI)",
      beschrijving: "Ontdek je IKIGAI op een paradijselijk eiland",
      activiteiten: [
        {
          tijd: "08:00",
          titel: "Ontbijt Zest Restaurant",
          type: "maaltijd",
          locatie: "Jan Thiel Beach",
          beschrijving: "Het gehele programma ontbijten we dagelijks op het strand van Jan Thiel met het uitzicht op de zee. Tijdens het ontbijt volgt de nadere kennismaking met de groep.",
          icon: Utensils
        },
        {
          tijd: "10:00",
          titel: "Speedboot naar Klein Curaçao",
          type: "excursie",
          locatie: "Jan Thiel Beach → Klein Curaçao",
          beschrijving: "Om 10.00 uur vertrekken we met een speedboot naar het prachtige eiland Klein Curaçao. Een adrenaline ervaring en de snelste manier (45 minuten) om het eiland te bereiken!",
          icon: Waves
        },
        {
          tijd: "10:45 - 15:00",
          titel: "IKIGAI Workshop",
          type: "workshop",
          locatie: "Klein Curaçao",
          beschrijving: "Het parelwitte strand en het helderblauwe water zijn adembenemend! Een perfecte locatie om je eigen IKIGAI uit te gaan schrijven. IKIGAI is een Japans concept dat staat voor datgene waar jij je bed voor uitkomt en waard is om voor te leven.",
          icon: Heart
        },
        {
          tijd: "15:00",
          titel: "BBQ & Consumpties",
          type: "maaltijd",
          locatie: "Klein Curaçao",
          beschrijving: "Deze dag is inclusief BBQ en (non)alcoholische consumpties. We komen rond 16.00 uur weer terug op Jan Thiel Beach.",
          icon: Utensils
        },
        {
          tijd: "16:00",
          titel: "Terugkeer en IKIGAI Bespreking",
          type: "reflectie",
          locatie: "Jan Thiel Beach",
          beschrijving: "We bespreken onze IKIGAI ervaringen met elkaar en nemen de tijd om onze inzichten te delen.",
          icon: Users
        }
      ]
    },
    {
      dag: 3,
      datum: "Dag 3",
      thema: "CHRISTOFFELBERG & INTERVISIE",
      beschrijving: "Uitdagende hike en diepgaande intervisie",
      activiteiten: [
        {
          tijd: "08:00",
          titel: "Ontbijt Zest Restaurant",
          type: "maaltijd",
          locatie: "Jan Thiel Beach",
          beschrijving: "Evaluatie dag 2 en voorbereiding op het programma van dag 3. We delen onze ervaringen en gespreksonderwerpen ter voorbereiding op de intervisie.",
          icon: Utensils
        },
        {
          tijd: "09:00 - 13:30",
          titel: "Beklimming Christoffelberg",
          type: "hike",
          locatie: "Christoffelpark",
          beschrijving: "De Christoffelberg, met een hoogte van 372 meter, is de hoogste berg van Curaçao. Tijdens onze uitdagende hike van ongeveer 3 uur naar de top, gebruiken we de tijd om ons te verdiepen in verschillende gespreksonderwerpen en reflecties.",
          icon: Mountain
        },
        {
          tijd: "13:30 - 14:30",
          titel: "Lunch",
          type: "maaltijd",
          locatie: "Restaurant bij Christoffelpark",
          beschrijving: "Na het geweldige uitzicht over het eiland en de uitdagende afdaling keren we terug naar een restaurant voor een lokale lunch. Evalueren, reflecteren en genieten!",
          icon: Utensils
        },
        {
          tijd: "15:00 - 17:00",
          titel: "Intervisie",
          type: "intervisie",
          locatie: "Morena Resort (terras)",
          beschrijving: "Op basis van onze ingebrachte onderwerpen gaan we met elkaar in gesprek middels intervisie. We nemen voldoende tijd om de dag naar tevredenheid af te sluiten.",
          icon: Users
        }
      ]
    },
    {
      dag: 4,
      datum: "Dag 4",
      thema: "JOUW DAG!",
      beschrijving: "Een dag volledig voor jezelf",
      activiteiten: [
        {
          tijd: "08:00",
          titel: "Ontbijt Zest Restaurant",
          type: "maaltijd",
          locatie: "Jan Thiel Beach",
          beschrijving: "Evaluatie dag 3 en voorbereiding op jouw dag.",
          icon: Utensils
        },
        {
          tijd: "Hele dag",
          titel: "Vrije dag voor zelfreflectie",
          type: "vrij",
          locatie: "Curaçao (naar keuze)",
          beschrijving: "Deze dag staat in het teken van jezelf! Een dag die jij volledig naar eigen inzicht gaat invullen. Neem de tijd voor jezelf, voor zelfreflectie met betrekking tot de afgelopen dagen of pure ontspanning.",
          icon: Lightbulb
        },
        {
          tijd: "Optioneel",
          titel: "Huurauto excursie",
          type: "optie",
          locatie: "Heel Curaçao",
          beschrijving: "Geef bij de inschrijving voor de retraite aan of je wenst gebruik te maken van een eigen huurauto voor deze dag. De kosten voor de daghuur van een KIA Picanto bedraagt ca € 79 incl. verzekering.",
          icon: Compass
        }
      ]
    },
    {
      dag: 5,
      datum: "Dag 5",
      thema: "SHETE BOKA NATIONAL PARK & MISSION STATEMENT",
      beschrijving: "Natuur inspiratie en missie definitie",
      activiteiten: [
        {
          tijd: "08:00",
          titel: "Ontbijt Zest Restaurant",
          type: "maaltijd",
          locatie: "Jan Thiel Beach",
          beschrijving: "Evaluatie dag 4 en voorbereiding op dag 5.",
          icon: Utensils
        },
        {
          tijd: "09:00 - 12:00",
          titel: "Bezoek Shete Boka National Park",
          type: "natuur",
          locatie: "Shete Boka National Park",
          beschrijving: "Shete Boka betekent 'zeven inhammen' in het Papiaments. We maken hier een wandeling over het nationale park en continueren onze sparringsessies. Laat je inspireren door de kracht van de Caribische zee!",
          icon: Waves
        },
        {
          tijd: "14:00 - 17:00",
          titel: "Mission Statement Workshop",
          type: "workshop",
          locatie: "Terras, Morena Eco Resort",
          beschrijving: "Wat is jouw stip op de horizon? Wat is je missie als partner of ouder? Deze middag nemen we de tijd om onze persoonlijke missie (mission statement) scherp te krijgen!",
          icon: Target
        },
        {
          tijd: "18:00",
          titel: "Happy Hour",
          type: "ontspanning",
          locatie: "Jan Thiel Beach",
          beschrijving: "We sluiten deze dag ontspannen af met de welbekende happy hour om 18.00 uur. Met een prachtig uitzicht op de ondergaande zon, genieten we van elkaars gezelschap en de heerlijke Brasa's!",
          icon: Sunset
        }
      ]
    },
    {
      dag: 6,
      datum: "Dag 6",
      thema: "HOFI MANGO & WILLEMSTAD",
      beschrijving: "Veerkracht en leiderschap in historische setting",
      activiteiten: [
        {
          tijd: "08:00",
          titel: "Ontbijt Zest Restaurant",
          type: "maaltijd",
          locatie: "Jan Thiel Beach",
          beschrijving: "Evaluatie dag 5 en voorbereiding op dag 6.",
          icon: Utensils
        },
        {
          tijd: "09:00 - 12:00",
          titel: "Bezoek Hòfi Mango",
          type: "natuur",
          locatie: "Hòfi Mango, Bandabou",
          beschrijving: "Hòfi Mango werd begin 2024 zwaar getroffen door een waterramp, maar dankzij de inzet van de lokale gemeenschap is het gebied volledig hersteld. Dit herstel is een krachtig voorbeeld van veerkracht en leiderschap.",
          icon: TreePine
        },
        {
          tijd: "12:00 - 13:30",
          titel: "Lunch tussen mangobomen",
          type: "maaltijd",
          locatie: "Hòfi Mango",
          beschrijving: "Na de verkenning van het park genieten we van een gezamenlijke lunch te midden van de serene natuur omringd door mangobomen.",
          icon: Utensils
        },
        {
          tijd: "14:00 - 17:00",
          titel: "Willemstad Excursie",
          type: "cultuur",
          locatie: "Punda & Otrobanda",
          beschrijving: "We bewonderen de beroemde Handelskade met zijn iconische kleurrijke gevels en verkennen de historische stadsdelen Punda en Otrobanda. De brug tussen deze stadsdelen is een prachtige metafoor voor leiderschap.",
          icon: Building
        }
      ]
    },
    {
      dag: 7,
      datum: "Dag 7",
      thema: "TRANSFER CURAÇAO – AMS",
      beschrijving: "Afsluiting en terugkeer naar Nederland",
      activiteiten: [
        {
          tijd: "08:00",
          titel: "Ontbijt Zest Restaurant",
          type: "maaltijd",
          locatie: "Jan Thiel Beach",
          beschrijving: "Laatste gezamenlijke ontbijt en afsluiting van het programma.",
          icon: Utensils
        },
        {
          tijd: "Ochtend",
          titel: "Check-out Morena Resort",
          type: "vertrek",
          locatie: "Morena Resort",
          beschrijving: "Op dag 7 sluiten we het programma af door gezamenlijk ons appartement te verlaten.",
          icon: ArrowRight
        },
        {
          tijd: "Avond",
          titel: "Vlucht Curaçao - Amsterdam",
          type: "reis",
          locatie: "Curaçao - Schiphol",
          beschrijving: "Na een week vol waardevolle inzichten en ervaringen, keren we terug met de 'bagage' van onze retraite: nieuwe energie, inspiratie en persoonlijke groei om mee te nemen in het dagelijks leven.",
          icon: Plane
        }
      ]
    }
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'reis': return Plane
      case 'aankomst': return Building
      case 'rust': return Coffee
      case 'maaltijd': return Utensils
      case 'excursie': return Waves
      case 'workshop': return Heart
      case 'reflectie': return Users
      case 'hike': return Mountain
      case 'intervisie': return Users
      case 'vrij': return Lightbulb
      case 'optie': return Compass
      case 'natuur': return TreePine
      case 'ontspanning': return Sunset
      case 'cultuur': return Camera
      case 'vertrek': return ArrowRight
      default: return Calendar
    }
  }

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'reis': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'aankomst': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'rust': return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
      case 'maaltijd': return 'bg-orange-500/20 text-orange-400 border-orange-500/30'
      case 'excursie': return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'
      case 'workshop': return 'bg-purple-500/20 text-purple-400 border-purple-500/30'
      case 'reflectie': return 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30'
      case 'hike': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
      case 'intervisie': return 'bg-primary-blue/20 text-primary-blue border-primary-blue/30'
      case 'vrij': return 'bg-pink-500/20 text-pink-400 border-pink-500/30'
      case 'optie': return 'bg-amber-500/20 text-amber-400 border-amber-500/30'
      case 'natuur': return 'bg-lime-500/20 text-lime-400 border-lime-500/30'
      case 'ontspanning': return 'bg-rose-500/20 text-rose-400 border-rose-500/30'
      case 'cultuur': return 'bg-violet-500/20 text-violet-400 border-violet-500/30'
      case 'vertrek': return 'bg-red-500/20 text-red-400 border-red-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const currentDay = retraiteProgramma.find(day => day.dag === selectedDay)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Main Content */}
      <div className="lg:ml-64 transition-all duration-300">
        {/* Header */}
        <header className="bg-surface border-b border-gray-800">
          <div className="px-6 py-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-text">7-Daags Retraite Programma</h1>
                <p className="text-text-muted">Morena Resort – Jan Thiel, Curaçao</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-blue-dark rounded-full flex items-center justify-center luxury-glow">
                <Calendar className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </header>

        <div className="px-6 py-8">
          {/* Day Navigation */}
          <div className="glass-effect rounded-2xl p-6 mb-8">
            <div className="flex flex-wrap gap-2">
              {retraiteProgramma.map((day) => (
                <button
                  key={day.dag}
                  onClick={() => setSelectedDay(day.dag)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    selectedDay === day.dag
                      ? 'bg-primary-blue text-white'
                      : 'bg-surface text-text-muted hover:text-text hover:bg-surface-light border border-gray-700'
                  }`}
                >
                  Dag {day.dag}
                </button>
              ))}
            </div>
            </div>

          {/* Current Day Overview */}
          {currentDay && (
            <div className="mb-8">
            <div className="glass-effect rounded-2xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-text mb-2">
                      {currentDay.datum} - {currentDay.thema}
                    </h2>
                    <p className="text-text-secondary text-lg">{currentDay.beschrijving}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-text-muted text-sm">Dag {currentDay.dag} van 7</p>
                    <p className="text-primary-blue font-semibold">{currentDay.activiteiten.length} activiteiten</p>
                    </div>
                </div>
                </div>
            </div>
          )}

          {/* Activities List */}
          {currentDay && (
            <div className="space-y-4">
              {currentDay.activiteiten.map((activiteit, index) => {
                const Icon = getActivityIcon(activiteit.type)
                return (
                  <div key={index} className="glass-effect rounded-2xl p-6 hover:border-primary-blue/30 transition-colors">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-blue-dark rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
          </div>

                        <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-bold text-text text-lg">{activiteit.titel}</h3>
                            <p className="text-primary-blue font-medium">{activiteit.tijd}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getActivityColor(activiteit.type)}`}>
                            {activiteit.type}
                          </span>
                            </div>
                        
                        <div className="flex items-center space-x-4 mb-3">
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-text-muted" />
                            <span className="text-text-muted text-sm">{activiteit.locatie}</span>
                          </div>
                        </div>
                        
                        <p className="text-text-secondary">{activiteit.beschrijving}</p>
                      </div>
                    </div>
              </div>
                )
              })}
            </div>
          )}

          {/* Programma Highlights */}
          <div className="mt-8">
            <div className="glass-effect rounded-2xl p-6">
              <h2 className="text-xl font-bold text-text mb-4">Programma Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-blue-dark rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-8 h-8 text-white" />
              </div>
                  <h3 className="font-bold text-text mb-2">IKIGAI Workshop</h3>
                  <p className="text-text-muted text-sm">Ontdek je levensdoel op het paradijselijke Klein Curaçao</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Mountain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-text mb-2">Christoffelberg Hike</h3>
                  <p className="text-text-muted text-sm">Uitdagende beklimming met diepgaande reflectie</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="w-8 h-8 text-white" />
              </div>
                  <h3 className="font-bold text-text mb-2">Mission Statement</h3>
                  <p className="text-text-muted text-sm">Definieer je persoonlijke missie en levensdoelen</p>
                </div>
              </div>
            </div>
          </div>

          {/* Accommodatie Info */}
          <div className="mt-8">
            <div className="glass-effect rounded-2xl p-6">
              <h2 className="text-xl font-bold text-text mb-4">Accommodatie</h2>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-text mb-2">Morena Resort – Jan Thiel</h3>
                  <p className="text-text-secondary mb-2">
                    Je hebt de beschikking over je eigen appartement met één slaapkamer met een balkon/terras met uitzicht op de tropische tuin van het resort.
                  </p>
                  <p className="text-text-muted text-sm">
                    Alle ontbijten worden geserveerd in Zest Restaurant met prachtig uitzicht op de zee.
                  </p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}