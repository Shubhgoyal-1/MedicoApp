import { statesWithCities } from "@/constants/states";

export const getCitiesByState = (
    state: string
): string[] => {
    return (
        statesWithCities.find((item) => item.state === state)
            ?.cities ?? []
    );
};
