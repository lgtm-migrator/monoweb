import { css, Toggle } from "@dotkomonline/ui"
import { blackA } from "@radix-ui/colors"
import { GridIcon } from "@radix-ui/react-icons"
import { SetStateAction, FC, ReactNode } from "react"

interface PersonvernProps {
  children: ReactNode
}

const PersonvernOption: FC<PersonvernProps> = ({ children }) => {
  let isChecked: boolean = false

  return (
    <div className={styles.container()}>
      <div className={styles.row1()}>
        <p className={styles.textElement()}>{children}</p>
        <div className={styles.togglePos()}>
          <Toggle
            label={""}
            isChecked={false}
            setIsChecked={function (value: SetStateAction<boolean>): void {
              console.log(isChecked)
              throw new Error("Function not implemented.")
            }}
          ></Toggle>
        </div>
      </div>
      <hr className={styles.line()} />
    </div>
  )
}

const styles = {
  container: css({
    width: "100%",
  }),
  row1: css({
    display: "flex",
    flexDirection: "row",
    minWidth: "580px",
    width: "calc(50% + 21px)",
    justifyContent: "space-between",
  }),
  textElement: css({
    gridColumn: 1,
    padding: 3,
    margin: 0,
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "20px",
  }),
  line: css({
    height: "1px",
    border: "none",
    backgroundColor: "gray",
    padding: 0,
    marginTop: "15px",
    width: "100%",
  }),
  togglePos: css({
    gridColumn: 2,
    padding: 0,
    margin: 0,
  }),
}

export default PersonvernOption
