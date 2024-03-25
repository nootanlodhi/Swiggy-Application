import axios from "axios"

export const fetchAllIndianFood = async(selectArea:string) =>{
    return await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?a="+selectArea);
}

export const fetchFoodDetailsData = async(id:string) =>{
    return await axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)
}

export const fetchAllArea = async() =>{
    return await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
}

export const fetchAllCategory = async() =>{
    return await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
}

export const fetchFoodCategoryData = async(selectCategory:string) =>{
    return await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c="+selectCategory);
}

export const fetchIngredientList = async() =>{
    return await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
}

export const fetchIngredientFood = async(selectIngredient:string) =>{
    return await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?i="+selectIngredient);
}

export const fetchSearchByLetter = async(letter:string) =>{
    return await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?f=" + letter);
}

export const fetchSearchByName = async(letter:string) =>{
    return await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + letter);
}