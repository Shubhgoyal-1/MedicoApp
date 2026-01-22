import { statesWithCities } from "@/constants/states";

//Util Function to get cities by state
export const getCitiesByState = (
    state: string
): string[] => {
    return (
        statesWithCities.find((item) => item.state === state)
            ?.cities ?? []
    );
};

export const getAttentionStyles = (attention?: string) => {
    switch (attention) {
        case "Critical":
            return "text-red-500";
        case "Minor":
            return "text-yellow-500";
        case "Normal":
            return "text-green-600";
        default:
            return "text-gray-500";
    }
};