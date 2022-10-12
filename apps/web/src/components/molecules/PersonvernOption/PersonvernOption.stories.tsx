import PersonvernOption from "./PersonvernOption"

export default {
  title: "molecules/PersonvernOption",
  component: PersonvernOption,
}

const personList = [
  { id: 0, optionsText: "Brukerprofil synlig for andre brukere", state: false },
  { id: 1, optionsText: "Vis brukernavn i brukerprofil", state: false },
  { id: 2, optionsText: "Vis epostadresse i brukerprofil", state: false },
  { id: 3, optionsText: "Vis telefonnummer i brukerprofil", state: false },
  { id: 4, optionsText: "Vis adresse i brukerprofil", state: false },
  { id: 5, optionsText: "Synlig på offentlige påmeldingslister", state: false },
  { id: 6, optionsText: "Tillate at bilder av deg på offentlige arrangementer kan legges ut", state: false },
]

export const BasicStory = () => {
  return (
    <div style={{ display: "flex", gap: "30px", flexDirection: "column" }}>
      {personList.map((title) => {
        return <PersonvernOption>{title.optionsText}</PersonvernOption>
      })}
    </div>
  )
}
