import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const StudyContext = createContext();

export default function StudyProvider({ children }) {

    const [studySeconds, setStudySeconds] =
        useLocalStorage("studyTime",0);

    const dailyGoal = 4 * 60 * 60;

    const percentage = Math.min(
        (studySeconds / dailyGoal) * 100,
        100
    );

    return(

        <StudyContext.Provider
            value={{
                studySeconds,
                setStudySeconds,
                dailyGoal,
                percentage
            }}
        >
            {children}
        </StudyContext.Provider>

    );

}