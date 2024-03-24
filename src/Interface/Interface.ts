export interface IAllFood {
    idMeal: string,
    strMeal: string,
    strMealThumb: string
}

export interface IContextProps {
    foodData?: IAllFood[],
    isLoading?: boolean,
    setFoodData?: (foodData:IAllFood)=>void,
    setIsLoading?: (isLoading: boolean) => void
}

export type IFoodDetails = {
    strArea: string,
    strCategory: string,
    strIngredient1: string,
    strIngredient2: string,
    strIngredient3: string,
    strInstructions: string,
    strMealThumb: string
}

export interface IArea{
    strArea: string
}

export interface ICategory{
    strCategory: string
}